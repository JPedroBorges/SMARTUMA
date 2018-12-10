function getToday()
{
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
}

function getLast7Days()
{
        var date = getToday();
        var days = [];
        days.unshift(
        {
                label: date.toLocaleDateString("pt-PT")
        });
        for (var i = 0; i < 6; i++)
        {
                date.setDate(date.getDate() - 1);
                days.unshift(
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

function sortMeasuresDesc(measures)
{
        return measures.sort((a, b) => Date.parse(b.timestamps.date) - Date.parse(a.timestamps.date));
}

function findLatestTodayValue(measures)
{
        var today = getToday().getTime();
        return measures.find((m) => today == Date.parse(m.timestamps.date.substring(0, 10)));
}

function filterByDay(measures, day)
{
        var day = Date.parse(day.label.split('/').reverse().join('/'));
        return measures.filter((m) => day == Date.parse(m.timestamps.date.substring(0, 10)));
}

function flattenValues(measures)
{
        return measures.map((v) => v.value).filter((d) => d);
}

function calculateAverage(measures)
{
        var sum = measures.reduce((a, b) => +a + +b);
        return sum / measures.length;
}