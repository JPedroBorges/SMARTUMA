const config = {
        "chart":
        {
                "height": "300",
                "width": "100%",
                "theme": "fusion"
        },
        "thresholds":
        {
                "bad": 25,
                "good": 75
        },
        "results":
        {
                "good":
                {
                        "icon": "sentiment_very_satisfied",
                        "response": "Sim!"
                },
                "average":
                {
                        "icon": "sentiment_neutral",
                        "response": "Talvez!"
                },
                "bad":
                {
                        "icon": "sentiment_very_dissatisfied",
                        "response": "Não!"
                }
        },
        "url": "https://jpborges.pt/smartuma/api/sensors"
}
const charts = {
        "grau_sat":
        {
                "type": "angulargauge",
                "chart":
                {
                        "caption": "Grau de satisfação",
                        "lowerlimit": "0",
                        "upperlimit": "100",
                        "showvalue": "1",
                        "numbersuffix": "%",
                        "theme": config.chart.theme,
                        "showtooltip": "0"
                },
                "colorrange":
                {
                        "color": [
                        {
                                "minvalue": "0",
                                "maxvalue": config.thresholds.bad,
                                "code": "#F2726F"
                        },
                        {
                                "minvalue": config.thresholds.bad,
                                "maxvalue": config.thresholds.good,
                                "code": "#FFC533"
                        },
                        {
                                "minvalue": config.thresholds.good,
                                "maxvalue": "100",
                                "code": "#62B58F"
                        }]
                },
                "dials":
                {}
        },
        "temp":
        {
                "type": "bar2d",
                "chart":
                {
                        "caption": "Hoje",
                        "numbersuffix": " ºC",
                        "xAxisName": "Localização",
                        "yAxisName": "Temperatura (ºC)",
                        "theme": config.chart.theme,
                },
                "data": []
        },
        "temp_week":
        {
                "type": "mscolumn2d",
                "chart":
                {
                        "caption": "Últimos 7 dias (média)",
                        "numbersuffix": " ºC",
                        "xAxisName": "Data",
                        "yAxisName": "Temperatura (ºC)",
                        "theme": config.chart.theme
                },
                "categories": [
                {
                        "category": getCurrentWeek()
                }],
                "dataset": []
        },
        "owifi":
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
                        "theme": config.chart.theme
                },
                "data": []
        },
        "owifi_week":
        {
                "type": "area2d",
                "chart":
                {
                        "caption": "Últimos 7 dias (média)",
                        "yaxisname": "Nº dispositivos ligados",
                        "rotatelabels": "1",
                        "setadaptiveymin": "1",
                        "theme": config.chart.theme
                },
                "data": []
        },
        "qwifi":
        {
                "type": "msline",
                "chart":
                {
                        "caption": "Hoje",
                        "xaxisname": "Data",
                        "yaxisname": "Qualidade (dBm)",
                        "showhovereffect": "1",
                        "numbersuffix": " dBm",
                        "drawcrossline": "1",
                        "plottooltext": "$seriesName: <b>$dataValue</b>",
                        "theme": config.chart.theme
                },
                "categories": [
                {
                        "category": getCurrentWeek()
                }],
                "dataset": []
        },
        "qwifi_week":
        {
                "type": "heatmap",
                "chart":
                {
                        "caption": "Últimos 7 dias (média)",
                        "xaxisname": "Data",
                        "yaxisname": "Localização",
                        "theme": config.chart.theme,
                        "showvalues": "0",
                        "plottooltext": "<b>Qualidade: $dataValue</b>{br}dBm"
                },
                "dataset": [
                {
                        "data": []
                }],
                "colorrange":
                {
                        "gradient": "0",
                        "startlabel": "Excelente",
                        "endlabel": "Inutilizável",
                        "color": [
                        {
                                "code": "28ff2f",
                                "minvalue": "-30",
                                "maxvalue": "0",
                                "label": "Excelente"
                        },
                        {
                                "code": "beff28",
                                "minvalue": "-67",
                                "maxvalue": "-30",
                                "label": "Boa"
                        },
                        {
                                "code": "fffb28",
                                "minvalue": "-70",
                                "maxvalue": "-67",
                                "label": "Normal"
                        },
                        {
                                "code": "ff6c28",
                                "minvalue": "-80",
                                "maxvalue": "-70",
                                "label": "Fraca"
                        },
                        {
                                "code": "ff2828",
                                "minvalue": "-1000",
                                "maxvalue": "-80",
                                "label": "Má"
                        }]
                }
        }
};