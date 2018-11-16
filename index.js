const HEIGHT = '300';
const WIDTH = '100%';
const THEME = 'fusion';
const GRAU_SAT = Math.random() * 100;


const TEMP_DATA = {
              "chart": {
                 "caption": "Temperatura atual",
                     "numbersuffix": " ºC",
                  "xAxisName": "Localização",
                  "yAxisName": "Temperatura (ºC)",
                  "theme": THEME,
              },
              "data": [{
                  "label": "Sala de estudo 0",
                  "value": "23"
              }, {
                  "label": "Sala de estudo 1",
                  "value": "26"
              }, {
                  "label": "Núcleo de informática",
                  "value": "18"
              }, {
                  "label": "Sala de estudo 3",
                  "value": "14"
              }, {
                  "label": "Biblioteca",
                  "value": "15"
              }]
          };

const TEMP_DATA_AVG = {
  "chart": {
    "showvalues": "0",
    "caption": "Últimos 7 dias",
    "numbersuffix": " ºC",
    "plottooltext": "Sales of $seriesName in $label was <b>$dataValue</b>",
    "showhovereffect": "1",
    "yaxisname": "$ (In billions)",
    "showsum": "1",
    "theme": THEME
  },
  "categories": [
    {
      "category": []
    }
  ],
  "dataset": [
    {
      "seriesname": "iPhone",
      "data": [
        {
          "value": "21"
        },
        {
          "value": "24"
        },
        {
          "value": "27"
        },
        {
          "value": "30"
        }
      ]
    },
    {
      "seriesname": "iPad",
      "data": [
        {
          "value": "8"
        },
        {
          "value": "10"
        },
        {
          "value": "11"
        },
        {
          "value": "12"
        }
      ]
    },
    {
      "seriesname": "Macbooks",
      "data": [
        {
          "value": "2"
        },
        {
          "value": "4"
        },
        {
          "value": "5"
        },
        {
          "value": "5.5"
        }
      ]
    },
    {
      "seriesname": "Others",
      "data": [
        {
          "value": "2"
        },
        {
          "value": "4"
        },
        {
          "value": "9"
        },
        {
          "value": "11"
        }
      ]
    },
    {
      "seriesname": "Profit",
      "plottooltext": "Total profit in $label was <b>$dataValue</b>",
      "renderas": "Line",
      "data": [
        {
          "value": "17"
        },
        {
          "value": "19"
        },
        {
          "value": "13"
        },
        {
          "value": "18"
        }
      ]
    }
  ]
};


const OWIFI_DATA = {
  "chart": {
    "caption": "AdWords Campaign Analysis",
    "subcaption": "Conversions as % of total",
    "xaxisname": "# Conversions",
    "yaxisname": "Cost Per Conversion",
    "numberprefix": "$",
    "theme": "fusion",
    "plottooltext": "$name : Share of total conversion: $zvalue%"
  },
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "0",
          "x": "0"
        },
        {
          "label": "1500",
          "x": "1500",
          "showverticalline": "1"
        },
        {
          "label": "3000",
          "x": "3000",
          "showverticalline": "1"
        },
        {
          "label": "4500",
          "x": "4500",
          "showverticalline": "1"
        },
        {
          "label": "6000",
          "x": "6000",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "5540",
          "y": "16.09",
          "z": "30.63",
          "name": "Campaign 1"
        },
        {
          "x": "4406",
          "y": "12.74",
          "z": "24.36",
          "name": "Campaign 2"
        },
        {
          "x": "1079",
          "y": "15.79",
          "z": "5.97",
          "name": "Campaign 3"
        },
        {
          "x": "1700",
          "y": "8.27",
          "z": "9.4",
          "name": "Campaign 4"
        },
        {
          "x": "853",
          "y": "15.89",
          "z": "4.71",
          "name": "Campaign 5"
        },
        {
          "x": "1202",
          "y": "10.74",
          "z": "6.65",
          "name": "Campaign 6"
        },
        {
          "x": "2018",
          "y": "6.14",
          "z": "11.16",
          "name": "Campaign 7"
        },
        {
          "x": "413",
          "y": "19.83",
          "z": "2.28",
          "name": "Campaign 8"
        },
        {
          "x": "586",
          "y": "13.96",
          "z": "3.24",
          "name": "Campaign 9"
        },
        {
          "x": "184",
          "y": "15.82",
          "z": "1.02",
          "name": "Campaign 10"
        },
        {
          "x": "311",
          "y": "5.83",
          "z": "1.72",
          "name": "Campaign 11"
        },
        {
          "x": "35",
          "y": "10.76",
          "z": "0.19",
          "name": "Campaign 12"
        },
        {
          "x": "55",
          "y": "2.73",
          "z": "0.3",
          "name": "Campaign 13"
        },
        {
          "x": "6",
          "y": "21.22",
          "z": "0.03",
          "name": "Campaign 14"
        }
      ]
    }
  ]
};    

const QWIFI_DATA = {
              "chart": {
                  "xAxisName": "Country",
                  "yAxisName": "Reserves (MMbbl)",
                  "numberSuffix": "K",
                  "theme": THEME,
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

const SAT_DATA = {
  "chart": {
    "caption": "Grau de satisfação",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": THEME,
    "showtooltip": "0"
  },
  "colorrange": {
    "color": [
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
  "dials": {
    "dial": [
      {
        "value": GRAU_SAT
      }
    ]
  }
};

fill7Days(TEMP_DATA_AVG);

$(document).ready(function()
{
    animateScroll();
    adaptTheme();
    drawCharts();
});