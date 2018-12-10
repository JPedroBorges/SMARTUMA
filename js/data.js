function fillData(days)
{
        $.get(config.url, (res) =>
        {
                const sensors = res.data;
                var temp_sensors = sensors.filter((s) => s.name.includes("Temperature"));
                temp_sensors = temp_sensors.map((s) => s.href.link);
                fillTempData(temp_sensors, days);
                var signal_sensors = sensors.filter((s) => s.name.includes("Wifi"));
                signal_sensors = signal_sensors.map((s) => s.href.link);
                fillSignalData(signal_sensors, days);
                var device_sensors = sensors.filter((s) => s.name.includes("Wifi"));
                device_sensors = device_sensors.map((s) => s.href.link);
                fillDeviceData(device_sensors, days);
                fillSatData();
        });
}

function fillSatData()
{
        // Ideal values
        const IDEAL_TEMP = 23;
        const IDEAL_SIGNAL = -67;
        const IDEAL_DEVICES = 30;
        // Importance values
        const TEMP_IMPORTANCE = 40;
        const DEVICE_IMPORTANCE = 30;
        const SIGNAL_IMPORTANCE = 30;
        // Latest values
        const temp_latest_avg = calculateAverage(flattenValues(charts.temp.data));
        const signal_latest_avg = calculateAverage(charts.signal.dataset.map((d) => d.data[d.data.length - 1].value));
        const device_latest = charts.device.data[charts.device.data.length - 1].value;
        // Calculated satisfaction values
        const temp_sat_value = 1 - Math.abs((IDEAL_TEMP - temp_latest_avg) / IDEAL_TEMP);
        const signal_sat_value = (signal_latest_avg >= IDEAL_SIGNAL) ? 1 : (1 - ((IDEAL_SIGNAL - signal_latest_avg) / signal_latest_avg));
        const device_sat_value = (device_latest <= IDEAL_DEVICES) ? 1 : (1 - ((IDEAL_DEVICES - device_latest) / device_latest));
        const grau_sat = TEMP_IMPORTANCE * temp_sat_value + SIGNAL_IMPORTANCE * signal_sat_value + DEVICE_IMPORTANCE * device_sat_value;
        charts.grau_sat.dials.dial = [
        {
                "value": grau_sat
        }];
        drawChart('satChart', charts.grau_sat);
        adaptTheme(grau_sat);
}

function fillDeviceData(sensors, days)
{
        sensors.forEach((s) =>
        {
                $.get(s).done((res) =>
                {
                        var data = res.data;
                        var href = data.href.measures;
                        $.get(href).done((res) =>
                        {
                                var measures = sortMeasuresAsc(res.data);
                                days.forEach((d, index) =>
                                {
                                        var dayValues = filterByDay(measures, d);
                                        if (dayValues.length)
                                        {
                                                if (index == days.length - 1)
                                                {
                                                        charts.device.data = dayValues.slice(-30);
                                                }
                                                var avg = calculateAverage(flattenValues(dayValues));
                                                charts.device_week.data.push(
                                                {
                                                        "label": d.label,
                                                        "value": avg
                                                });
                                        }
                                });
                        });
                });
        });
        drawChart('deviceC', charts.device);
        drawChart('deviceCW', charts.device_week);
}

function fillSignalData(sensors, days)
{
        sensors.forEach((s) =>
        {
                $.get(s).done((res) =>
                {
                        var data = res.data;
                        var href = data.href.measures;
                        $.get(href).done((res) =>
                        {
                                var measures = sortMeasuresAsc(res.data);
                                days.forEach((d, index) =>
                                {
                                        var dayValues = filterByDay(measures, d);
                                        if (dayValues.length)
                                        {
                                                if (index == days.length - 1)
                                                {
                                                        charts.signal.dataset.push(
                                                        {
                                                                "seriesname": data.room,
                                                                "data": dayValues.slice(-30)
                                                        });
                                                }
                                                var avg = calculateAverage(flattenValues(dayValues));
                                                charts.signal_week.dataset[0].data.push(
                                                {
                                                        "rowid": data.room,
                                                        "columnid": d.label,
                                                        "value": avg
                                                });
                                        }
                                });
                        });
                });
        });
        drawChart('signalC', charts.signal);
        drawChart('signalCW', charts.signal_week);
}

function fillTempData(sensors, days)
{
        sensors.forEach((s) =>
        {
                $.get(s).done((res) =>
                {
                        var data = res.data;
                        var href = data.href.measures;
                        $.get(href).done((res) =>
                        {
                                var measures = sortMeasuresAsc(res.data);
                                var seriesdata = [];
                                days.forEach((d, index) =>
                                {
                                        if (index == days.length - 1)
                                        {
                                                var today = findLatestTodayValue(measures);
                                                if (today)
                                                {
                                                        charts.temp.data.push(
                                                        {
                                                                "label": data.room,
                                                                "value": "" + today.value
                                                        });
                                                }
                                        }
                                        var dayValues = flattenValues(filterByDay(measures, d));
                                        if (dayValues.length)
                                        {
                                                var avg = calculateAverage(dayValues);
                                        }
                                        seriesdata.push(
                                        {
                                                "value": avg
                                        });
                                });
                                var dataset = {
                                        "seriesname": data.room,
                                        "data": seriesdata
                                };
                                charts.temp_week.dataset.push(dataset);
                        });
                });
        });
        drawChart('tempC', charts.temp);
        drawChart('tempCW', charts.temp_week);
}