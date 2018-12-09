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
        });
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
                                                if (index == 6)
                                                {
                                                        charts.qwifi.dataset.push(
                                                        {
                                                                "seriesname": data.room,
                                                                "data": dayValues.slice(-30)
                                                        });
                                                }
                                                var avg = calculateAverage(flattenValues(dayValues));
                                                charts.qwifi_week.dataset[0].data.push(
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
        drawChart('qWifiChart', charts.qwifi);
        drawChart('qWifiChartWeek', charts.qwifi_week);
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
                                        if (index == 6)
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
        drawChart('tempChartWeek', charts.temp_week);
        drawChart('tempChart', charts.temp);
}