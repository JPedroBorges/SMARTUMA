const days = getCurrentWeek();
const GRAU_SAT = Math.random() * 100;
$.ajaxSetup(
{
        async: false
});
$(document).ready(function()
{
        animateScroll();
        adaptTheme(GRAU_SAT);
        $(".sidenav > li > a").click(function()
        {
                $(".sidenav").sidenav();
        });
        fillData();
        charts.grau_sat.dials.dial = [
        {
                "value": GRAU_SAT
        }];
        charts.owifi.data = [
        {
                "label": "00:00",
                "value": "20"
        },
        {
                "label": "01:00",
                "value": "17"
        },
        {
                "label": "02:00",
                "value": "12"
        },
        {
                "label": "03:00",
                "value": "7"
        },
        {
                "label": "04:00",
                "value": "8"
        },
        {
                "label": "05:00",
                "value": "8"
        },
        {
                "label": "06:00",
                "value": "3"
        },
        {
                "label": "07:00",
                "value": "5"
        }];
        charts.owifi_week.data = [
        {
                "label": days[0].label,
                "value": "50"
        },
        {
                "label": days[1].label,
                "value": "42"
        },
        {
                "label": days[2].label,
                "value": "44"
        },
        {
                "label": days[3].label,
                "value": "38"
        },
        {
                "label": days[4].label,
                "value": "51"
        },
        {
                "label": days[5].label,
                "value": "32"
        },
        {
                "label": days[6].label,
                "value": "11"
        }];
        drawChart('oWifiChart', charts.owifi);
        drawChart('oWifiChartWeek', charts.owifi_week);
        drawChart('satChart', charts.grau_sat);
        setTimeout(() => $(".progress").css('display', 'none'), 1000);
});