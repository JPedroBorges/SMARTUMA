(function()
{
        $.when($.getScript("js/common.js"), $.getScript("js/config.js"), $.getScript("js/data.js"), $.Deferred(function(deferred)
        {
                $(deferred.resolve);
        })).done(function()
        {
                const days = getLast7Days();
                $.ajaxSetup(
                {
                        async: false
                });
                $(document).ready(function()
                {
                        animateScroll();
                        $(".sidenav > li > a").click(function()
                        {
                                $(".sidenav").sidenav();
                        });
                        fillData(days);
                        setTimeout(() => $(".busy-indicator").css('display', 'none'), 1000);
                });
        });
})();