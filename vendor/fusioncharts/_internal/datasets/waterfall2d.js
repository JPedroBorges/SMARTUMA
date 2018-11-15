import{pluckNumber,pluck,parseTooltext,parseUnsafeString,getDashStyle,getDefinedColor,getValidValue,toRaphaelColor,getCrispValue,getFirstValue}from'../lib/lib';import{convertColor,getLightColor,getColumnColor}from'../lib/lib-graphics';import ColumnDataset from'./column';import{addDep}from'../dependency-manager';import waterFall2DAnimation from'../animation-rules/waterFall2D-animation';let UNDEF,HUNDREDSTRING='100',PLOTBORDERCOLOR='plotBorderColor',PLOTGRADIENTCOLOR='plotGradientColor',COMMA=',',BLANK='',SHOWSHADOW='showShadow',NONE='none',MAX_MITER_LINEJOIN=2,M='M',H='H';addDep({name:'waterFall2DAnimation',type:'animationRule',extension:waterFall2DAnimation});class WaterFall2DDataset extends ColumnDataset{getType(){return'dataset'}getName(){return'waterFall2D'}configure(a){var b=Math.max,c=Math.min;if(!a)return!1;this.trimData(a),this.config.JSONData=a;var d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka=this,la=ka.getFromEnv('chart'),ma=ka.config,na=ka.config.JSONData,oa=na.data,pa=oa&&oa.length,qa=ka.getFromEnv('xAxis'),ra=qa.getTicksLen(),sa=c(ra,pa),ta=la.getFromEnv('dataSource'),ua=ta.chart,va=ka.getFromEnv('color-manager'),wa=ka.index||ka.positionIndex,xa=va.getPlotColor(wa),ya=pluckNumber(na.dashed,ua.plotborderdashed),za=pluckNumber(ua.useplotgradientcolor,1),Aa=pluckNumber(ua.showtooltip,1),Ba=parseUnsafeString(ua.yaxisname),Ca=parseUnsafeString(ua.xaxisname),Da=parseUnsafeString(pluck(ua.tooltipsepchar,', ')),Ea=ka.components.data,Fa=ka.getFromEnv('number-formatter'),Ga={},Ha=Ga.dataObj||(Ga.dataObj={}),Ia=Ha.chart||(Ha.chart={}),Ja=pluck(ua.connectorthickness,1),Ka=-Infinity,La=1/0,Ma=0,Na=0,Oa=0;for(ka.setState('visible',1===pluckNumber(na.visible,!+na.initiallyhidden,1)),f=ma.showplotborder=pluckNumber(ua.showplotborder,1),ma.plotBorderThickness=o=f?pluckNumber(ua.plotborderthickness,1):0,ma.isRoundEdges=p=pluckNumber(ua.useroundedges,0),ma.plotBorderAlpha=v=f?pluck(ua.plotborderalpha,s,HUNDREDSTRING):0,ma.plotBorderColor=w=pluck(ua.plotbordercolor,va.getColor(PLOTBORDERCOLOR).split(COMMA)[0]),ma.plotgradientcolor=u=za?getDefinedColor(ua.plotgradientcolor,va.getColor(PLOTGRADIENTCOLOR)):BLANK,ma.plotDashLen=m=pluckNumber(ua.plotborderdashlen,6),ma.plotDashGap=n=pluckNumber(ua.plotborderdashgap,3),ma.use3DLighting=pluckNumber(ua.use3dlighting,1),ma.showSum=$=pluckNumber(ua.showsumatend,1),ma.plotColor=xa=pluck(na.color,xa),ma.plotfillAngle=r=pluckNumber(360-ua.plotfillangle,90),ma.showShadow=p||!1?pluckNumber(ua.showshadow,1):pluckNumber(ua.showshadow,va.getColor(SHOWSHADOW)),ma.showHoverEffect=q=pluckNumber(ua.plothovereffect,ua.showhovereffect,UNDEF),ma.plotFillAlpha=s=pluck(na.alpha,ua.plotfillalpha,HUNDREDSTRING),ma.plotRadius=pluckNumber(ua.useRoundEdges,ma.isRoundEdges?1:0),ma.plotFillRatio=t=pluck(na.ratio,ua.plotfillratio),ma.plotBorderDashStyle=y=ya?getDashStyle(m,n):'none',ma.showValues=pluckNumber(na.showvalues,ua.showvalues,1),ma.valuePadding=pluckNumber(ua.valuepadding,2),ma.enableAnimation=U=pluckNumber(ua.animation,ua.defaultanimation,1),ma.animation=!!U&&{duration:1e3*pluckNumber(ua.animationduration,1)},Ia.transposeAnimation=ma.transposeAnimation=pluckNumber(ua.transposeanimation,Ia.transposeAnimation,U),ma.transposeAnimDuration=1e3*pluckNumber(ua.transposeanimduration,.2),ma.showTooltip=pluckNumber(ua.showtooltip,1),ma.stack100Percent=T=pluckNumber(la.stack100percent,ua.stack100percent,0),ma.definedGroupPadding=b(pluckNumber(ua.plotspacepercent),0),ma.plotSpacePercent=b(pluckNumber(ua.plotspacepercent,20)%100,0),ma.maxColWidth=pluckNumber(ua.maxcolwidth,50),ma.showPercentValues=pluckNumber(ua.showpercentvalues,0),ma.showPercentInToolTip=pluckNumber(ua.showpercentintooltip,0),ma.plotPaddingPercent=pluckNumber(ua.plotpaddingpercent),ma.rotateValues=pluckNumber(ua.rotatevalues)?270:0,ma.placeValuesInside=pluckNumber(ua.placevaluesinside,0),ma.parentYAxis=V='s'===pluck(na.parentyaxis&&na.parentyaxis.toLowerCase(),'p')?1:0,ma.defaultPadding={left:.5,right:.5},ka.setState('dirty',!0),Ea||(Ea=ka.components.data=[]),ma.zLine=ea={step:!0,data:[],dashStyle:'1'===ua.connectordashed?getDashStyle(pluckNumber(ua.connectordashlen,2),pluckNumber(ua.connectordashgap,2)):NONE,useForwardSteps:!0,color:convertColor(pluck(ua.connectorcolor,'000000'),pluck(ua.connectoralpha,100)),lineWidth:Ja},Z=0;Z<sa;Z+=1){if(z=oa[Z],ba=Fa.getCleanValue(z.value),da=pluckNumber(z.issum,0),z.vline||da){delete z._value;continue}Ma+=ba,z._value=ba}for(ca=Fa.dataLabels(Ma),$&&($=!0,sa+=1,ha={label:getFirstValue(ua.sumlabel,'Total'),_value:Ma,value:Ma,issum:1,cumulative:1}),(Z=0,ia=0);Z<sa;Z+=1)(z=oa[Z],B=Ea[Z],C=B&&B.config,B||(B=Ea[Z]={graphics:{}}),B.config||(C=Ea[Z].config={}),!z&&$&&(z=oa[Z]=ha),xa=pluck(z.color,va.getPlotColor(Z)),!B.vline)&&(ba=z._value,delete z._value,C.issum=da=pluckNumber(z.issum,0),ga=C.isCumulative=pluckNumber(z.cumulative,1),da?(ba=ga?Na:Na===Oa?Na:Na-Oa,C.lastComTotal=Oa,Oa=Na,ea.data.push({y:null,x:ia-.5})):Na+=ba,Ka=b(Ka,Na),La=c(La,Na),C.total=Na,aa=C.showLabel=pluckNumber(z.showlabel,ua.showlabels,1),_=C.dataLabel=parseUnsafeString(aa?getFirstValue(z.label,z.name):BLANK),0<ba?(fa=pluck(z.color,ua.positivecolor,xa),0!==q&&(E=pluck(z.positivehovercolor,ua.positivehovercolor,ua.plotfillhovercolor,ua.columnhovercolor,fa))):(fa=pluck(z.color,ua.negativecolor,xa),0!==q&&(E=pluck(z.negativehovercolor,ua.negativehovercolor,ua.plotfillhovercolor,ua.columnhovercolor,fa))),ja=0>ba?360-r:r,s=pluck(z.alpha,ma.plotFillAlpha),W=pluckNumber(z.dashed,ya),X=pluckNumber(z.dashlen,m),Y=n=pluckNumber(z.dashgap,n),C.showValue=pluckNumber(z.showvalue,ma.showValues),C.setValue=A=ba,C.setLink=pluck(z.link),C.toolTipValue=R=Fa.dataLabels(A,V),C.setDisplayValue=S=getValidValue(parseUnsafeString(z.displayvalue)),C.displayValue=pluck(S,R),C.plotBorderDashStyle=x=1===W?getDashStyle(X,Y):0===W?'none':y,C.shadow={opacity:ma.showShadow?s/100:0},C.colorArr=D=getColumnColor(fa+COMMA+u.replace(/,+?$/,''),s,t,ja,p,w,v.toString(),0,!1),0!==q&&(F=pluck(z.alpha,z.hoveralpha,na.hoveralpha,ua.plotfillhoveralpha,ua.columnhoveralpha,s),G=pluck(z.hovergradientcolor,na.hovergradientcolor,ua.plothovergradientcolor,u),!G&&(G=''),H=pluck(z.hoverratio,na.hoverratio,z.ratio,ua.plothoverratio,t),I=pluckNumber(360-z.hoverangle,360-na.hoverangle,360-ua.plothoverangle,ja),J=pluck(z.borderhovercolor,na.borderhovercolor,ua.plotborderhovercolor,w),K=pluck(z.borderhoveralpha,na.borderhoveralpha,ua.plotborderhoveralpha,v,s),L=pluckNumber(z.borderhoverthickness,na.borderhoverthickness,ua.plotborderhoverthickness,o),M=pluckNumber(z.borderhoverdashed,na.borderhoverdashed,ua.plotborderhoverdashed),N=pluckNumber(z.borderhoverdashgap,na.borderhoverdashgap,ua.plotborderhoverdashgap,m),O=pluckNumber(z.borderhoverdashlen,na.borderhoverdashlen,ua.plotborderhoverdashlen,n),P=M?getDashStyle(O,N):x,1===q&&E===xa&&(E=getLightColor(E,70)),Q=getColumnColor(E+','+G,F,H,I,p,J,K.toString(),0,!1),C.setRolloutAttr={fill:toRaphaelColor(D[0]),stroke:f&&toRaphaelColor(D[1]),"stroke-width":o,"stroke-dasharray":x},C.setRolloverAttr={fill:toRaphaelColor(Q[0]),stroke:f&&toRaphaelColor(Q[1]),"stroke-width":L,"stroke-dasharray":P}),g=C.toolTipValue,C.origToolText=j=getValidValue(parseUnsafeString(pluck(z.tooltext,na.plottooltext,ua.plottooltext))),Aa?j===UNDEF?l=null!==g&&(_===BLANK?'':_+Da):(k=[1,2,3,5,6,7,20,21,24,25],h={formattedValue:g,label:_,yaxisName:Ba,xaxisName:Ca,cumulativeValue:Na,cumulativeDataValue:Fa.dataLabels(Na),sum:ca,unformattedSum:Ma},l=parseTooltext(j,k,h,z,ua,na)):l=!1,ea.data.push({y:null===ba?null:Na,x:ia}),ia+=1,C.originalPlotColor=xa,C.toolText=l,C.setTooltext=l,C._x=Z,C._y=A);for(ma.maxValue=Ka,ma.minValue=La,ma.connectNullData=pluckNumber(ua.connectnulldata,0),ma.showConnectors=pluckNumber(ua.showconnectors,1),d=na.catData,Z=0;Z<d.length;Z+=1)e=d[Z],oa.splice(e.index,0,e.data);ka.getFromEnv('xAxis').setTickValues(oa),ka.config.maxminFlag=!1}createCoordinates(){var a,b,c,d,e,f,g,h,j=this,k=j.components,l=k.data,m=j.getFromEnv('chart'),n=m.isBar,o=j.getFromEnv('yAxis'),p=j.getFromEnv('xAxis'),q=o.getAxisBase(),r=o.getPixel(q),s=p.config.isVertical,t=j.getFromEnv('chartConfig'),u=t.xDepth||0,v=t.yDepth||0,w=l.length,x=j.components,y=j.groupManager,z=y&&y.stackConf,A=x.data;for(n||(u=-u),n&&(v=-v),d=0;d<w;d++)(a=A[d],b=a&&a.config,a!==UNDEF)&&(h=b._y,b.issum?b.isCumulative?c=null:(c=b.lastComTotal,h+=b.lastComTotal):(c=A[d-1]&&A[d-1].config.total,c&&(h+=c)),e=p.getPixel(z&&z[d].x||b._x)+u,f=o.getPixel(h)+v,g=(c?o.getPixel(c):r)+v,s?(b._Px=f,b._Py=e,b._Pby=e,b._Pbx=g):(b._Px=e,b._Py=f,b._Pby=g,b._Pbx=e))}getDataLimits(){var a,b,c,d=this,e=d.components.data,f=d.config,g=e.length,h=-Infinity,j=+Infinity;for(a=0;a<g;a++)e[a]&&(b=e[a].config,c=b.total,c!==UNDEF&&(h=Math.max(h,c),j=Math.min(j,c)));return f.maxValue=h,f.minValue=j,{max:f.maxValue,min:f.minValue}}drawPlots(a){var b=this;super.drawPlots(a),b.config.showConnectors?b.drawLine():b.getContainer('commonElemsGroup').hide()}drawLine(){var a,b,c,d,e,f,g,h,j=this,k=j.config,l=j.getFromEnv('xAxis'),m=j.getFromEnv('yAxis'),n=m.getAxisBase(),o=m.getPixel(n),p=j.getContainer('commonElemsGroup'),q=j.getFromEnv('columnWidth')/2,r=j.getFromEnv('animationManager'),s=k.zLine,t=k.connectNullData,u=s.data,v=u.length,w=j._graphics,z=s.dashStyle,A=s.color,B=s.lineWidth,C=w.zLine,D=null,E=[],F=[];for(m.yBasePos=o,p.toFront().show(),a=0;a<v;a+=1)d=u[a],e=d.y,null===e?(F.length=0,0===t&&(D=null)):(f=pluckNumber(d.x,a),b=m.getPixel(e),c=l.getPixel(f),c=getCrispValue(c,B,B).position,b=getCrispValue(b,B,B).position,null===D?F.push(M,c,b):(F.length&&(E=E.concat(F),F.length=0),E.push(M,g,D,'m',-q,0,H,c,'h',q,'m',0,b-D)),g=c,D=b);h=r.setAnimation({el:C||'path',attr:{path:E,"stroke-linecap":'round',"stroke-opacity":1,"stroke-dasharray":z,stroke:A,"stroke-linejoin":B>=MAX_MITER_LINEJOIN?'round':'miter',"stroke-width":B},container:p,component:j,label:'path'}),C||j.addGraphicalElement('zLine',h)}}export default WaterFall2DDataset;