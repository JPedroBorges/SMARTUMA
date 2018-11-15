const WIDTH = '100%';
const HEIGHT = '200';

function drawChart(type, renderAt, dataSource)
{
    new FusionCharts({
      type: type,
      renderAt: renderAt,
      dataSource: dataSource,
      width: WIDTH,
      height: HEIGHT,
      dataFormat: 'json'
    }).render();
}

$(document).ready(function()
{
    drawChart('column2D','oWifiChart',
        {
              "chart": {
                  "caption": "Countries With Most Oil Reserves [2017-18]",
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
          });

        drawChart('column2D','qWifiChart',
        {
              "chart": {
                  "caption": "Countries With Most Oil Reserves [2017-18]",
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
          });

    drawChart('column2D','tempChart',
        {
              "chart": {
                  "caption": "Countries With Most Oil Reserves [2017-18]",
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
          });        
});