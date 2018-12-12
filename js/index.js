(function()
{
        $.ajaxSetup(
        {
                async: false
        });
        const scripts = ['js/common.js', 'js/config.js', 'js/data.js'];
        const queue = scripts.map(s => $.getScript(s));
        $.when.apply(null, queue).done(function()
        {
                const days = getLast7Days();
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