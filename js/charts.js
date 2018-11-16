const HEIGHT = '300';
const WIDTH = '100%';
const THEME = 'fusion';
const sat_data = 
{
  "type": "angulargauge",
  "chart": 
  {
    "caption": "Grau de satisfação",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": THEME,
    "showtooltip": "0"
  },
  "colorrange":
  {
    "color": 
    [
      {
        "minvalue": "0",
        "maxvalue": "50",
        "code": "#F2726F"
      },
      {
        "minvalue": "50",
        "maxvalue": "75",
        "code": "#FFC533"
      },
      {
        "minvalue": "75",
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {}
};
const temp_data = 
{
    "type": "column2D",
    "chart": 
    {
      "caption": "Temperatura atual",
      "numbersuffix": " ºC",
      "xAxisName": "Localização",
      "yAxisName": "Temperatura (ºC)",
      "theme": THEME,
    }
};
const temp_data_week = 
{
  "type": "mscolumn2d",
  "chart": 
  {
      "caption": "Últimos 7 dias",
      "numbersuffix": " ºC",
      "xAxisName": "Data",
      "yAxisName": "Temperatura (ºC)",
      "theme": THEME
  },
  "categories": 
  [
    {
      "category": getCurrentWeek()
    }
  ],
  "dataset": []
};      
const owifi_data = 
{
    "type": "area2d",
    "chart": 
    {
        "caption": "Hoje",
        "yaxisname": "Nº dispositivos ligados (média)",
        "legendposition": "Right",
        "drawanchors": "0",
        "showvalues": "0",
        "plottooltext": "<b>$dataValue</b>",
        "theme": THEME
      },
  "data": []
};      
const owifi_data_week =
{
    "type": "line",
    "chart": 
    {
        "caption": "Últimos 7 dias",
        "yaxisname": "Nº dispositivos ligados (média)",
        "rotatelabels": "1",
        "setadaptiveymin": "1",
        "theme": "fusion"
    },
    "data": []
};