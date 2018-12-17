const config = {
        "chart":
        {
                "height": "300",
                "width": "100%",
                "theme": "fusion",
                "drawAnchors": "0"
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
        "url": "https://jpborges.pt/smartuma/api/sensors",
        "ideal_temp": 25,
        "ideal_signal": -40,
        "ideal_devices": 30,
        "temp_importance": 30,
        "device_importance": 30,
        "signal_importance": 40
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
                "type": "msspline",
                "chart":
                {
                        "caption": "",
                        "xaxisname": "",
                        "yaxisname": "Temperatura (ºC)",
                        "showhovereffect": "1",
                        "numbersuffix": " ºC",
                        "drawcrossline": "1",
                        "plottooltext": "$seriesName: <b>$dataValue</b>",
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors
                },
                "categories": [
                {
                        "category": new Array(30)
                }],
                "dataset": []
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
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors
                },
                "categories": [
                {
                        "category": getLast7Days()
                }],
                "dataset": []
        },
        "device":
        {
                "type": "spline",
                "chart":
                {
                        "caption": "",
                        "yaxisname": "# dispositivos",
                        "legendposition": "Right",
                        "drawanchors": "0",
                        "showvalues": "0",
                        "plottooltext": "<b>$dataValue</b>",
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors
                },
                "data": []
        },
        "device_week":
        {
                "type": "bar2d",
                "chart":
                {
                        "caption": "Últimos 7 dias (média)",
                        "yaxisname": "# dispositivos",
                        "rotatelabels": "1",
                        "setadaptiveymin": "1",
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors
                },
                "data": []
        },
        "signal":
        {
                "type": "msline",
                "chart":
                {
                        "caption": "",
                        "xaxisname": "",
                        "yaxisname": "Qualidade do sinal (dBm)",
                        "showhovereffect": "1",
                        "numbersuffix": " dBm",
                        "drawcrossline": "1",
                        "plottooltext": "$seriesName: <b>$dataValue</b>",
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors
                },
                "categories": [
                {
                        "category": new Array(30)
                }],
                "dataset": []
        },
        "signal_week":
        {
                "type": "heatmap",
                "chart":
                {
                        "caption": "Últimos 7 dias (média)",
                        "xaxisname": "Data",
                        "yaxisname": "Localização",
                        "theme": config.chart.theme,
                        "drawAnchors": config.chart.drawAnchors,
                        "showvalues": "0",
                        "plottooltext": "<b>Qualidade do sinal: $dataValue</b>{br}dBm",
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