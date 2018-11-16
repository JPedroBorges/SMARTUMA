function getMonday()
{
  d = new Date();
  var day = d.getDay();
  var diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}

function getCurrentWeek()
{
  var date = getMonday();
  var days = [];
  days.push({ label: date.toLocaleDateString("pt-PT") });
  for(var i = 0; i < 6 ; i++)
  {
    date.setDate(date.getDate()+1);
    days.push({ label: date.toLocaleDateString("pt-PT") });
  }
  return days;
}

function drawChart(renderAt, dataSource)
{
    new FusionCharts({
      type: dataSource.type,
      renderAt: renderAt,
      dataSource: dataSource,
      height: HEIGHT,
      width: WIDTH,
      dataFormat: 'json'
    }).render();
}

function animateScroll()
{
    $("a:not([href*='details'],[href*='linkedin'],[href*='github'])").on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
}

function adaptTheme(grau_sat)
{
    var header = $(".header");
    var icon = $(".header > i");
    if(grau_sat >= 75)
    {
      $("body").addClass("good");
      icon.text("sentiment_very_satisfied");      
      header.append("Sim, podes vir à UMa!");  
    }
    else if(grau_sat >= 50)
    {
      $("body").addClass("average");
      icon.text("sentiment_neutral");      
      header.append("Talvez!");  
    }
    else 
    {
      $("body").addClass("bad");
      icon.text("sentiment_very_dissatisfied");      
      header.append("Não, não podes vir à UMa!");  
    }
}