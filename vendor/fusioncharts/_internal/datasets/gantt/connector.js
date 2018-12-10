import Task,{checkInvalidValue,hideFn}from'./task';import{extend2,parseConfiguration,pluck,pluckNumber,getFirstValue,getDashStyle,TRACKER_FILL}from'../../lib/lib';import{convertColor,getDarkColor}from'../../lib/lib-graphics';import connectorAnimation from'../../animation-rules/connector-gantt-animation';import{addDep}from'../../dependency-manager';const connectorClick=a=>function(b){var c=this;a.plotEventHandler(c,b,'ConnectorClick')},rollOverHandler=a=>function(b){var c=this,d=c.data('dataObj'),e=d.config,f=a.components,g=f.tasksMap,h=g[e.fromTaskId],i=g[e.toTaskId],j={stroke:e.hoverColor,"stroke-dasharray":e.dashedStyle,"stroke-width":e.hoverThickness},k=d.graphics.connector;a.plotEventHandler(c,b,'ConnectorRollOver'),e.showHoverEffect&&([h,i].forEach(a=>{let b={fill:a.config.hoverFillColor,stroke:a.config.hoverBorderColor},c=a.config.percentComplete,d=a.graphics.slackElem,e=a.graphics.element,f=a.graphics.taskFill;c&&!a.config.showAsGroup&&(d&&d.attr({fill:a.config.slackHoverColor}),f&&f.attr({fill:a.config.hoverFillColor,stroke:a.config.hoverBorderColor}),delete b.fill),e&&e.attr(b)}),k&&k.attr(j))},rollOutHandler=a=>function(b){var c=this,d=c.data('dataObj'),e=d.config,f=a.components,g=f.tasksMap,h=g[e.fromTaskId],i=g[e.toTaskId],j={stroke:e.color,"stroke-width":e.thickness,"stroke-dasharray":e.dashedStyle},k=d.graphics.connector;a.plotEventHandler(c,b,'ConnectorRollOut'),e.showHoverEffect&&([h,i].forEach(a=>{let b={fill:a.config.color,stroke:a.config.borderColor,"stroke-width":a.config.borderThickness,"stroke-dasharray":a.config.dashedStyle},c=a.config.percentComplete,d=a.graphics.slackElem,e=a.graphics.element,f=a.graphics.taskFill;c&&!a.config.showAsGroup&&(d&&d.attr({fill:a.config.slackColor}),f&&f.attr({fill:a.config.color}),delete b.fill),e&&e.attr(b)}),k&&k.attr(j))};addDep({name:'connectorAnimation',type:'animationRule',extension:connectorAnimation});class Connector extends Task{getName(){return'connector'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.isdashed=1,a.thickness=1}configureAttributes(){let a=this,b=a.getFromEnv('dataSource'),c=extend2({},b.connectors&&b.connectors.length?b.connectors[0]:b.connectors||{});parseConfiguration(c,a.config,a.getFromEnv('chart').config,{connector:!0}),a.components||(a.components={}),a._setConfigure(),a.setState('dirty',!0)}_setConfigure(a){let b,c,d,e,f,g,h,j,k=this,l=k.config,m=k.getFromEnv('chart'),n=k.getFromEnv('dataSource'),o=n.connectors&&n.connectors.length?n.connectors[0]:n.connectors||{},p=a||o.length?o:o.connector,q=p&&p.length||0,r=m.getFromEnv('color-manager'),s=m.config,t=k.components.data;for(t||(t=k.components.data=[]),b=0;b<q;b+=1)d=p[b],c=t[b],c||(c=t[b]={config:{}}),c.config||(c.config={}),e=c.config,f=pluck(d.color,l.color,r.getColor('plotBorderColor')),g=pluckNumber(d.alpha,l.alpha,100),h=pluckNumber(d.thickness,l.thickness,1),j=pluckNumber(d.isdashed,l.isdashed,1),e.fromTaskId=getFirstValue(d.fromtaskid,'').toLowerCase(),e.toTaskId=getFirstValue(d.totaskid,'').toLowerCase(),e.fromTaskConnectStart=pluckNumber(d.fromtaskconnectstart,0),e.toTaskConnectStart=pluckNumber(d.totaskconnectstart,1),e.color=convertColor(f),e.alpha=.01*g,e.link=d.link,e.showHoverEffect=pluckNumber(d.showhovereffect,l.showhovereffect,s.showconnectorhovereffect,1),e.hoverColor=convertColor(pluck(d.hovercolor,l.hovercolor,s.connectorhovercolor,getDarkColor(f,80)),pluckNumber(d.hoveralpha,l.hoveralpha,s.connectorhoveralpha,g)),e.hoverThickness=pluckNumber(d.hoverthickness,l.hoverthickness,s.connectorhoverthickness,h),e.thickness=h,e.dashedStyle=j?getDashStyle(pluckNumber(d.dashlen,l.dashlen,5),pluckNumber(d.dashgap,l.dashgap,h),h):'none';pluckNumber(o.visible,1)?k.setState('visible',!0):k.setState('visible',!1)}draw(){let a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=this,C=B.getFromEnv('chart'),D=C.components,E=B.components.data,F=B.getFromEnv('animationManager'),G=C.config,H=E.length,I=D.tasksMap,J=G.connectorextension,K=C.getChildren('canvas')[0],L=K.getChildContainer('connectorGroup'),M=B.getContainer('connectorContainer'),N=B.getState('visible'),O=B._contextChanged(),P=B.components.removeDataArr||[],Q=P.length;if(B.getState('removed')||B.getState('dirty')||O&&N){for(M||(M=B.addContainer('connectorContainer',F.setAnimation({el:'group',attr:{name:'connectors'},container:L,component:B})),N?M.show():M.hide()),A=0;A<=H;A+=1)if(e=E[A],!!e)if(p=e.config,e.graphics||(e.graphics={}),u=e.graphics,a=p.fromTaskId&&p.fromTaskId.toLowerCase(),b=p.toTaskId&&p.toTaskId.toLowerCase(),c=I[a],d=I[b],v=u.connector,c&&d){if(q=c.config,r=d.config,g=q.yPos+.5*q.height,h=r.yPos+.5*r.height,f=g==h,j=q.xPos,k=q.xPos+q.width,l=r.xPos,m=r.xPos+r.width,!1===checkInvalidValue(j,k,l,m))continue;n=0,o=0,0===p.fromTaskConnectStart&&1===p.toTaskConnectStart&&(o=1),0===p.fromTaskConnectStart&&0===p.toTaskConnectStart&&(o=2),1===p.fromTaskConnectStart&&1===p.toTaskConnectStart&&(o=3),1===p.fromTaskConnectStart&&0===p.toTaskConnectStart&&(o=4),f?(t=q.height,1===o?(n=(l-k)/10,s=['M',k,g,k+n,g,'L',k+n,g,k+n,g-t,'L',k+n,g-t,l-n,g-t,'L',l-n,g-t,l-n,g,'L',l-n,g,l,h]):2===o?s=['M',k,g,k+J,g,'L',k+J,g,k+J,g-t,'L',k+J,g-t,m+J,g-t,'L',m+J,h-t,m+J,h,m,h]:3===o?s=['M',j,g,j-J,g,'L',j-J,g,j-J,g-t,'L',j-J,g-t,l-J,g-t,'L',l-J,g-t,l-J,g,'L',l-J,g,l,g]:4===o?s=['M',j,g,j-J,g,'L',j-J,g,j-J,g-t,'L',j-J,g-t,m+J,g-t,'L',m+J,g-t,m+J,g,'L',m+J,g,m,g]:void 0):1===o?(s=['M',k,g,k+(l-k)/2,g,'L',k+(l-k)/2,g,k+(l-k)/2,h,'L',k+(l-k)/2,h,l,h],s=k<=l?['M',k,g,k+(l-k)/2,g,'L',k+(l-k)/2,g,k+(l-k)/2,h,'L',k+(l-k)/2,h,l,h]:['M',k,g,k+J,g,'L',k+J,g,k+J,g+(h-g)/2,'L',k+J,g+(h-g)/2,l-J,g+(h-g)/2,'L',l-J,g+(h-g)/2,l-J,h,'L',l-J,h,l,h]):2===o?(n=0>m-k?0:m-k,s=['M',k,g,k+J+n,g,'L',k+J+n,g,k+J+n,h,'L',k+J+n,h,m,h]):3===o?(n=0>j-l?0:j-l,s=['M',j,g,j-J-n,g,'L',j-J-n,g,j-J-n,h,'L',j-J-n,h,l,h]):4===o?s=j>m?['M',j,g,j-(j-m)/2,g,'L',j-(j-m)/2,g,j-(j-m)/2,h,'L',j-(j-m)/2,h,m,h]:['M',j,g,j-J,g,'L',j-J,g,j-J,g+(h-g)/2,'L',j-J,g+(h-g)/2,m+J,g+(h-g)/2,'L',m+J,g+(h-g)/2,m+J,h,'L',m+J,h,m,h]:void 0,w=u.connector=F.setAnimation({el:v||'path',label:'path',attr:{path:s,stroke:p.color,"stroke-opacity":p.alpha,"stroke-width":p.thickness,"stroke-dasharray":p.dashedStyle},container:M,component:B}),w.show(),x={fromTaskId:p.fromTaskId,toTaskId:p.toTaskId,fromTaskConnectStart:p.fromTaskConnectStart,toTaskConnectStart:p.toTaskConnectStart,link:p.link,sourceType:'connector'},y=u.trackerElement,z=u.trackerElement=F.setAnimation({el:y||'path',attr:{path:s,stroke:TRACKER_FILL,"stroke-width":Math.max(p.thickness,10),cursor:p.link?'pointer':''},container:M,component:B}),y||z.on('fc-click',connectorClick(C)).hover(rollOverHandler(C),rollOutHandler(C)),z.data('dataObj',e).data('eventArgs',x)}else v&&F.setAnimation({el:v,component:B,callback:hideFn,doNotRemove:!0}),u.trackerElement&&F.setAnimation({el:u.trackerElement,component:B,callback:hideFn,doNotRemove:!0});for(A=0;A<Q;A++)B._removeDataVisuals(P.shift())}}}export default Connector;