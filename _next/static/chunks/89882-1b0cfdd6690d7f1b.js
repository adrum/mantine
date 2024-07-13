"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89882],{89882:function(e,a,n){n.d(a,{j:function(){return r}});var t=n(52322),g=n(63098),o=n(48944);let r={type:"code",component:function(){return(0,t.jsx)(g.G,{h:350,data:o.aT,dataKey:{x:"age",y:"BMI"},xAxisLabel:"Age",yAxisLabel:"BMI"})},code:[{code:`
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},48944:function(e,a,n){n.d(a,{KX:function(){return r},Vl:function(){return o},aT:function(){return t},bI:function(){return g},mA:function(){return l},op:function(){return i}});let t=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]}],g=[{color:"blue.5",name:"Group 1",data:[{age:25,BMI:20},{age:30,BMI:22},{age:35,BMI:18},{age:40,BMI:25},{age:45,BMI:30},{age:28,BMI:15},{age:22,BMI:12},{age:50,BMI:28},{age:32,BMI:19},{age:48,BMI:31},{age:26,BMI:24},{age:38,BMI:27},{age:42,BMI:29},{age:29,BMI:16},{age:34,BMI:23},{age:44,BMI:33},{age:23,BMI:14},{age:37,BMI:26},{age:49,BMI:34},{age:27,BMI:17},{age:41,BMI:32},{age:31,BMI:21},{age:46,BMI:35},{age:24,BMI:13},{age:33,BMI:22},{age:39,BMI:28},{age:47,BMI:30},{age:36,BMI:25},{age:43,BMI:29},{age:21,BMI:11}]},{color:"red.5",name:"Group 2",data:[{age:26,BMI:21},{age:31,BMI:24},{age:37,BMI:19},{age:42,BMI:27},{age:29,BMI:32},{age:35,BMI:18},{age:40,BMI:23},{age:45,BMI:30},{age:27,BMI:15},{age:33,BMI:20},{age:38,BMI:25},{age:43,BMI:29},{age:30,BMI:16},{age:36,BMI:22},{age:41,BMI:28},{age:46,BMI:33},{age:28,BMI:17},{age:34,BMI:22},{age:39,BMI:26},{age:44,BMI:31},{age:32,BMI:18},{age:38,BMI:23},{age:43,BMI:28},{age:48,BMI:35},{age:25,BMI:14},{age:31,BMI:20},{age:36,BMI:25},{age:41,BMI:30},{age:29,BMI:16}]}],o=[{color:"cyan",name:"Average monthly spending",data:[{age:25,average_monthly_spending:1400},{age:30,average_monthly_spending:2100},{age:35,average_monthly_spending:1800},{age:40,average_monthly_spending:2400},{age:45,average_monthly_spending:2300},{age:28,average_monthly_spending:1600},{age:22,average_monthly_spending:1200},{age:50,average_monthly_spending:3200},{age:32,average_monthly_spending:1900},{age:48,average_monthly_spending:2700},{age:26,average_monthly_spending:1700},{age:38,average_monthly_spending:2200},{age:42,average_monthly_spending:2600},{age:29,average_monthly_spending:1500},{age:34,average_monthly_spending:2e3},{age:44,average_monthly_spending:2500},{age:23,average_monthly_spending:1300},{age:37,average_monthly_spending:2100},{age:49,average_monthly_spending:2900},{age:27,average_monthly_spending:1600},{age:41,average_monthly_spending:2500},{age:31,average_monthly_spending:1800},{age:46,average_monthly_spending:2700},{age:24,average_monthly_spending:1400},{age:33,average_monthly_spending:2100},{age:39,average_monthly_spending:2400},{age:47,average_monthly_spending:2800},{age:36,average_monthly_spending:2200},{age:43,average_monthly_spending:2600},{age:21,average_monthly_spending:1100}]}],r=`
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
  {
    color: 'red.5',
    name: 'Group 2',
    data: [
      { age: 26, BMI: 21 },
      { age: 31, BMI: 24 },
      { age: 37, BMI: 19 },
      { age: 42, BMI: 27 },
      { age: 29, BMI: 32 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 23 },
      { age: 45, BMI: 30 },
      { age: 27, BMI: 15 },
      { age: 33, BMI: 20 },
      { age: 38, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 30, BMI: 16 },
      { age: 36, BMI: 22 },
      { age: 41, BMI: 28 },
      { age: 46, BMI: 33 },
      { age: 28, BMI: 17 },
      { age: 34, BMI: 22 },
      { age: 39, BMI: 26 },
      { age: 44, BMI: 31 },
      { age: 32, BMI: 18 },
      { age: 38, BMI: 23 },
      { age: 43, BMI: 28 },
      { age: 48, BMI: 35 },
      { age: 25, BMI: 14 },
      { age: 31, BMI: 20 },
      { age: 36, BMI: 25 },
      { age: 41, BMI: 30 },
      { age: 29, BMI: 16 },
    ],
  },
];
`,i=`export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];`,l=`export const spendingsData = [
  {
    color: 'cyan',
    name: 'Average monthly spending',
    data: [
      { age: 25, average_monthly_spending: 1400 },
      { age: 30, average_monthly_spending: 2100 },
      { age: 35, average_monthly_spending: 1800 },
      { age: 40, average_monthly_spending: 2400 },
      { age: 45, average_monthly_spending: 2300 },
      { age: 28, average_monthly_spending: 1600 },
      { age: 22, average_monthly_spending: 1200 },
      { age: 50, average_monthly_spending: 3200 },
      { age: 32, average_monthly_spending: 1900 },
      { age: 48, average_monthly_spending: 2700 },
      { age: 26, average_monthly_spending: 1700 },
      { age: 38, average_monthly_spending: 2200 },
      { age: 42, average_monthly_spending: 2600 },
      { age: 29, average_monthly_spending: 1500 },
      { age: 34, average_monthly_spending: 2000 },
      { age: 44, average_monthly_spending: 2500 },
      { age: 23, average_monthly_spending: 1300 },
      { age: 37, average_monthly_spending: 2100 },
      { age: 49, average_monthly_spending: 2900 },
      { age: 27, average_monthly_spending: 1600 },
      { age: 41, average_monthly_spending: 2500 },
      { age: 31, average_monthly_spending: 1800 },
      { age: 46, average_monthly_spending: 2700 },
      { age: 24, average_monthly_spending: 1400 },
      { age: 33, average_monthly_spending: 2100 },
      { age: 39, average_monthly_spending: 2400 },
      { age: 47, average_monthly_spending: 2800 },
      { age: 36, average_monthly_spending: 2200 },
      { age: 43, average_monthly_spending: 2600 },
      { age: 21, average_monthly_spending: 1100 },
    ],
  },
];`},46293:function(e,a,n){n.d(a,{Q:function(){return B}});var t=n(52322),g=n(82027),o=n(38483),r=n(46690),i=n(27009),l=n(28559),d=n(64438),s={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let I={},B=(0,g.d)((e,a)=>{let n=(0,o.w)("ChartLegend",I,e),{classNames:g,className:B,style:M,styles:m,unstyled:p,vars:_,payload:c,onHighlight:y,legendPosition:h,mod:u,series:v,showColor:f,centered:x,...b}=n,j=(0,r.y)({name:"ChartLegend",classes:s,props:n,className:B,style:M,classNames:g,styles:m,unstyled:p});if(!c)return null;let A=c.filter(e=>"none"!==e.color).map(e=>{let a=e.dataKey.split(".").pop();return{...e,dataKey:a,payload:{...e.payload,name:a,dataKey:a}}}),C=(0,d.v)(v),k=A.map((e,a)=>(0,t.jsxs)("div",{...j("legendItem"),onMouseEnter:()=>y(e.dataKey),onMouseLeave:()=>y(null),"data-without-color":!1===f||void 0,children:[(0,t.jsx)(i.b,{color:e.color,size:12,...j("legendItemColor"),withShadow:!1}),(0,t.jsx)("p",{...j("legendItemName"),children:C[e.dataKey]||e.dataKey})]},a));return(0,t.jsx)(l.x,{ref:a,mod:[{position:h,centered:x},u],...j("legend"),...b,children:k})});B.displayName="@mantine/charts/ChartLegend"},50425:function(e,a,n){n.d(a,{h:function(){return _},X:function(){return M}});var t=n(52322),g=n(82027),o=n(38483),r=n(68755),i=n(46690),l=n(27009),d=n(13588),s=n(28559),I=n(64438),B={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function M(e,a){let n=e.filter(e=>"none"!==e.fill||!e.color).map(e=>{let a=e.name.split(".").pop();return{...e,name:a}});return a?n.filter(e=>e.name===a):n}function m(e,a){return"radial"===a||"scatter"===a?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let p={type:"area",showColor:!0},_=(0,g.d)((e,a)=>{let n=(0,o.w)("ChartTooltip",p,e),{classNames:g,className:_,style:c,styles:y,unstyled:h,vars:u,payload:v,label:f,unit:x,type:b,segmentId:j,mod:A,series:C,valueFormatter:k,showColor:L,...K}=n,w=(0,r.rZ)(),S=(0,i.y)({name:"ChartTooltip",classes:B,props:n,className:_,style:c,classNames:g,styles:y,unstyled:h});if(!v)return null;let N=M(v,j),D="scatter"===b?v[0]?.payload?.name:null,G=(0,I.v)(C),z=f||D,T=N.map(e=>(0,t.jsxs)("div",{"data-type":b,...S("tooltipItem"),children:[(0,t.jsxs)("div",{...S("tooltipItemBody"),children:[L&&(0,t.jsx)(l.b,{color:(0,d.p)(e.color,w),size:12,...S("tooltipItemColor"),withShadow:!1}),(0,t.jsx)("div",{...S("tooltipItemName"),children:G[e.name]||e.name})]}),(0,t.jsxs)("div",{...S("tooltipItemData"),children:["function"==typeof k?k(m(e,b)):m(e,b),x||e.unit]})]},e?.key??e.name));return(0,t.jsxs)(s.x,{...S("tooltip"),mod:[{type:b},A],ref:a,...K,children:[z&&(0,t.jsx)("div",{...S("tooltipLabel"),children:z}),(0,t.jsx)("div",{...S("tooltipBody"),children:T})]})});_.displayName="@mantine/charts/ChartTooltip"},63098:function(e,a,n){n.d(a,{G:function(){return L}});var t=n(52322),g=n(2784),o=n(30840),r=n(1510),i=n(18205),l=n(78560),d=n(55484),s=n(25556),I=n(81224),B=n(3131),M=n(21154),m=n(55734),p=n(11200),_=n(13588),c=n(82027),y=n(38483),h=n(68755),u=n(51477),v=n(46690),f=n(28559),x=n(46293),b=n(50425),j=n(7064);function A(e,a){return e===a.x?"x":"y"}let C={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x"},k=(0,p.Z)((e,{textColor:a,gridColor:n})=>({root:{"--chart-text-color":a?(0,_.p)(a,e):void 0,"--chart-grid-color":n?(0,_.p)(n,e):void 0}})),L=(0,c.d)((e,a)=>{let n=(0,y.w)("ScatterChart",C,e),{classNames:p,className:c,style:L,styles:K,unstyled:w,vars:S,referenceLines:N,dir:D,withLegend:G,withTooltip:z,withXAxis:T,withYAxis:Z,xAxisProps:E,yAxisProps:X,orientation:F,scatterChartProps:P,legendProps:Q,data:W,gridAxis:q,tickLine:H,strokeDasharray:O,gridProps:V,tooltipAnimationDuration:Y,tooltipProps:J,children:R,onMouseLeave:U,dataKey:$,textColor:ee,gridColor:ea,xAxisLabel:en,yAxisLabel:et,unit:eg,labels:eo,valueFormatter:er,scatterProps:ei,...el}=n,ed=e=>"function"==typeof er?er:er?.[e],es=ed("x"),eI=ed("y"),eB=(0,h.rZ)(),eM=W.map(e=>({...e,data:e.data.map(a=>({...a,name:e.name}))})),{resolvedClassNames:em,resolvedStyles:ep}=(0,u.h)({classNames:p,styles:K,props:n}),e_=(0,v.y)({name:"ScatterChart",classes:j.Z,props:n,className:c,style:L,classNames:p,styles:K,unstyled:w,vars:S,varsResolver:k}),[ec,ey]=(0,g.useState)(null),eh=null!==ec,eu=N?.map((e,a)=>{let n=_.p(e.color,eB);return t.jsx(o.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...e_("referenceLine")},a)}),ev=eM.map((e,a)=>{let n=eh&&ec!==e.name;return(0,t.jsx)(r.b,{data:e.data,fill:(0,_.p)(e.color,eB),isAnimationActive:!1,fillOpacity:n?.1:1,...ei},a)});return(0,t.jsx)(f.x,{ref:a,...e_("root"),onMouseLeave:e=>{ey(null),U?.(e)},dir:D||"ltr",...el,children:(0,t.jsx)(i.h,{...e_("container"),children:(0,t.jsxs)(l.G,{margin:{bottom:en?30:void 0,left:et?10:void 0,right:et?5:void 0},...P,children:[(0,t.jsx)(d.q,{strokeDasharray:O,vertical:"y"===q||"xy"===q,horizontal:"x"===q||"xy"===q,...e_("grid"),...V}),(0,t.jsxs)(s.K,{type:"number",hide:!T,dataKey:$.x,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==q&&("x"===H||"xy"===H))&&{stroke:"currentColor"},minTickGap:5,unit:eg?.x,tickFormatter:es,...e_("axis"),...E,children:[en&&(0,t.jsx)(I._,{position:"insideBottom",offset:-20,fontSize:12,...e_("axisLabel"),children:en}),E?.children]}),(0,t.jsxs)(B.B,{type:"number",hide:!Z,axisLine:!1,dataKey:$.y,tickLine:!!("none"!==q&&("y"===H||"xy"===H))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:eg?.y,tickFormatter:eI,...e_("axis"),...X,children:[et&&(0,t.jsx)(I._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...e_("axisLabel"),children:et}),X?.children]}),z&&(0,t.jsx)(M.u,{animationDuration:Y,isAnimationActive:0!==Y,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:O},content:({label:e,payload:a})=>(0,t.jsx)(b.h,{type:"scatter",label:e,payload:eo?a?.map(e=>({...e,name:eo[A(e.name,$)]||e.name,value:ed(A(e.name,$))?.(e.value)??e.value})):a?.map(e=>({...e,value:ed(A(e.name,$))?.(e.value)??e.value})),classNames:em,styles:ep,series:W}),...J}),G&&(0,t.jsx)(m.D,{verticalAlign:"top",content:e=>(0,t.jsx)(x.Q,{payload:e.payload?.map((e,a)=>({...e,dataKey:W[a].name})),onHighlight:ey,legendPosition:Q?.verticalAlign||"top",classNames:em,styles:ep,series:W}),height:44,...Q}),eu,ev]})})})});L.displayName="@mantine/charts/ScatterChart",L.classes=j.Z},7064:function(e,a,n){n.d(a,{Z:function(){return t}});var t={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,a,n){n.d(a,{v:function(){return t}});function t(e){return e?e.reduce((e,a)=>(e[a.name]=a.label,e),{}):{}}}}]);