import{getDarkColor,getLightColor,getFirstAlpha,getFirstColor}from'../lib/lib-graphics';import{COMMASTRING,hasSVG}from'../lib/lib';const pointColor=(a,b,c,d)=>{var e,f,g,h,i,j,k,l=Math.floor;return a=getFirstColor(a),b=getFirstAlpha(b),100>c&&hasSVG?d?(i=getDarkColor(a,l(100*(85-.2*(100-c)))/100),j=getLightColor(a,l(100*(100-.5*c))/100),e={color:i+COMMASTRING+j+COMMASTRING+j+COMMASTRING+i,alpha:b+COMMASTRING+b+COMMASTRING+b+COMMASTRING+b,radialGradient:!0,gradientUnits:'userSpaceOnUse',r:c}):(f=l(100*(.85*(100-.35*c)))/100,g=getDarkColor(a,f),h=l(100*(.5*(100+c)))/100,k=getLightColor(a,h),e={color:k+COMMASTRING+g,alpha:b+COMMASTRING+b,ratio:c+','+(100-c),radialGradient:!0,gradientUnits:'userSpaceOnUse'}):e={color:a+COMMASTRING+a,alpha:b+COMMASTRING+b,ratio:'0,100'},e};export default pointColor;