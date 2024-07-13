(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58458],{7641:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-11-0",function(){return a(60640)}])},60640:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(52322),n=a(45392),o=a(35974),i=a(57296),s=a(72384),l=a(57316),c=a(10913),d=a(75394),u=a(31561),p=a(73473),h=a(25071),m=a(15019);let x=(0,h.A)(m.us.Changelog7110);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components now have ",(0,r.jsx)(t.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"avatar-initials",children:"Avatar initials"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/avatar",children:"Avatar"})," component now supports displaying initials with auto generated color based on the given ",(0,r.jsx)(t.code,{children:"name"})," value.\nTo display initials instead of the default placeholder, set ",(0,r.jsx)(t.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,r.jsx)(t.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,r.jsx)(t.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,r.jsx)(a,{data:o.e}),"\n",(0,r.jsx)(t.h2,{id:"bubblechart-component",children:"BubbleChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/bubble-chart",children:"BubbleChart"})," component:"]}),"\n",(0,r.jsx)(a,{data:i.j}),"\n",(0,r.jsx)(t.h2,{id:"barchart-waterfall-type",children:"BarChart waterfall type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,r.jsx)(t.code,{children:"waterfall"})," type\nwhich is useful for visualizing changes in values over time:"]}),"\n",(0,r.jsx)(a,{data:s.A}),"\n",(0,r.jsx)(t.h2,{id:"linechart-gradient-type",children:"LineChart gradient type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," component now supports ",(0,r.jsx)(t.code,{children:"gradient"})," type\nwhich renders line chart with gradient fill:"]}),"\n",(0,r.jsx)(a,{data:l.F}),"\n",(0,r.jsx)(t.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," components\nnow support ",(0,r.jsx)(t.code,{children:"rightYAxis"})," prop which renders additional Y axis on the right side of the chart:"]}),"\n",(0,r.jsx)(a,{data:c.o}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-legend",children:"RadarChart legend"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/radar-chart",children:"RadarChart"})," component now supports legend:"]}),"\n",(0,r.jsx)(a,{data:d.j}),"\n",(0,r.jsx)(t.h2,{id:"tagsinput-acceptvalueonblur",children:"TagsInput acceptValueOnBlur"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," component behavior has been changed. Now By default,\nif the user types in a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"acceptValueOnBlur"})," to ",(0,r.jsx)(t.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,r.jsx)(t.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,r.jsx)(a,{data:u.Y}),"\n",(0,r.jsx)(t.h2,{id:"transition-delay",children:"Transition delay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports ",(0,r.jsx)(t.code,{children:"enterDelay"})," and ",(0,r.jsx)(t.code,{children:"exitDelay"})," props to delay transition start:"]}),"\n",(0,r.jsx)(a,{data:p.g}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/core/progress/#example-progress-with-segments",children:"segmented progress"})," example has been added to ",(0,r.jsx)(t.code,{children:"Progress"})," component documentation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," components documentation now includes additional demo on how to change the dropdown width"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"//dates/date-picker/#exclude-dates",children:"DatePicker"})," example for ",(0,r.jsx)(t.code,{children:"excludeDate"})," prop"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,r.jsx)(t.code,{children:"hideWithOnePage"})," prop which hides pagination when there is only one page"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/spoiler",children:"Spoiler"})," component now supports controlled expanded state with ",(0,r.jsx)(t.code,{children:"expanded"})," and ",(0,r.jsx)(t.code,{children:"onExpandedChange"})," props"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/burger",children:"Burger"})," component now supports ",(0,r.jsx)(t.code,{children:"lineSize"})," prop to change lines height"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/dates/calendar",children:"Calendar"}),", ",(0,r.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other similar components now support ",(0,r.jsx)(t.code,{children:"highlightToday"})," prop to highlight today's date"]}),"\n"]})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,{...e,children:(0,r.jsx)(f,{...e})})}},25556:function(e,t,a){"use strict";a.d(t,{K:function(){return r}});var r=function(){return null};r.displayName="XAxis",r.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},3131:function(e,t,a){"use strict";a.d(t,{B:function(){return r}});var r=function(){return null};r.displayName="YAxis",r.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},80739:function(e,t,a){"use strict";a.d(t,{v:function(){return l}});var r=a(12624),n=a(171),o=a(25556),i=a(3131),s=a(69524),l=(0,r.z)({chartName:"BarChart",GraphicalChild:n.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:s.t9})},72384:function(e,t,a){"use strict";a.d(t,{A:function(){return i}});var r=a(52322),n=a(8132),o=a(9404);let i={type:"code",component:function(){return(0,r.jsx)(n.v,{h:300,data:o.It,dataKey:"item",type:"waterfall",series:[{name:"Effective tax rate in %",color:"blue"}],withLegend:!0})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.K$,language:"tsx",fileName:"data.ts"}]}},57296:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var r=a(52322),n=a(62967),o=a(64606);let i={type:"code",component:function(){return(0,r.jsx)(n.O,{h:60,data:o.a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}]}},64606:function(e,t,a){"use strict";a.d(t,{a:function(){return r},o:function(){return n}});let r=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],n=`
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
`},57316:function(e,t,a){"use strict";a.d(t,{F:function(){return i}});var r=a(52322),n=a(65602),o=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(n.w,{h:300,data:o.c8,series:[{name:"temperature",label:"Avg. Temperature"}],dataKey:"date",type:"gradient",gradientStops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.5"}],strokeWidth:5,curveType:"natural",yAxisProps:{domain:[-25,40]},valueFormatter:e=>`${e}\xb0C`})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => \`\${value}\xb0C\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.FH,language:"tsx",fileName:"data.ts"}]}},10913:function(e,t,a){"use strict";a.d(t,{o:function(){return i}});var r=a(52322),n=a(65602),o=a(16690);let i={type:"code",component:function(){return(0,r.jsx)(n.w,{h:300,data:o.DR,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6"},{name:"pv",color:"cyan.6",yAxisId:"right"}]})},code:[{code:`
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.ZW,language:"tsx",fileName:"data.ts"}]}},16690:function(e,t,a){"use strict";a.d(t,{$o:function(){return i},DR:function(){return u},FH:function(){return d},Mm:function(){return l},ZW:function(){return p},aT:function(){return r},c8:function(){return c},op:function(){return n},ux:function(){return o},xo:function(){return s}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],n=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
`,o=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],i=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];
`,s=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],l=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
`,c=[{date:"Jan",temperature:-25},{date:"Feb",temperature:-10},{date:"Mar",temperature:5},{date:"Apr",temperature:15},{date:"May",temperature:30},{date:"Jun",temperature:15},{date:"Jul",temperature:30},{date:"Aug",temperature:40},{date:"Sep",temperature:15},{date:"Oct",temperature:20},{date:"Nov",temperature:0},{date:"Dec",temperature:-10}],d=`
export const data = [
  { date: 'Jan', temperature: -25 },
  { date: 'Feb', temperature: -10 },
  { date: 'Mar', temperature: 5 },
  { date: 'Apr', temperature: 15 },
  { date: 'May', temperature: 30 },
  { date: 'Jun', temperature: 15 },
  { date: 'Jul', temperature: 30 },
  { date: 'Aug', temperature: 40 },
  { date: 'Sep', temperature: 15 },
  { date: 'Oct', temperature: 20 },
  { date: 'Nov', temperature: 0 },
  { date: 'Dec', temperature: -10 },
];
`,u=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},75394:function(e,t,a){"use strict";a.d(t,{j:function(){return i}});var r=a(52322),n=a(22309),o=a(47550);let i={type:"code",component:function(){return(0,r.jsx)(n.H,{h:300,data:o.qH,dataKey:"product",withPolarRadiusAxis:!0,withLegend:!0,series:[{name:"Sales January",color:"blue.6",opacity:.2},{name:"Sales February",color:"orange.6",opacity:.2}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue.6', opacity: 0.2 },
        { name: 'Sales February', color: 'orange.6', opacity: 0.2 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(e,t,a){"use strict";a.d(t,{aT:function(){return r},gv:function(){return i},op:function(){return n},qH:function(){return o}});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],n=`
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
`,o=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],i=`
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];`},35974:function(e,t,a){"use strict";a.d(t,{e:function(){return s}});var r=a(52322),n=a(82067),o=a(93010),i=a(10404);let s={type:"code",component:function(){let e=i.R5.map(e=>(0,r.jsx)(n.q,{name:e,color:"initials"},e));return(0,r.jsx)(o.Z,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.$y}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},10404:function(e,t,a){"use strict";a.d(t,{$y:function(){return o},R5:function(){return n},aY:function(){return r}});let r=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],n=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},31561:function(e,t,a){"use strict";a.d(t,{Y:function(){return o}});var r=a(52322),n=a(77413);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.B,{label:"Value IS accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!0}),(0,r.jsx)(n.B,{label:"Value IS NOT accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!1,mt:"md"})]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},73473:function(e,t,a){"use strict";a.d(t,{g:function(){return c}});var r=a(52322),n=a(2784),o=a(68131),i=a(17115),s=a(96321),l=a(1198);let c={type:"code",code:`
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}`,component:function(){let[e,t]=(0,n.useState)(!1);return(0,r.jsxs)(o.k,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,r.jsx)(i.z,{onClick:()=>t(!0),children:"Open dropdown"}),(0,r.jsx)(s.u,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,r.jsx)(l.X,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}}},62967:function(e,t,a){"use strict";a.d(t,{O:function(){return C}});var r=a(52322),n=a(18205),o=a(78560),i=a(25556),s=a(3131),l=a(18043),c=a(21154),d=a(1510),u=a(93010),p=a(8582),h=a(11200),m=a(13588),x=a(82027),f=a(38483),g=a(68755),y=a(46690),v=a(28559),j=a(7064);function b({active:e,payload:t,getStyles:a,dataKey:n,valueFormatter:o}){if(e&&t&&t.length){let e=t[0]&&t[0].payload;return(0,r.jsx)("div",{...a("tooltip"),children:(0,r.jsxs)(u.Z,{justify:"space-between",children:[(0,r.jsx)(p.x,{fz:"sm",children:e[n.x]}),(0,r.jsx)(p.x,{fz:"sm",children:o?o(e[n.z]):e[n.z]})]})})}return null}let A={color:"blue.6",withTooltip:!0},w=(0,h.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,m.p)(t,e):void 0,"--chart-grid-color":a?(0,m.p)(a,e):void 0}})),C=(0,x.d)((e,t)=>{let a=(0,f.w)("BubbleChart",A,e),{classNames:u,className:p,style:h,styles:x,unstyled:C,vars:k,data:S,xAxisProps:M,yAxisProps:D,zAxisProps:T,tooltipProps:B,scatterProps:P,color:O,label:L,withTooltip:N,dataKey:F,range:I,valueFormatter:R,...J}=a,z=(0,g.rZ)(),G=(0,y.y)({name:"BubbleChart",classes:j.Z,props:a,className:p,style:h,classNames:u,styles:x,unstyled:C,vars:k,varsResolver:w});return(0,r.jsx)(v.x,{ref:t,...G("root"),...J,children:(0,r.jsx)(n.h,{children:(0,r.jsxs)(o.G,{children:[(0,r.jsx)(i.K,{type:"category",dataKey:F.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...G("axis"),...M}),(0,r.jsx)(s.B,{type:"number",dataKey:F.y,height:10,width:L?void 0:0,tick:!1,tickLine:!1,axisLine:!1,label:{value:L,position:"insideRight",fontSize:12,fill:"currentColor"},...G("axis"),...D}),(0,r.jsx)(l.d,{type:"number",dataKey:F.z,domain:function(e,t){let a=e.map(e=>e[t]);return[Math.min(...a),Math.max(...a)]}(S,F.z),range:I,...T}),N&&(0,r.jsx)(c.u,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,r.jsx)(b,{dataKey:F,active:e.active,payload:e.payload,getStyles:G,valueFormatter:R}),...B}),(0,r.jsx)(d.b,{data:S,fill:(0,m.p)(O,z),isAnimationActive:!1,...P})]})})})});C.displayName="@mantine/charts/BubbleChart",C.classes=j.Z},65602:function(e,t,a){"use strict";a.d(t,{w:function(){return T}});var r=a(52322),n=a(2784),o=a(63004),i=a(30840),s=a(18205),l=a(32908),c=a(55734),d=a(25556),u=a(81224),p=a(3131),h=a(55484),m=a(21154),x=a(11200),f=a(13588),g=a(82027),y=a(38483),v=a(68755),j=a(51477),b=a(46690),A=a(28559),w=a(66178),C=a(46293),k=a(50425),S=a(7064);let M={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone",gradientStops:[{offset:0,color:"red"},{offset:100,color:"blue"}]},D=(0,x.Z)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,f.p)(t,e):void 0,"--chart-grid-color":a?(0,f.p)(a,e):void 0}})),T=(0,g.d)((e,t)=>{let a=(0,y.w)("LineChart",M,e),{classNames:x,className:g,style:T,styles:B,unstyled:P,vars:O,data:L,withLegend:N,legendProps:F,series:I,onMouseLeave:R,dataKey:J,withTooltip:z,withXAxis:G,withYAxis:E,gridAxis:K,tickLine:_,xAxisProps:Z,yAxisProps:Y,unit:W,tooltipAnimationDuration:$,strokeDasharray:H,gridProps:V,tooltipProps:q,referenceLines:X,withDots:Q,dotProps:U,activeDotProps:ee,strokeWidth:et,lineChartProps:ea,connectNulls:er,fillOpacity:en,curveType:eo,orientation:ei,dir:es,valueFormatter:el,children:ec,lineProps:ed,xAxisLabel:eu,yAxisLabel:ep,type:eh,gradientStops:em,withRightYAxis:ex,rightYAxisLabel:ef,rightYAxisProps:eg,...ey}=a,ev=(0,v.rZ)(),[ej,eb]=(0,n.useState)(null),eA=null!==ej,{resolvedClassNames:ew,resolvedStyles:eC}=(0,j.h)({classNames:x,styles:B,props:a}),ek=(0,b.y)({name:"LineChart",classes:S.Z,props:a,className:g,style:T,classNames:x,styles:B,unstyled:P,vars:O,varsResolver:D}),eS=(0,w.M)(),eM=`line-chart-gradient-${eS}`,eD=em?.map(e=>r.jsx("stop",{offset:`${e.offset}%`,stopColor:f.p(e.color,ev)},e.color)),eT=I.map(e=>{let t=(0,f.p)(e.color,ev),a=eA&&ej!==e.name;return(0,n.createElement)(o.x,{...ek("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!Q&&{fillOpacity:a?0:1,strokeOpacity:a?0:1,strokeWidth:1,fill:"gradient"===eh?"var(--mantine-color-gray-7)":t,stroke:"gradient"===eh?"white":t,...U},activeDot:!!Q&&{fill:"gradient"===eh?"var(--mantine-color-gray-7)":t,stroke:"gradient"===eh?"white":t,...ee},fill:t,stroke:"gradient"===eh?`url(#${eM})`:t,strokeWidth:et,isAnimationActive:!1,fillOpacity:a?0:en,strokeOpacity:a?.5:en,connectNulls:er,type:eo,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",..."function"==typeof ed?ed(e):ed})}),eB=X?.map((e,t)=>{let a=f.p(e.color,ev);return r.jsx(i.d,{stroke:e.color?a:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?a:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...ek("referenceLine")},t)}),eP={axisLine:!1,..."vertical"===ei?{dataKey:J,type:"category"}:{type:"number"},tickLine:!!("none"!==K&&("y"===_||"xy"===_))&&{stroke:"currentColor"},allowDecimals:!0,unit:W,tickFormatter:el,...ek("axis")};return(0,r.jsx)(A.x,{ref:t,...ek("root"),onMouseLeave:e=>{eb(null),R?.(e)},dir:es||"ltr",...ey,children:(0,r.jsx)(s.h,{...ek("container"),children:(0,r.jsxs)(l.w,{data:L,layout:ei,margin:{bottom:eu?30:void 0,left:ep?10:void 0,right:ep?5:void 0},...ea,children:["gradient"===eh&&(0,r.jsx)("defs",{children:(0,r.jsx)("linearGradient",{id:eM,x1:"0",y1:"0",x2:"0",y2:"1",children:eD})}),N&&(0,r.jsx)(c.D,{verticalAlign:"top",content:e=>(0,r.jsx)(C.Q,{payload:e.payload,onHighlight:eb,legendPosition:F?.verticalAlign||"top",classNames:ew,styles:eC,series:I,showColor:"gradient"!==eh}),...F}),(0,r.jsxs)(d.K,{hide:!G,..."vertical"===ei?{type:"number"}:{dataKey:J},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==K&&("x"===_||"xy"===_))&&{stroke:"currentColor"},minTickGap:5,...ek("axis"),...Z,children:[eu&&(0,r.jsx)(u._,{position:"insideBottom",offset:-20,fontSize:12,...ek("axisLabel"),children:eu}),Z?.children]}),(0,r.jsxs)(p.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!E,...eP,...Y,children:[ep&&(0,r.jsx)(u._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:ep}),Y?.children]}),(0,r.jsxs)(p.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ex,...eP,...eg,children:[ef&&(0,r.jsx)(u._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...ek("axisLabel"),children:ef}),Y?.children]}),(0,r.jsx)(h.q,{strokeDasharray:H,vertical:"y"===K||"xy"===K,horizontal:"x"===K||"xy"===K,...ek("grid"),...V}),z&&(0,r.jsx)(m.u,{animationDuration:$,isAnimationActive:0!==$,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H},content:({label:e,payload:t})=>(0,r.jsx)(k.h,{label:e,payload:t,unit:W,classNames:ew,styles:eC,series:I,valueFormatter:el,showColor:"gradient"!==eh}),...q}),eT,eB,ec]})})})});T.displayName="@mantine/charts/LineChart",T.classes=S.Z},22309:function(e,t,a){"use strict";a.d(t,{H:function(){return C}});var r=a(52322),n=a(2784),o=a(53891),i=a(18205),s=a(62411),l=a(25076),c=a(79669),d=a(10086),u=a(55734),p=a(11200),h=a(13588),m=a(82027),x=a(38483),f=a(68755),g=a(46690),y=a(51477),v=a(28559),j=a(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let A={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},w=(0,p.Z)((e,{gridColor:t,textColor:a})=>({root:{"--chart-grid-color":t?(0,h.p)(t,e):void 0,"--chart-text-color":a?(0,h.p)(a,e):void 0}})),C=(0,m.d)((e,t)=>{let a=(0,x.w)("RadarChart",A,e),{classNames:p,className:m,style:C,styles:k,unstyled:S,vars:M,data:D,series:T,dataKey:B,gridColor:P,textColor:O,radarProps:L,radarChartProps:N,polarGridProps:F,polarAngleAxisProps:I,polarRadiusAxisProps:R,withPolarGrid:J,withPolarAngleAxis:z,withPolarRadiusAxis:G,children:E,withLegend:K,legendProps:_,...Z}=a,Y=(0,f.rZ)(),W=(0,g.y)({name:"RadarChart",classes:b,props:a,className:m,style:C,classNames:p,styles:k,unstyled:S,vars:M,varsResolver:w}),[$,H]=(0,n.useState)(null),{resolvedClassNames:V,resolvedStyles:q}=(0,y.h)({classNames:p,styles:k,props:a}),X=T.map((e,t)=>(0,r.jsx)(o.F,{name:e.name,dataKey:e.name,stroke:(0,h.p)(e.strokeColor||e.color,Y),fill:(0,h.p)(e.color,Y),fillOpacity:$?$===e.name?e.opacity||.4:.05:e.opacity||.4,strokeOpacity:$?$===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof L?L(e):L},t));return(0,r.jsx)(v.x,{ref:t,...W("root"),...Z,children:(0,r.jsx)(i.h,{...W("container"),children:(0,r.jsxs)(s.H,{data:D,...N,children:[J&&(0,r.jsx)(l.n,{stroke:"var(--chart-grid-color)",...F}),z&&(0,r.jsx)(c.I,{dataKey:B,...I}),G&&(0,r.jsx)(d.S,{stroke:"var(--chart-grid-color)",...R}),X,K&&(0,r.jsx)(u.D,{verticalAlign:"bottom",content:e=>(0,r.jsx)(j.Q,{payload:e.payload,onHighlight:H,legendPosition:_?.verticalAlign||"bottom",classNames:V,styles:q,series:T,centered:!0}),..._}),E]})})})});C.displayName="@mantine/charts/RadarChart",C.classes=b},82067:function(e,t,a){"use strict";a.d(t,{q:function(){return w}});var r=a(52322),n=a(2784),o=a(91482),i=a(11200),s=a(38483),l=a(46690),c=a(28559),d=a(33502),u=a(82027);let p=(0,n.createContext)(null),h=p.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let x={},f=(0,i.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.bG)(t)}})),g=(0,u.d)((e,t)=>{let a=(0,s.w)("AvatarGroup",x,e),{classNames:n,className:o,style:i,styles:d,unstyled:u,vars:p,spacing:g,...y}=a,v=(0,l.y)({name:"AvatarGroup",classes:m,props:a,className:o,style:i,classNames:n,styles:d,unstyled:u,vars:p,varsResolver:f,rootSelector:"group"});return(0,r.jsx)(h,{value:!0,children:(0,r.jsx)(c.x,{ref:t,...v("group"),...y})})});function y(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function v(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}g.classes=m,g.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],b={},A=(0,i.Z)((e,{size:t,radius:a,variant:r,gradient:n,color:i,autoContrast:s,name:l,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof l?function(e,t=j){let a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(v(e)))%t.length;return t[a]}(l,c):i,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,o.ap)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,o.H5)(a),"--avatar-bg":d||r?u.background:void 0,"--avatar-color":d||r?u.color:void 0,"--avatar-bd":d||r?u.border:void 0}}}),w=(0,d.b)((e,t)=>{let a=(0,s.w)("Avatar",b,e),{classNames:o,className:i,style:d,styles:u,unstyled:h,vars:x,src:f,alt:g,radius:j,color:w,gradient:C,imageProps:k,children:S,autoContrast:M,mod:D,name:T,allowedInitialsColors:B,...P}=a,O={withinGroup:!!(0,n.useContext)(p)},[L,N]=(0,n.useState)(!f),F=(0,l.y)({name:"Avatar",props:a,classes:m,className:i,style:d,classNames:o,styles:u,unstyled:h,vars:x,varsResolver:A});return(0,n.useEffect)(()=>N(!f),[f]),(0,r.jsx)(c.x,{...F("root"),mod:[{"within-group":O.withinGroup},D],ref:t,...P,children:L?(0,r.jsx)("span",{...F("placeholder"),title:g,children:S||"string"==typeof T&&v(T)||(0,r.jsx)(y,{})}):(0,r.jsx)("img",{...k,...F("image"),src:f,alt:g,onError:e=>{N(!0),k?.onError?.(e)}})})});w.classes=m,w.displayName="@mantine/core/Avatar",w.Group=g},68131:function(e,t,a){"use strict";a.d(t,{k:function(){return f}});var r=a(52322),n=a(40580);a(2784);var o=a(68755),i=a(38483),s=a(46690),l=a(9437),c=a(53515),d=a(12063),u=a(28559),p=a(33502),h=a(54367),m={root:"m_8bffd616"};let x={},f=(0,p.b)((e,t)=>{let a=(0,i.w)("Flex",x,e),{classNames:p,className:f,style:g,styles:y,unstyled:v,vars:j,gap:b,rowGap:A,columnGap:w,align:C,justify:k,wrap:S,direction:M,...D}=a,T=(0,s.y)({name:"Flex",classes:m,props:a,className:f,style:g,classNames:p,styles:y,unstyled:v,vars:j}),B=(0,o.rZ)(),P=(0,d.m)(),O=(0,c.n)({styleProps:{gap:b,rowGap:A,columnGap:w,align:C,justify:k,wrap:S,direction:M},theme:B,data:h.i});return(0,r.jsxs)(r.Fragment,{children:[O.hasResponsiveStyles&&(0,r.jsx)(l.f,{selector:`.${P}`,styles:O.styles,media:O.media}),(0,r.jsx)(u.x,{ref:t,...T("root",{className:P,style:(0,n.L)(O.inlineStyles)}),...D})]})});f.classes=m,f.displayName="@mantine/core/Flex"},54367:function(e,t,a){"use strict";a.d(t,{i:function(){return r}});let r={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}}},function(e){e.O(0,[61177,16717,59966,78560,62662,37355,66748,11340,61324,40296,77413,92888,49774,40179],function(){return e(e.s=7641)}),_N_E=e.O()}]);