(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26267],{41768:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-color-scheme",function(){return n(24199)}])},24199:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return u}});var r=n(52322),i=n(45392),t=n(32581),d=n(67588);let a={type:"code",code:`
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`,component:function(){let e=(0,d.t)();return(0,r.jsxs)(t.C,{color:"dark"===e?"blue":"teal",variant:"filled",children:["Your system color scheme is ",e]})},centered:!0};var s=n(25071),c=n(15019);let l=(0,s.A)(c.us.useColorScheme);function h(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"use-color-scheme"})," hook returns system color scheme value i.e. either ",(0,r.jsx)(o.code,{children:"dark"})," or ",(0,r.jsx)(o.code,{children:"light"}),":"]}),"\n",(0,r.jsx)(n,{data:a}),"\n",(0,r.jsxs)(o.p,{children:["Hook uses ",(0,r.jsx)(o.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook under the hood.\nIt relies on ",(0,r.jsx)(o.code,{children:"window.matchMedia()"})," ",(0,r.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand always returns ",(0,r.jsx)(o.code,{children:"light"})," if the API is not available (e.g. during server side rendering)\nunless an initial value is provided in the first argument."]}),"\n",(0,r.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"function useColorScheme(\n  initialValue?: 'dark' | 'light',\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): 'dark' | 'light';\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(h,{...e})})}},32581:function(e,o,n){"use strict";n.d(o,{C:function(){return g}});var r=n(52322);n(2784);var i=n(91482),t=n(11200),d=n(13588),a=n(38483),s=n(46690),c=n(28559),l=n(33502),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},m=(0,t.Z)((e,{radius:o,color:n,gradient:r,variant:t,size:a,autoContrast:s})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:t||"filled",autoContrast:s});return{root:{"--badge-height":(0,i.ap)(a,"badge-height"),"--badge-padding-x":(0,i.ap)(a,"badge-padding-x"),"--badge-fz":(0,i.ap)(a,"badge-fz"),"--badge-radius":void 0===o?void 0:(0,i.H5)(o),"--badge-bg":n||t?c.background:void 0,"--badge-color":n||t?c.color:void 0,"--badge-bd":n||t?c.border:void 0,"--badge-dot-color":"dot"===t?(0,d.p)(n,e):void 0}}}),g=(0,l.b)((e,o)=>{let n=(0,a.w)("Badge",u,e),{classNames:i,className:t,style:d,styles:l,unstyled:g,vars:p,radius:f,color:b,gradient:x,leftSection:j,rightSection:v,children:k,variant:_,fullWidth:w,autoContrast:y,circle:C,mod:E,...S}=n,N=(0,s.y)({name:"Badge",props:n,classes:h,className:t,style:d,classNames:i,styles:l,unstyled:g,vars:p,varsResolver:m});return(0,r.jsxs)(c.x,{variant:_,mod:[{block:w,circle:C},E],...N("root",{variant:_}),ref:o,...S,children:[j&&(0,r.jsx)("span",{...N("section"),"data-position":"left",children:j}),(0,r.jsx)("span",{...N("label"),children:k}),v&&(0,r.jsx)("span",{...N("section"),"data-position":"right",children:v})]})});g.classes=h,g.displayName="@mantine/core/Badge"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=41768)}),_N_E=e.O()}]);