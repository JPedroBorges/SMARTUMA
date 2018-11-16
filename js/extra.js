function getMonday()
{
  d = new Date();
  var day = d.getDay();
  var diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}

function fill7Days(o)
{
  var date = getMonday();
  o.categories[0].category.push({ label: date.toLocaleDateString("pt-PT") });
  for(var i = 0; i < 6 ; i++)
  {
    date.setDate(date.getDate()+1);
    o.categories[0].category.push({ label: date.toLocaleDateString("pt-PT") });
  }
}

function drawChart(type, renderAt, dataSource)
{
    new FusionCharts({
      type: type,
      renderAt: renderAt,
      dataSource: dataSource,
      height: HEIGHT,
      width: WIDTH,
      dataFormat: 'json'
    }).render();
}

function drawCharts()
{
    drawChart('line','oWifiChart1',OWIFI_DATA);
    drawChart('bubble','oWifiChart1',OWIFI_DATA);           
    drawChart('bubble','oWifiChart2',OWIFI_DATA);        
    drawChart('column2D','qWifiChart1',QWIFI_DATA);    

    drawChart('column2D','tempChart1',TEMP_DATA);
    drawChart('stackedcolumn2dline','tempChart2',TEMP_DATA_AVG);    

    drawChart('angulargauge','satChart',SAT_DATA);    
}

function animateScroll()
{
    $('a').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
}

function adaptTheme()
{
    var header = $(".header");
    var icon = $(".header > i");
    if(GRAU_SAT >= 75)
    {
      $("body").addClass("good");
      icon.text("sentiment_very_satisfied");      
      header.append("Sim, podes vir à UMa!");  
    }
    else if(GRAU_SAT >= 50)
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