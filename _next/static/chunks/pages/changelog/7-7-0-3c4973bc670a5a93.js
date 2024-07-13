(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29703],{70257:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-7-0",function(){return n(20697)}])},20697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(52322),o=n(45392),s=n(82877),a=n(61745),i=n(89882),l=n(50636),c=n(58255),d=n(81066),h=n(25071),u=n(15019);let p=(0,h.A)(u.us.Changelog770);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"virtual-colors",children:"Virtual colors"}),"\n",(0,r.jsxs)(t.p,{children:["Virtual color is a special color which values should be different for light and dark color schemes.\nTo define a virtual color, use ",(0,r.jsx)(t.code,{children:"virtualColor"})," function which accepts an object with the following\nproperties as a single argument:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"name"})," – color name, must be the same as the key in ",(0,r.jsx)(t.code,{children:"theme.colors"})," object"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"light"})," – a key of ",(0,r.jsx)(t.code,{children:"theme.colors"})," object for light color scheme"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dark"})," – a key of ",(0,r.jsx)(t.code,{children:"theme.colors"})," object for dark color scheme"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To see the demo in action, switch between light and dark color schemes (",(0,r.jsx)(t.code,{children:"Ctrl + J"}),"):"]}),"\n",(0,r.jsx)(n,{data:s.$}),"\n",(0,r.jsx)(t.h2,{id:"floatingindicator-component",children:"FloatingIndicator component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"})," component:"]}),"\n",(0,r.jsx)(n,{data:a.o}),"\n",(0,r.jsx)(t.h2,{id:"scatterchart-component",children:"ScatterChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/scatter-chart",children:"ScatterChart"})," component:"]}),"\n",(0,r.jsx)(n,{data:i.j}),"\n",(0,r.jsx)(t.h2,{id:"colorstuple-function",children:"colorsTuple function"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"colorsTuple"})," function can be used to:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Use single color as the same color for all shades"}),"\n",(0,r.jsx)(t.li,{children:"Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { colorsTuple, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    custom: colorsTuple('#FFC0CB'),\n    dynamic: colorsTuple(\n      Array.from({ length: 10 }, (_, index) => '#FFC0CB')\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-mutation-observer-hook",children:"use-mutation-observer hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-mutation-observer",children:"useMutationObserver"})," hook:"]}),"\n",(0,r.jsx)(n,{data:l.i}),"\n",(0,r.jsx)(t.h2,{id:"use-state-history-hook",children:"use-state-history hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-state-history",children:"useStateHistory"})," hook:"]}),"\n",(0,r.jsx)(n,{data:c.n}),"\n",(0,r.jsx)(t.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),"\ncomponents now support ",(0,r.jsx)(t.code,{children:"xAxisLabel"})," and ",(0,r.jsx)(t.code,{children:"yAxisLabel"})," props:"]}),"\n",(0,r.jsx)(n,{data:d.s}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["New section has been added to the ",(0,r.jsx)(t.a,{href:"/styles/responsive#hidden-and-visible-from-as-classes",children:"responsive guide"})," on how to use ",(0,r.jsx)(t.code,{children:"mantine-hidden-from-{x}"})," and ",(0,r.jsx)(t.code,{children:"mantine-visible-from-{x}"})," classes."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/remix",children:"Remix guide"})," has been updated to use new Vite bundler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/jest",children:"Jest"})," and ",(0,r.jsx)(t.a,{href:"/guides/vitest",children:"Vitest"})," guides configuration has been updated to include mocks for ",(0,r.jsx)(t.code,{children:"window.HTMLElement.prototype.scrollIntoView"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/css-variables",children:"CSS variables"})," documentation has been updated to include more information about typography and colors variables"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.p,{children:["New articles added to the ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/segmented-control-no-value",children:"Can I use SegmentedControl with empty value?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/other-libs",children:"Is there a comparison with other libraries?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/vue-svelte-angular",children:"Can I use Mantine with Vue/Svelte/Angular/etc.?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/combobox-testing",children:"How can I test Select/MultiSelect components?"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning logic has been migrated to ",(0,r.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"}),". It is now more performant and works better when used inside elements with ",(0,r.jsx)(t.code,{children:"transform: scale()"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-mounted",children:"use-mounted"})," hook"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/charts/sparkline",children:"Sparkline"})," now supports ",(0,r.jsx)(t.code,{children:"connectNulls"})," and ",(0,r.jsx)(t.code,{children:"areaProps"})," props"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mantinedev/remix-template",children:"Remix template"})," has been updated to use new Vite bundler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," and ",(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," components now support ",(0,r.jsx)(t.code,{children:"scrollAreaProps"})," prop to pass props down to the ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," component in the dropdown"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports 4 new transitions: ",(0,r.jsx)(t.code,{children:"fade-up"}),", ",(0,r.jsx)(t.code,{children:"fade-down"}),", ",(0,r.jsx)(t.code,{children:"fade-left"}),", ",(0,r.jsx)(t.code,{children:"fade-right"})]}),"\n",(0,r.jsxs)(t.li,{children:["Default ",(0,r.jsx)(t.a,{href:"/core/modal",children:"Modal"})," transition was changed to ",(0,r.jsx)(t.code,{children:"fade-down"}),". This change resolves issues with ",(0,r.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning when used inside modals."]}),"\n",(0,r.jsxs)(t.li,{children:["You can now reference headings font sizes and line heights in ",(0,r.jsx)(t.code,{children:"fz"})," and ",(0,r.jsx)(t.code,{children:"lh"})," style props with ",(0,r.jsx)(t.code,{children:"h1"}),", ",(0,r.jsx)(t.code,{children:"h2"}),", ",(0,r.jsx)(t.code,{children:"h3"}),", ",(0,r.jsx)(t.code,{children:"h4"}),", ",(0,r.jsx)(t.code,{children:"h5"}),", ",(0,r.jsx)(t.code,{children:"h6"})," values"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(p,{...e,children:(0,r.jsx)(m,{...e})})}},81066:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});var r=n(52322),o=n(24634),s=n(99803);let a={type:"code",component:function(){return(0,r.jsx)(o.T,{h:300,data:s.aT,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.op,language:"tsx",fileName:"data.ts"}]}},99803:function(e,t,n){"use strict";n.d(t,{$o:function(){return l},DR:function(){return h},Mm:function(){return d},ZW:function(){return u},aT:function(){return r},n1:function(){return s},op:function(){return o},ux:function(){return i},xo:function(){return c},zW:function(){return a}});let r=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],o=`
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
`,s=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],a=`
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
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];
`,i=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],l=`
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
`,c=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
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
`,h=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],u=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`},61745:function(e,t,n){"use strict";n.d(t,{o:function(){return j}});var r=n(52322),o=n(2784),s=n(60210),a=n(85448),i=n(21243),l=n(66041),c=n(99765),d=n(10631),h=n(36762),u=n(11264),p=n(63118),m=n(19296),x=n(63409),f="m_378d0bd5",g="m_cc1130c9";let j={type:"code",component:function(){let[e,t]=(0,o.useState)(null),[n,j]=(0,o.useState)({}),[v,k]=(0,o.useState)("center"),y=e=>t=>{n[e]=t,j(n)};return(0,r.jsxs)("div",{className:"m_59c14cf6",dir:"ltr",ref:t,children:[(0,r.jsx)(m.G,{target:n[v],parent:e,className:"m_f9a45e7b"}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(x.k,{className:g,onClick:()=>k("up-left"),ref:y("up-left"),mod:{active:"up-left"===v},children:(0,r.jsx)(s.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("up"),ref:y("up"),mod:{active:"up"===v},children:(0,r.jsx)(a.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("up-right"),ref:y("up-right"),mod:{active:"up-right"===v},children:(0,r.jsx)(i.Z,{size:26,stroke:1.5})})]}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(x.k,{className:g,onClick:()=>k("left"),ref:y("left"),mod:{active:"left"===v},children:(0,r.jsx)(l.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("center"),ref:y("center"),mod:{active:"center"===v},children:(0,r.jsx)(c.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("right"),ref:y("right"),mod:{active:"right"===v},children:(0,r.jsx)(d.Z,{size:26,stroke:1.5})})]}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(x.k,{className:g,onClick:()=>k("down-left"),ref:y("down-left"),mod:{active:"down-left"===v},children:(0,r.jsx)(h.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("down"),ref:y("down"),mod:{active:"down"===v},children:(0,r.jsx)(u.Z,{size:26,stroke:1.5})}),(0,r.jsx)(x.k,{className:g,onClick:()=>k("down-right"),ref:y("down-right"),mod:{active:"down-right"===v},children:(0,r.jsx)(p.Z,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconCircle,
} from '@tabler/icons-react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <IconArrowUpLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <IconArrowUp size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <IconArrowUpRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <IconArrowLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <IconCircle size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <IconArrowRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <IconArrowDownLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <IconArrowDown size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <IconArrowDownRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  padding: var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
}

.indicator {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  border-radius: var(--mantine-radius-md);
  box-shadow: var(--mantine-shadow-md);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.controlsGroup {
  display: flex;
}

.control {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);

  &[data-active] {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  }

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  & svg {
    display: block;
    position: relative;
    z-index: 1;
  }
}`}]}},50636:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var r=n(52322),o=n(2784),s=n(8582),a=n(83795),i=n(96339);let l={type:"code",component:function(){let[e,t]=(0,o.useState)("");return(0,i.I)(e=>{e.forEach(e=>{"attributes"===e.type&&"dir"===e.attributeName&&e.target instanceof HTMLElement&&t(e.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.x,{children:["Press ",(0,r.jsx)(a.T,{children:"Ctrl"})," + ",(0,r.jsx)(a.T,{children:"Shift"})," + ",(0,r.jsx)(a.T,{children:"L"})," to change direction"]}),(0,r.jsxs)(s.x,{mt:10,children:["Direction was changed to: ",e||"Not changed yet"]})]})},code:`
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.getAttribute('dir') || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['dir'],
    },
    () => document.documentElement
  );

  return (
    <>
      <Text>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd> to change direction
      </Text>

      <Text mt={10}>Direction was changed to: {lastMutation || 'Not changed yet'}</Text>
    </>
  );
}
`}},58255:function(e,t,n){"use strict";n.d(t,{n:function(){return c}});var r=n(52322),o=n(8582),s=n(93010),a=n(17115),i=n(45909),l=n(2784);let c={type:"code",component:function(){let[e,t,n]=function(e){let[t,n]=(0,l.useState)({history:[1],current:0}),r=(0,l.useCallback)(e=>n(t=>{let n=[...t.history.slice(0,t.current+1),e];return{history:n,current:n.length-1}}),[]),o=(0,l.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),s=(0,l.useCallback)((e=1)=>n(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),a=(0,l.useMemo)(()=>({set:r,forward:s,back:o}),[]);return[t.history[t.current],a,t]}(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.x,{children:["Current value: ",e]}),(0,r.jsxs)(s.Z,{my:"md",children:[(0,r.jsx)(a.z,{onClick:()=>t.set(Math.ceil(100*Math.random())+1),children:"Set value"}),(0,r.jsx)(a.z,{onClick:()=>t.back(),children:"Back"}),(0,r.jsx)(a.z,{onClick:()=>t.forward(),children:"Forward"})]}),(0,r.jsx)(i.E,{block:!0,children:JSON.stringify(n,null,2)})]})},code:`
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
`}},82877:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var r=n(52322),o=n(28559);let s={type:"code",component:function(){return(0,r.jsx)(o.x,{bg:"virtual",c:"white",p:"md",fw:700,children:"This box has virtual background color, it is pink in dark mode and cyan in light mode"})},code:[{fileName:"App.tsx",code:`
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.tsx",code:`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`,language:"tsx"}]}},24634:function(e,t,n){"use strict";n.d(t,{T:function(){return I}});var r=n(52322),o=n(2784),s=n(81073),a=n(30840),i=n(18205),l=n(50603),c=n(55734),d=n(55484),h=n(25556),u=n(81224),p=n(3131),m=n(21154),x=n(11200),f=n(13588),g=n(82027),j=n(38483),v=n(68755),k=n(51477),y=n(46690),A=n(28559),w=n(46293),b=n(50425),C=n(32125);function M({offset:e,id:t,colors:n,fillOpacity:o}){let s=(0,v.rZ)();return(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:e,stopColor:(0,f.p)(n[0],s),stopOpacity:o??.2}),(0,r.jsx)("stop",{offset:e,stopColor:(0,f.p)(n[1],s),stopOpacity:o??.2})]})}M.displayName="@mantine/charts/AreaSplit";var N=n(7064);function T(e){return`${(100*e).toFixed(0)}%`}let S={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},B=(0,x.Z)((e,{textColor:t,gridColor:n})=>({root:{"--chart-text-color":t?(0,f.p)(t,e):void 0,"--chart-grid-color":n?(0,f.p)(n,e):void 0}})),I=(0,g.d)((e,t)=>{let n=(0,j.w)("AreaChart",S,e),{classNames:x,className:g,style:I,styles:D,unstyled:z,vars:L,data:R,series:O,withGradient:U,dataKey:P,withXAxis:E,withYAxis:F,curveType:_,gridProps:Z,withDots:G,tickLine:K,strokeDasharray:H,gridAxis:$,unit:V,yAxisProps:W,xAxisProps:q,dotProps:J,activeDotProps:X,strokeWidth:Y,tooltipAnimationDuration:Q,type:ee,legendProps:et,tooltipProps:en,withLegend:er,withTooltip:eo,areaChartProps:es,fillOpacity:ea,splitColors:ei,splitOffset:el,connectNulls:ec,onMouseLeave:ed,orientation:eh,referenceLines:eu,dir:ep,valueFormatter:em,children:ex,areaProps:ef,xAxisLabel:eg,yAxisLabel:ej,withRightYAxis:ev,rightYAxisLabel:ek,rightYAxisProps:ey,...eA}=n,ew=(0,v.rZ)(),eb=(0,o.useId)(),eC=`${eb}-split`,eM=(Q||0)>0,eN="boolean"==typeof U?U:"default"===ee,eT="stacked"===ee||"percent"===ee,[eS,eB]=(0,o.useState)(null),eI=null!==eS,{resolvedClassNames:eD,resolvedStyles:ez}=(0,k.h)({classNames:x,styles:D,props:n}),eL=(0,y.y)({name:"AreaChart",classes:N.Z,props:n,className:g,style:I,classNames:x,styles:D,unstyled:z,vars:L,varsResolver:B}),eR=O.map(e=>{let t=(0,f.p)(e.color,ew),n=eI&&eS!==e.name;return(0,o.createElement)(s.u,{...eL("area"),activeDot:{fill:ew.white,stroke:t,strokeWidth:2,r:4,...X},dot:{fill:t,fillOpacity:n?0:1,strokeWidth:2,r:4,...J},key:e.name,name:e.name,type:_,dataKey:e.name,fill:"none",strokeWidth:Y,stroke:"none",isAnimationActive:!1,connectNulls:ec,stackId:eT?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ef?ef(e):ef})}),eO=O.map(e=>{let t=`${eb}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,n=(0,f.p)(e.color,ew),a=eI&&eS!==e.name;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)(C.v,{color:n,withGradient:eN,id:t,fillOpacity:ea})}),(0,r.jsx)(s.u,{...eL("area"),activeDot:!1,dot:!1,name:e.name,type:_,dataKey:e.name,fill:"split"===ee?`url(#${eC})`:`url(#${t})`,strokeWidth:Y,stroke:n,isAnimationActive:!1,connectNulls:ec,stackId:eT?"stack":void 0,fillOpacity:a?0:1,strokeOpacity:a?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",..."function"==typeof ef?ef(e):ef})]},e.name)}),eU=eu?.map((e,t)=>{let n=f.p(e.color,ew);return r.jsx(a.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eL("referenceLine")},t)}),eP={axisLine:!1,..."vertical"===eh?{dataKey:P,type:"category"}:{type:"number"},tickLine:!!("none"!==$&&("y"===K||"xy"===K))&&{stroke:"currentColor"},allowDecimals:!0,unit:V,tickFormatter:"percent"===ee?T:em,...eL("axis")};return(0,r.jsx)(A.x,{ref:t,...eL("root"),onMouseLeave:e=>{eB(null),ed?.(e)},dir:ep||"ltr",...eA,children:(0,r.jsx)(i.h,{...eL("container"),children:(0,r.jsxs)(l.T,{data:R,stackOffset:"percent"===ee?"expand":void 0,layout:eh,margin:{bottom:eg?30:void 0,left:ej?10:void 0,right:ej?5:void 0},...es,children:[eU,er&&(0,r.jsx)(c.D,{verticalAlign:"top",content:e=>(0,r.jsx)(w.Q,{payload:e.payload,onHighlight:eB,legendPosition:et?.verticalAlign||"top",classNames:eD,styles:ez,series:O}),...et}),(0,r.jsx)(d.q,{strokeDasharray:H,vertical:"y"===$||"xy"===$,horizontal:"x"===$||"xy"===$,...eL("grid"),...Z}),(0,r.jsxs)(h.K,{hide:!E,..."vertical"===eh?{type:"number"}:{dataKey:P},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==$&&("x"===K||"xy"===K))&&{stroke:"currentColor"},minTickGap:5,...eL("axis"),...q,children:[eg&&(0,r.jsx)(u._,{position:"insideBottom",offset:-20,fontSize:12,...eL("axisLabel"),children:eg}),q?.children]}),(0,r.jsxs)(p.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!F,...eP,...W,children:[ej&&(0,r.jsx)(u._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eL("axisLabel"),children:ej}),W?.children]}),(0,r.jsxs)(p.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ev,...eP,...ey,children:[ek&&(0,r.jsx)(u._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eL("axisLabel"),children:ek}),W?.children]}),eo&&(0,r.jsx)(m.u,{animationDuration:Q,isAnimationActive:eM,position:"vertical"===eh?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:H},content:({label:e,payload:t})=>(0,r.jsx)(b.h,{label:e,payload:t,unit:V,classNames:eD,styles:ez,series:O,valueFormatter:em}),...en}),"split"===ee&&(0,r.jsx)("defs",{children:(0,r.jsx)(M,{colors:ei,id:eC,offset:el??function({data:e,series:t}){return 1===t.length?function({data:e,dataKey:t}){let n=Math.max(...e.map(e=>e[t])),r=Math.min(...e.map(e=>e[t]));return n<=0?0:r>=0?1:n/(n-r)}({data:e,dataKey:t[0].name}):.5}({data:R,series:O}),fillOpacity:ea})}),eO,G&&eR,ex]})})})});I.classes=N.Z,I.displayName="@mantine/charts/AreaChart"},32125:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r=n(52322);function o({color:e,id:t,withGradient:n,fillOpacity:o}){return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}o.displayName="@mantine/charts/AreaGradient"}},function(e){e.O(0,[61177,16717,50603,78560,54612,66748,11340,89882,92888,49774,40179],function(){return e(e.s=70257)}),_N_E=e.O()}]);