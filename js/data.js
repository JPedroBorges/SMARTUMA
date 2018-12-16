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
                var device_sensors = sensors.filter((s) => s.name.includes("Device"));
                device_sensors = device_sensors.map((s) => s.href.link);
                fillDeviceData(device_sensors, days);
                $.ajaxSetup(
                {
                        async: true
                });
                fillSatData();
        });
}

function fillSatData()
{
        const temp_latest_avg = calculateAverage(flattenValues(charts.temp_week.dataset[0].data));
        const signal_latest_avg = calculateAverage(flattenValues(charts.signal_week.dataset[0].data));
        const device_latest = calculateAverage(flattenValues(charts.device_week.data));
        const temp_sat_value = 1 - Math.min(Math.max(0, Math.abs((temp_latest_avg - config.ideal_temp) / config.ideal_temp)), 1);
        const signal_sat_value = Math.min(Math.max(0, config.ideal_signal / signal_latest_avg), 1);
        const device_sat_value = Math.min(Math.max(0, config.ideal_devices / device_latest), 1);
        const grau_sat = config.temp_importance * temp_sat_value + config.signal_importance * signal_sat_value + config.device_importance * device_sat_value;
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
                                                var avg = calculateAverage(flattenValues(dayValues));
                                                charts.device_week.data.push(
                                                {
                                                        "label": d.label,
                                                        "value": avg
                                                });
                                        }
                                });
                                charts.device.data = measures.slice(-30);
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
                                                var avg = calculateAverage(flattenValues(dayValues));
                                                charts.signal_week.dataset[0].data.push(
                                                {
                                                        "rowid": data.room,
                                                        "columnid": d.label,
                                                        "value": avg
                                                });
                                        }
                                });
                                charts.signal.dataset.push(
                                {
                                        "seriesname": data.room,
                                        "data": measures.slice(-30)
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
                                        var dayValues = filterByDay(measures, d);
                                        if (dayValues.length)
                                        {
                                                var avg = calculateAverage(flattenValues(dayValues));
                                        }
                                        seriesdata.push(
                                        {
                                                "value": avg
                                        });
                                });
                                charts.temp.dataset.push(
                                {
                                        "seriesname": data.room,
                                        "data": measures.slice(-30)
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