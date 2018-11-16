const HEIGHT = '300';
const WIDTH = '100%';

const TEMP_DATA = {
              "chart": {
                  "caption": "Temperatura das salas de estudo",
                  "subCaption": "In MMbbl = One Million barrels",
                  "xAxisName": "Country",
                  "yAxisName": "Reserves (MMbbl)",
                  "numberSuffix": "K",
                  "theme": "fusion",
              },
              // Chart Data
              "data": [{
                  "label": "Venezuela",
                  "value": "290"
              }, {
                  "label": "Saudi",
                  "value": "260"
              }, {
                  "label": "Canada",
                  "value": "180"
              }, {
                  "label": "Iran",
                  "value": "140"
              }, {
                  "label": "Russia",
                  "value": "115"
              }, {
                  "label": "UAE",
                  "value": "100"
              }, {
                  "label": "US",
                  "value": "30"
              }, {
                  "label": "China",
                  "value": "30"
              }]
          };

const OWIFI_DATA = {
              "chart": {
                  "caption": "Ocupação do Wifi",
                  "subCaption": "In MMbbl = One Million barrels",
                  "xAxisName": "Country",
                  "yAxisName": "Reserves (MMbbl)",
                  "numberSuffix": "K",
                  "theme": "fusion",
              },
              // Chart Data
              "data": [{
                  "label": "Venezuela",
                  "value": "290"
              }, {
                  "label": "Saudi",
                  "value": "260"
              }, {
                  "label": "Canada",
                  "value": "180"
              }, {
                  "label": "Iran",
                  "value": "140"
              }, {
                  "label": "Russia",
                  "value": "115"
              }, {
                  "label": "UAE",
                  "value": "100"
              }, {
                  "label": "US",
                  "value": "30"
              }, {
                  "label": "China",
                  "value": "30"
              }]
          };    

const QWIFI_DATA = {
              "chart": {
                  "caption": "Qualidade do Wifi",
                  "subCaption": "In MMbbl = One Million barrels",
                  "xAxisName": "Country",
                  "yAxisName": "Reserves (MMbbl)",
                  "numberSuffix": "K",
                  "theme": "fusion",
              },
              // Chart Data
              "data": [{
                  "label": "Venezuela",
                  "value": "290"
              }, {
                  "label": "Saudi",
                  "value": "260"
              }, {
                  "label": "Canada",
                  "value": "180"
              }, {
                  "label": "Iran",
                  "value": "140"
              }, {
                  "label": "Russia",
                  "value": "115"
              }, {
                  "label": "UAE",
                  "value": "100"
              }, {
                  "label": "US",
                  "value": "30"
              }, {
                  "label": "China",
                  "value": "30"
              }]
          };                

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

$(document).ready(function()
{
    $('a').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    var header = $(".header");
    var icon = $(".header > i");
    if(Math.random() >= 0.5)
    {
      $("body").addClass("good");
      icon.text("sentiment_very_satisfied");      
      header.append("Sim, podes vir à UMa!");  
    }
    else
    {
      $("body").addClass("bad");
      icon.text("sentiment_very_dissatisfied");      
      header.append("Não, não podes vir à UMa!");  
    }

    drawChart('line','oWifiChart1',OWIFI_DATA);
    drawChart('doughnut3d','oWifiChart2',OWIFI_DATA);    
    drawChart('bubble','oWifiChart3',OWIFI_DATA);        
    drawChart('column2D','qWifiChart1',QWIFI_DATA);    
    drawChart('column2D','tempChart1',TEMP_DATA);


});