function getMonday()
{
        d = new Date();
        var day = d.getDay();
        var diff = d.getDate() - day + (day == 0 ? -6 : 1);
        return new Date(d.setDate(diff));
}

function getCurrentWeek()
{
        var date = getMonday();
        var days = [];
        days.push(
        {
                label: date.toLocaleDateString("pt-PT")
        });
        for (var i = 0; i < 6; i++)
        {
                date.setDate(date.getDate() + 1);
                days.push(
                {
                        label: date.toLocaleDateString("pt-PT")
                });
        }
        return days;
}

function drawChart(renderAt, dataSource)
{
        new FusionCharts(
        {
                type: dataSource.type,
                renderAt: renderAt,
                dataSource: dataSource,
                height: config.chart.height,
                width: config.chart.width,
                dataFormat: 'json'
        }).render();
}

function animateScroll()
{
        $("a[href*='#'][href!='#']").on('click', function(event)
        {
                event.preventDefault();
                $('html,body').animate(
                {
                        scrollTop: $(this.hash).offset().top
                }, 500);
        });
}

function adaptTheme(grau_sat)
{
        var header = $(".header");
        var icon = $(".header > i");
        if (grau_sat >= config.thresholds.good)
        {
                $("body").addClass("good");
                icon.text(config.results.good.icon);
                header.append(config.results.good.response);
        }
        else if (grau_sat >= config.thresholds.bad)
        {
                $("body").addClass("average");
                icon.text(config.results.average.icon);
                header.append(config.results.average.response);
        }
        else
        {
                $("body").addClass("bad");
                icon.text(config.results.bad.icon);
                header.append(config.results.bad.response);
        }
}

function sortMeasuresAsc(measures)
{
        return measures.sort((a, b) => Date.parse(a.timestamps.date) - Date.parse(b.timestamps.date));
}

function findLatestTodayValue(measures)
{
        return measures.find((m) => new Date().setHours(0, 0, 0, 0) == Date.parse(m.timestamps.date.substring(0, 10)));
}

function filterByDay(measures, day)
{
        return measures.filter((m) => Date.parse(day.label.split('/').reverse().join('/')) == Date.parse(m.timestamps.date.substring(0, 10))).map((v) => v.value);
}

function calculateAverage(measures)
{
        var sum = measures.reduce((a, b) => +a + +b);
        return sum / measures.length;
}