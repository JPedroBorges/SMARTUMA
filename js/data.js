function fillData()
{
        $.get(config.url, (res) =>
        {
                const sensors = res.data;
                var temp_sensors = sensors.filter((s) =>
                {
                        return s.name.includes("Temperature");
                });
                temp_sensors = temp_sensors.map((s) => s.href.link);
                fillTempData(temp_sensors);
                var wifi_sensors = sensors.filter((s) =>
                {
                        return s.name.includes("Wifi");
                });
                wifi_sensors = wifi_sensors.map((s) => s.href.link);
                fillWifiData(wifi_sensors);
        });
}

function fillWifiData(sensors)
{
        sensors.forEach((s) =>
        {
                $.get(s).done((res) =>
                {
                        var data = res.data;
                        var href = data.href.measures;
                        $.get(href).done((res) =>
                        {
                                var measures = res.data;
                                charts.qwifi.dataset.push(
                                {
                                        "seriesname": data.room,
                                        "data": []
                                });
                        })
                });
        });
        charts.qwifi.dataset.push(
        {
                "seriesname": "Sala de estudo 0",
                "data": []
        });
        charts.qwifi.dataset.push(
        {
                "seriesname": "Sala de estudo 1",
                "data": []
        });
        charts.qwifi.dataset.push(
        {
                "seriesname": "Núcleo de informática",
                "data": []
        });
        charts.qwifi.dataset.push(
        {
                "seriesname": "Sala de estudo 3",
                "data": []
        });
        charts.qwifi.dataset.push(
        {
                "seriesname": "Biblioteca",
                "data": []
        });
        charts.qwifi.dataset.forEach(function(e)
        {
                for (var i = 0; i < 7; i++) e.data.push(
                {
                        value: -Math.random() * 100
                });
        });
        drawChart('qWifiChart', charts.qwifi);
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
                                        var dayValues = filterByDay(measures, d);
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