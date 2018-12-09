function fillData()
{
        $.get(config.url, (res) =>
        {
                const sensors = res.data;
                var temp_sensors = sensors.filter((s) => s.name.includes("Temperature"));
                temp_sensors = temp_sensors.map((s) => s.href.link);
                fillTempData(temp_sensors);
                var signal_sensors = sensors.filter((s) => s.name.includes("Wifi"));
                signal_sensors = signal_sensors.map((s) => s.href.link);
                fillSignalData(signal_sensors);
                var device_sensors = sensors.filter((s) => s.name.includes("Wifi"));
                device_sensors = device_sensors.map((s) => s.href.link);
                fillDeviceData(device_sensors);
        });
}

function fillDeviceData(sensors)
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

function fillSignalData(sensors)
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

function fillTempData(sensors)
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