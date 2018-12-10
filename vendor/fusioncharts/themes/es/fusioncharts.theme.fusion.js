function styleInject(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&'undefined'!=typeof document){var d=document.head||document.getElementsByTagName('head')[0],e=document.createElement('style');e.type='text/css','top'===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}var css='@font-face {\n  font-family: \'Source Sans Pro\';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin */\n@font-face {\n  font-family: \'Source Sans Pro Light\';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\'Source Sans Pro Light\'), local(\'SourceSansPro-Light\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n';styleInject('@font-face {\n  font-family: \'Source Sans Pro\';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin */\n@font-face {\n  font-family: \'Source Sans Pro Light\';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\'Source Sans Pro Light\'), local(\'SourceSansPro-Light\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n');var themeObject={name:'fusion',theme:{base:{chart:{paletteColors:'#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2',showShadow:'0',showPlotBorder:'0',usePlotGradientColor:'0',showValues:'0',bgColor:'#FFFFFF',canvasBgAlpha:'0',bgAlpha:'100',showBorder:'0',showCanvasBorder:'0',showAlternateHGridColor:'0',divLineColor:'#DFDFDF',showXAxisLine:'0',yAxisNamePadding:'15',sYAxisNamePadding:'15',xAxisNamePadding:'15',captionPadding:'15',xAxisNameFontColor:'#999',yAxisNameFontColor:'#999',sYAxisNameFontColor:'#999',yAxisValuesPadding:'15',labelPadding:'10',transposeAxis:'1',toolTipBgColor:'#FFFFFF',toolTipPadding:'6',toolTipBorderColor:'#E1E1E1',toolTipBorderThickness:'1',toolTipBorderAlpha:'100',toolTipBorderRadius:'2',baseFont:'Source Sans Pro',baseFontColor:'#5A5A5A',baseFontSize:'14',xAxisNameFontBold:'0',yAxisNameFontBold:'0',sYAxisNameFontBold:'0',xAxisNameFontSize:'15',yAxisNameFontSize:'15',sYAxisNameFontSize:'15',captionFontSize:'18',subCaptionFontSize:'13',captionFontBold:'1',subCaptionFontBold:'0',subCaptionFontColor:'#999',valueFontColor:'#000000',valueFont:'Source Sans Pro',drawCustomLegendIcon:'1',legendShadow:'0',legendBorderAlpha:'0',legendBorderThickness:'0',legendItemFont:'Source Sans Pro',legendItemFontColor:'#7C7C7C',legendIconBorderThickness:'0',legendBgAlpha:'0',legendItemFontSize:'15',legendCaptionFontColor:'#999',legendCaptionFontSize:'13',legendCaptionFontBold:'0',legendScrollBgColor:'#FFF',crossLineAnimation:'1',crossLineAlpha:'100',showHoverEffect:'1',plotHoverEffect:'1',plotFillHoverAlpha:'90',barHoverAlpha:'90'}},column2d:{chart:{paletteColors:'#5D62B5',placeValuesInside:'0'}},column3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',showShadow:'0',chartTopMargin:'35',paletteColors:'#5D62B5'}},line:{chart:{lineThickness:'2',paletteColors:'#5D62B5',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',drawCrossLine:'1'}},area2d:{chart:{paletteColors:'#5D62B5',drawCrossLine:'1'}},bar2d:{chart:{placeValuesInside:'0',showAlternateVGridColor:'0',yAxisValuesPadding:'10',paletteColors:'#5D62B5'}},bar3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0',yAxisValuesPadding:'10',paletteColors:'#5D62B5'}},pie2d:{chart:{use3DLighting:'0',showPercentValues:'1',showValues:'1',showPercentInTooltip:'0',useDataPlotColorForLabels:'0',showLegend:'1',legendIconSides:'2',labelFontColor:'#666'}},pie3d:{chart:{use3DLighting:'0',showPercentValues:'1',showValues:'1',useDataPlotColorForLabels:'0',showLegend:'1',legendIconSides:'2',pieSliceDepth:'15',pieYScale:'60',labelFontColor:'#666',labelDistance:'20',showPercentInTooltip:'0'}},doughnut2d:{chart:{use3DLighting:'0',showPercentValues:'1',showValues:'1',useDataPlotColorForLabels:'0',showLegend:'1',legendIconSides:'2',showPlotBorder:'0',labelFontColor:'#666',centerLabelColor:'#666',centerLabelFontSize:'14',showPercentInTooltip:'0'}},doughnut3d:{chart:{use3DLighting:'0',showPercentValues:'1',showValues:'1',useDataPlotColorForLabels:'0',showLegend:'1',legendIconSides:'2',pieSliceDepth:'15',pieYScale:'60',labelFontColor:'#666',centerLabelColor:'#666',centerLabelFontSize:'14',showPercentInTooltip:'0'}},pareto2d:{chart:{paletteColors:'#5D62B5',lineThickness:'2',anchorRadius:'4',lineColor:'#5D5D5D',anchorBgColor:'#5D5D5D',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},pareto3d:{chart:{paletteColors:'#5D62B5',lineThickness:'2',anchorRadius:'4',lineColor:'#5D5D5D',anchorBgColor:'#5D5D5D',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1',showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0'}},mscolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}},mscolumn3d:{chart:{showLegend:'1',legendIconSides:'4',showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0'}},msline:{chart:{lineThickness:'2',anchorRadius:'4',drawCrossLine:'1',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},msbar2d:{chart:{placeValuesInside:'0',showAlternateVGridColor:'0',showLegend:'1',legendIconSides:'4',yAxisValuesPadding:'10'}},msbar3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0',showLegend:'1',legendIconSides:'4',yAxisValuesPadding:'10'}},msarea:{chart:{drawCrossLine:'1',showLegend:'1',legendIconSides:'4'}},marimekko:{chart:{legendIconSides:'4',valueBgColor:'#FFFFFF',valueBgAlpha:'65'}},zoomline:{chart:{lineThickness:'2',flatScrollBars:'1',scrollShowButtons:'0',scrollColor:'#FFF',scrollheight:'10',crossLineThickness:'1',crossLineColor:'#F2F2F2',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},zoomlinedy:{chart:{lineThickness:'2',flatScrollBars:'1',scrollShowButtons:'0',scrollColor:'#FFF',scrollheight:'10',crossLineThickness:'1',crossLineColor:'#F2F2F2',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},stackedcolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}},stackedcolumn3d:{chart:{showLegend:'1',legendIconSides:'4',showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0'}},stackedbar2d:{chart:{placeValuesInside:'0',showAlternateVGridColor:'0',legendIconSides:'4',yAxisValuesPadding:'10'}},stackedbar3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',showAlternateVGridColor:'0',showLegend:'1',legendIconSides:'4',yAxisValuesPadding:'10'}},stackedarea2d:{chart:{drawCrossLine:'1',showLegend:'1',legendIconSides:'4'}},msstackedcolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}},mscombi2d:{chart:{lineThickness:'2',anchorRadius:'4',drawCrossLine:'1',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},mscombi3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},mscolumnline3d:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},stackedcolumn2dline:{chart:{showLegend:'1',lineThickness:'2',anchorRadius:'4',drawCrossLine:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},stackedcolumn3dline:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},mscombidy2d:{chart:{lineThickness:'2',anchorRadius:'4',drawCrossLine:'1',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},mscolumn3dlinedy:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',placeValuesInside:'0',showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},stackedcolumn3dlinedy:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},msstackedcolumn2dlinedy:{chart:{placeValuesInside:'0',showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'},lineset:[{color:'#5D5D5D',anchorBgColor:'#5D5D5D'}]},scatter:{chart:{showCanvasBase:'0',canvasBaseDepth:'0',showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverColor:'#AFAFAF',anchorBorderHoverThickness:'1.5',showLegend:'1',drawCustomLegendIcon:'0'}},zoomscatter:{chart:{showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',anchorBorderHoverColor:'#AFAFAF',showLegend:'1',drawCustomLegendIcon:'0'}},bubble:{chart:{use3DLighting:'0',showLegend:'1',legendIconSides:'2',plotFillAlpha:'80'}},scrollcolumn2d:{chart:{showLegend:'1',legendIconSides:'4',showCanvasBase:'0',canvasBaseDepth:'0',showShadow:'0',adjustDiv:'1',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB'}},scrollline2d:{chart:{showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',legendIconSides:'2',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB',drawCrossLine:'1',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},scrollarea2d:{chart:{showShadow:'0',adjustDiv:'1',lineThickness:'2',drawAnchors:'0',showLegend:'1',legendIconSides:'2',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB'}},scrollstackedcolumn2d:{chart:{showLegend:'1',legendIconSides:'4',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB'}},scrollcombi2d:{chart:{lineThickness:'2',anchorRadius:'4',showLegend:'1',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},scrollcombidy2d:{chart:{lineThickness:'2',anchorRadius:'4',showLegend:'1',flatScrollBars:'1',scrollShowButtons:'0',scrollheight:'10',scrollColor:'#EBEBEB',drawCustomLegendIcon:'0',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},angulargauge:{chart:{setAdaptiveMin:'1',adjustTM:'1',tickvaluedistance:'10',placeTicksInside:'0',autoAlignTickValues:'1',showGaugeBorder:'0',minortmnumber:'0',majorTMHeight:'8',gaugeFillMix:'{light-0}',pivotbgcolor:'#000000',pivotfillmix:'0',showpivotborder:'1',pivotBorderColor:'#FFFFFF',showValue:'0',valueBelowPivot:'1'},dials:{dial:[{bgColor:'#000000',borderThickness:'0'}]}},bulb:{chart:{is3D:'0',placeValuesInside:'1',valueFont:'Source Sans Pro'}},cylinder:{chart:{cylRadius:'50',cylYScale:'13'}},hled:{chart:{ledGap:'0',showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},hlineargauge:{chart:{showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minorTMnumber:'0',majorTMHeight:'8',majorTMAlpha:'50',gaugeFillMix:'{light-0}',valueAbovePointer:'1'}},thermometer:{chart:{use3DLighting:'0',manageResize:'1',autoScale:'1',showGaugeBorder:'1',gaugeBorderAlpha:'40',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},vled:{chart:{ledGap:'0',showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},realtimearea:{chart:{showLegend:'1',legendIconSides:'2'}},realtimecolumn:{chart:{showLegend:'1',legendIconSides:'2'}},realtimeline:{chart:{lineThickness:'2',anchorRadius:'4',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},realtimestackedarea:{chart:{showLegend:'1',legendIconSides:'2'}},realtimestackedcolumn:{chart:{showLegend:'1',legendIconSides:'4'}},realtimelinedy:{chart:{lineThickness:'2',anchorRadius:'4',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},sparkline:{chart:{plotFillColor:'#5D62B5',anchorRadius:'4',highColor:'#29C3BE',lowColor:'#F2726F',captionPosition:'top',showOpenAnchor:'0',showCloseAnchor:'0',showOpenValue:'0',showCloseValue:'0',showHighLowValue:'0',periodColor:'#F3F3F3'}},sparkcolumn:{chart:{plotFillColor:'5D62B5',highColor:'#29C3BE',lowColor:'#F2726F',captionPosition:'middle',periodColor:'#F3F3F3'}},sparkwinloss:{chart:{winColor:'#29C3BE',lossColor:'#F2726F',captionPosition:'middle',drawColor:'#FFC533',scoreLessColor:'#5D62B5',periodColor:'#F3F3F3'}},hbullet:{chart:{plotFillColor:'#5D5D5D',colorRangeFillMix:'{light+0}',tickValueDistance:'3',tickMarkDistance:'3'}},vbullet:{chart:{plotFillColor:'#5D5D5D',colorRangeFillMix:'{light+0}',tickValueDistance:'3',tickMarkDistance:'3'}},funnel:{chart:{is2D:'1',smartLineThickness:'1',smartLineColor:'#B1AFAF',smartLineAlpha:'70',streamlinedData:'1',useSameSlantAngle:'1',alignCaptionWithCanvas:'1'}},pyramid:{chart:{is2D:'1',smartLineThickness:'1',smartLineColor:'#B1AFAF',smartLineAlpha:'70',streamlinedData:'1',useSameSlantAngle:'1',alignCaptionWithCanvas:'1',use3dlighting:'0'}},gantt:{chart:{taskBarFillMix:'{light+0}',gridBorderAlpha:'100',gridBorderColor:'#EAEAEA',ganttLineColor:'#EAEAEA',ganttLineAlpha:'100',taskBarRoundRadius:'2',flatScrollBars:'1',showHoverEffect:'1',plotHoverEffect:'1',plotFillHoverAlpha:'50',showCategoryHoverBand:'1',categoryHoverBandAlpha:'50',showGanttPaneVerticalHoverBand:'1',showProcessHoverBand:'1',processHoverBandAlpha:'50',showGanttPaneHorizontalHoverBand:'1',showConnectorHoverEffect:'1',connectorHoverAlpha:'50',showTaskHoverEffect:'1',taskHoverFillAlpha:'50',slackHoverFillAlpha:'50',scrollShowButtons:'0',drawCustomLegendIcon:'0',legendShadow:'0',legendBorderAlpha:'0',legendBorderThickness:'0',legendIconBorderThickness:'0',legendBgAlpha:'0'},categories:[{fontcolor:'#5D5D5D',fontsize:'14',bgcolor:'#F3F3F3',hoverBandAlpha:'50',showGanttPaneHoverBand:'1',showHoverBand:'1',category:[{fontcolor:'#5D5D5D',fontsize:'14',bgcolor:'#F3F3F3'}]}],tasks:{showBorder:'0',showHoverEffect:'0'},processes:{fontcolor:'#5D5D5D',isanimated:'0',bgcolor:'#FFFFFF',bgAlpha:'100',headerbgcolor:'#F3F3F3',headerfontcolor:'#5D5D5D',showGanttPaneHoverBand:'1',showHoverBand:'1'},text:{fontcolor:'#5D5D5D',bgcolor:'#FFFFFF'},datatable:{fontcolor:'#5D5D5D',bgcolor:'#FFFFFF',bgAlpha:'100',datacolumn:[{bgcolor:'#FFFFFF'}]},connectors:[{hoverThickness:'1.5'}],milestones:{milestone:[{color:'#FFC533'}]}},logmscolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}},logmsline:{chart:{lineThickness:'2',anchorRadius:'4',drawCrossLine:'1',showLegend:'1',legendIconSides:'2',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},spline:{chart:{lineThickness:'2',paletteColors:'#5D62B5',anchorBgColor:'#5D62B5',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},splinearea:{chart:{paletteColors:'#5D62B5',drawAnchors:'0'}},msspline:{chart:{lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1',showLegend:'1',legendIconSides:'2'}},mssplinearea:{chart:{showLegend:'1',legendIconSides:'2',drawAnchors:'0'}},errorbar2d:{chart:{legendIconSides:'4',errorBarColor:'#5D5D5D',errorBarThickness:'0.7',errorBarAlpha:'80'}},errorline:{chart:{lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1',showLegend:'1',legendIconSides:'2',errorBarColor:'#5D5D5D',errorBarThickness:'0.7',errorBarAlpha:'80'}},errorscatter:{chart:{showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',legendIconSides:'2',errorBarColor:'#5D5D5D',errorBarThickness:'0.7',errorBarAlpha:'80',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},inversemsarea:{chart:{drawCrossLine:'1',showLegend:'1',legendIconSides:'2'}},inversemscolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}},inversemsline:{chart:{lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1',drawCrossLine:'1',showLegend:'1',legendIconSides:'2'}},dragcolumn2d:{chart:{showLegend:'1',legendIconSides:'4'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',alpha:'80'}]}]},dragline:{chart:{lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'1.5',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1',drawCrossLine:'1',showLegend:'1',legendIconSides:'2'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',alpha:'80',dashed:'1'}]}]},dragarea:{chart:{showLegend:'1',legendIconSides:'2',drawAnchors:'0'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',alpha:'80',dashed:'1'}]}]},treemap:{chart:{parentLabelLineHeight:'16',baseFontSize:'14',labelFontSize:'14',showParent:'1',showNavigationBar:'0',plotBorderThickness:'0.5',plotBorderColor:'#EAEAEA',labelGlow:'1',labelGlowIntensity:'100',btnBackChartTooltext:'Back',btnResetChartTooltext:'Home',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0',toolbarButtonScale:'1.55',plotToolText:'$label, $dataValue, $sValue'},data:[{fillColor:'#FAFAFA',data:[{fillColor:'#FAFAFA'}]}]},radar:{chart:{showLegend:'1',legendIconSides:'2',plotFillAlpha:'20',drawAnchors:'0'}},heatmap:{chart:{baseFontSize:'14',labelFontSize:'14',showPlotBorder:'1',plotBorderAlpha:'100',plotBorderThickness:'0.5',plotBorderColor:'#EAEAEA',tlFontColor:'#FDFDFD',tlFont:'Source Sans Pro Light',tlFontSize:'13',trFontColor:'#FDFDFD',trFont:'Source Sans Pro Light',trFontSize:'13',blFontColor:'#FDFDFD',blFont:'Source Sans Pro Light',blFontSize:'13',brFontColor:'#FDFDFD',brFont:'Source Sans Pro Light',brFontSize:'13',captionPadding:'20',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0'},colorrange:{gradient:'1',code:'#FFC533'}},boxandwhisker2d:{chart:{drawCustomLegendIcon:'0',showLegend:'1',showDetailedLegend:'1',legendIconSides:'2',showPlotBorder:'0',upperBoxBorderAlpha:'0',lowerBoxBorderAlpha:'0',lowerQuartileAlpha:'0',upperQuartileAlpha:'0',upperWhiskerColor:'#5D5D5D',upperWhiskerThickness:'0.7',upperWhiskerAlpha:'80',lowerWhiskerColor:'#5D5D5D',lowerWhiskerThickness:'0.7',lowerWhiskerAlpha:'80',medianColor:'#5D5D5',medianThickness:'0.7',medianAlpha:'100',outliericonshape:'spoke',outliericonsides:'9',meaniconcolor:'#5D5D5D',meanIconShape:'spoke',meaniconsides:'9',meaniconradius:'5'}},candlestick:{chart:{showShadow:'0',showVPlotBorder:'0',bearFillColor:'#F2726F',bullFillColor:'#62B58F',plotLineThickness:'0.3',plotLineAlpha:'100',divLineDashed:'0',showDetailedLegend:'1',legendIconSides:'2',showHoverEffect:'1',plotHoverEffect:'1',showVolumeChart:'0',trendLineColor:'#5D5D5D',trendLineThickness:'1',trendValueAlpha:'100',rollOverBandAlpha:'100',rollOverBandColor:'#F2F2F2'},categories:[{verticalLineColor:'#5D5D5D',verticalLineThickness:'1',verticalLineAlpha:'35'}]},dragnode:{chart:{use3DLighting:'0',plotBorderThickness:'0',plotBorderAlpha:'0',showDetailedLegend:'1',legendIconSides:'2'},dataset:[{color:'#5D62B5'}],connectors:[{connector:[{color:'#29C3BE'}]}]},msstepline:{chart:{drawAnchors:'0',lineThickness:'2',drawCustomLegendIcon:'0'}},multiaxisline:{chart:{showLegend:'1',lineThickness:'2',allowSelection:'0',connectNullData:'1',drawAnchors:'0',divLineDashed:'0',divLineColor:'#DFDFDF',vDivLineColor:'#DFDFDF',vDivLineDashed:'0',yAxisNameFontSize:'13',drawCustomLegendIcon:'0'},axis:[{divLineColor:'#DFDFDF',setAdaptiveYMin:'1',divLineDashed:'0'}]},multilevelpie:{chart:{useHoverColor:'1',hoverFillColor:'#EDEDED',showHoverEffect:'1',plotHoverEffect:'1'},category:[{color:'#EDEDED',category:[{color:'#5D62B5',category:[{color:'#5D62B5'}]}]}]},selectscatter:{chart:{showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverColor:'#FFFFFF',anchorBorderHoverThickness:'1.5',showLegend:'1',legendIconSides:'2'}},waterfall2d:{chart:{paletteColors:'#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2',positiveColor:'62B58F',negativeColor:'#F2726F',showConnectors:'1',connectorDashed:'1',connectorThickness:'0.7',connectorColor:'#5D5D5D'}},kagi:{chart:{rallyThickness:'2',declineThickness:'2',legendIconSides:'2',drawAnchors:'0',rallyColor:'#62B58F',declineColor:'#F2726F'}},geo:{chart:{showLabels:'0',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0',fillColor:'#FDFDFD',showEntityHoverEffect:'1',entityFillHoverAlpha:'90',connectorHoverAlpha:'90',markerBorderHoverAlpha:'90',showBorder:'1',borderColor:'#5D5D5D',borderThickness:'0.1',nullEntityColor:'5D5D5D',nullEntityAlpha:'50',entityFillHoverColor:'#5D5D5D'},colorrange:{gradient:'1',code:'#FFC533'}},overlappedbar2d:{chart:{placeValuesInside:'0',showAlternateVGridColor:'0',showLegend:'1',legendIconSides:'4',yAxisValuesPadding:'10'}},overlappedcolumn2d:{chart:{showLegend:'1',legendIconSides:'4'}}}},index={extension:themeObject,name:'fusionTheme',type:'theme'};export default index;