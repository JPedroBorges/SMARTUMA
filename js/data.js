function fillData(days, today)
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
                fillExternalData();
                $.ajaxSetup(
                {
                        async: true
                });
                fillSatData();
        });
}

function fillExternalData()
{
        fillOccupationData();
}

function fillOccupationData()
{
        $.get(config.external.occupation.rooms, (res) =>
        {
                const rooms = res.map(r => (
                {
                        seriesname: r.nome_sala,
                        id: r.id,
                        capacidade: r.capacidade
                }));
                $.get(config.external.occupation.daily, (res) =>
                {
                        const occupations = groupBy(res, "id_room");
                        for (var room in occupations)
                        {
                                var occupation = occupations[room].map(o => (
                                {
                                        value: o.occupied_seats_avg,
                                        week_day: o.week_day
                                })).sort((a, b) => (a.week_day - b.week_day)).map(o => (
                                {
                                        value: o.value
                                }));
                                var _room = rooms[room];
                                _room.data = occupation || [];
                        }
                        charts.occ_week.dataset = rooms;
                        drawChart('occCW', charts.occ_week);
                });
        });
}

function fillSatData()
{
        const temp_latest_avg = calculateAverage(flattenValues(charts.temp_week.dataset.map(c => (
        {
                value: calculateAverage(flattenValues(c.data))
        }))))
        const signal_latest_avg = calculateAverage(flattenValues(charts.signal_week.dataset[0].data));
        const occ_latest_avg = calculateAverage(flattenValues(charts.occ_week.dataset.map(c => (
        {
                value: calculateAverage(flattenValues(c.data)) / c.capacidade
        }))));
        const temp_sat_value = 1 - Math.min(Math.max(0, Math.abs((temp_latest_avg - config.ideal_temp) / config.ideal_temp)), 1);
        const signal_sat_value = Math.min(Math.max(0, config.ideal_signal / signal_latest_avg), 1);
        const occ_sat_value = (occ_latest_avg <= config.ideal_occ) ? 1 : 1 - occ_latest_avg;
        const grau_sat = config.temp_importance * temp_sat_value + config.signal_importance * signal_sat_value + config.occ_importance * occ_sat_value;
        charts.grau_sat.dials.dial = [
        {
                "value": grau_sat
        }];
        drawChart('satChart', charts.grau_sat);
        adaptTheme(grau_sat);
        if (window.isNotViable)
        {
                window.isNotViable = undefined;
                $(".overlay").css("display", "unset");
        }
}

function fillSignalData(sensors, days)
{
        sensors.forEach((s) =>
        {
                $.get(s).done((res) =>
                {
                        const data = res.data;
                        const href = data.href.measures;
                        const averages = Object.keys(data.average).map(k => data.average[k]);
                        $.get(href).done((res) =>
                        {
                                const measures = sortMeasuresAsc(res.data);
                                const isNotViable = !filterByDay(measures, days[6]).length;
                                if (isNotViable) window.isNotViable = isNotViable;
                                days.forEach((d, index) =>
                                {
                                        if (averages[index])
                                        {
                                                charts.signal_week.dataset[0].data.push(
                                                {
                                                        "rowid": data.room,
                                                        "columnid": d.label,
                                                        "value": averages[index]
                                                });
                                        }
                                });
                                charts.signal.dataset.push(
                                {
                                        "seriesname": data.room,
                                        "data": measures
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
                        const data = res.data;
                        const href = data.href.measures;
                        $.get(href).done((res) =>
                        {
                                const measures = sortMeasuresAsc(res.data);
                                const isNotViable = !filterByDay(measures, days[6]).length;
                                if (isNotViable) window.isNotViable = isNotViable;
                                charts.temp.dataset.push(
                                {
                                        seriesname: data.room,
                                        data: measures
                                });
                        });
                        const averages = Object.keys(data.average).map(k => (
                        {
                                value: data.average[k]
                        }));
                        const dataset = {
                                "seriesname": data.room,
                                "data": averages
                        };
                        charts.temp_week.dataset.push(dataset);
                });
        });
        drawChart('tempC', charts.temp);
        drawChart('tempCW', charts.temp_week);
}