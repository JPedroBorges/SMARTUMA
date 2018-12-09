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
        drawChart('satChart', charts.grau_sat);
        setTimeout(() => $(".busy-indicator").css('display', 'none'), 1000);
});