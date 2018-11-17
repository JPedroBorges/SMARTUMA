const HEIGHT = '300';
const WIDTH = '100%';
const THEME = 'fusion';
const BAD_THRESHOLD = 25;
const GOOD_THRESHOLD = 75;



/* * *
    SAT 
            * * */
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
        "maxvalue": BAD_THRESHOLD,
        "code": "#F2726F"
      },
      {
        "minvalue": BAD_THRESHOLD,
        "maxvalue": GOOD_THRESHOLD,
        "code": "#FFC533"
      },
      {
        "minvalue": GOOD_THRESHOLD,
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {}
};



/* * *
    TEMP
            * * */
const temp_data = 
{
    "type": "bar2d",
    "chart": 
    {
      "caption": "Hoje",
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
      "caption": "Últimos 7 dias (média)",
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


/* * *
    OWIFI 
            * * */
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
    "type": "area2d",
    "chart": 
    {
        "caption": "Últimos 7 dias (média)",
        "yaxisname": "Nº dispositivos ligados",
        "rotatelabels": "1",
        "setadaptiveymin": "1",
        "theme": THEME
    },
    "data": []
};



/* * *
    QWIFI 
            * * */
const qwifi_data = {
 "type": "msline",
 "chart": {
    "caption": "Hoje",
    "xaxisname": "Data",
    "yaxisname": "Qualidade (dBm)",
    "showhovereffect": "1",
    "numbersuffix": " dBm",
    "drawcrossline": "1",
    "plottooltext": "$seriesName: <b>$dataValue</b>",
    "theme": THEME
  },
  "categories": 
  [
    {
      "category": getCurrentWeek()
    }
  ],
  "dataset": [
    { "seriesname": "Sala de estudo 0", "data": [] },
    { "seriesname": "Sala de estudo 1", "data": [] },
    { "seriesname": "Núcleo de informática", "data": [] },    
    { "seriesname": "Sala de estudo 3", "data": [] },    
    { "seriesname": "Biblioteca", "data": [] },    
  ]
};
const qwifi_data_week =
{
    "type": "heatmap",
      "chart": {
    "caption": "Últimos 7 dias (média)",
    "xaxisname": "Data",
    "yaxisname": "Localização",
    "theme": THEME,
    "showvalues": "0",
    "plottooltext": "<b>Qualidade: $dataValue</b>{br}dBm"
  },
  "dataset": 
  [
    {
      "data": []
    }
  ],
  "colorrange": {
    "gradient": "0",
    "startlabel": "Excelente",
    "endlabel": "Inutilizável",
    "color": [
      { "code": "28ff2f", "minvalue": "-30", "maxvalue": "0", "label": "Excelente" },
      { "code": "beff28", "minvalue": "-67", "maxvalue": "-30", "label": "Boa" },
      { "code": "fffb28", "minvalue": "-70", "maxvalue": "-67", "label": "Normal" },
      { "code": "ff6c28", "minvalue": "-80", "maxvalue": "-70", "label": "Fraca" },
      { "code": "ff2828", "minvalue": "-1000", "maxvalue": "-80", "label": "Má" }
    ]
  }
};