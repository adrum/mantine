(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10102],{67331:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/alert",function(){return i(62795)}])},62795:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return C}});var n=i(52322),r=i(45392),o=i(48671),l=i(66178);i(2784);var a=i(91482),s=i(11200),c=i(38483),u=i(46690),d=i(28559),m=i(82027),p=i(2670),h={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};let f={},b=(0,s.Z)((e,{radius:t,color:i,variant:n,autoContrast:r})=>{let o=e.variantColorResolver({color:i||e.primaryColor,theme:e,variant:n||"light",autoContrast:r});return{root:{"--alert-radius":void 0===t?void 0:(0,a.H5)(t),"--alert-bg":i||n?o.background:void 0,"--alert-color":o.color,"--alert-bd":i||n?o.border:void 0}}}),x=(0,m.d)((e,t)=>{let i=(0,c.w)("Alert",f,e),{classNames:r,className:o,style:a,styles:s,unstyled:m,vars:x,radius:y,color:j,title:v,children:_,id:g,icon:A,withCloseButton:w,onClose:V,closeButtonLabel:k,variant:C,autoContrast:B,...E}=i,I=(0,u.y)({name:"Alert",classes:h,props:i,className:o,style:a,classNames:r,styles:s,unstyled:m,vars:x,varsResolver:b}),q=(0,l.M)(g),N=v&&`${q}-title`||void 0,L=`${q}-body`;return(0,n.jsx)(d.x,{id:q,...I("root",{variant:C}),variant:C,ref:t,...E,role:"alert","aria-describedby":L,"aria-labelledby":N,children:(0,n.jsxs)("div",{...I("wrapper"),children:[A&&(0,n.jsx)("div",{...I("icon"),children:A}),(0,n.jsxs)("div",{...I("body"),children:[v&&(0,n.jsx)("div",{...I("title"),"data-with-close-button":w||void 0,children:(0,n.jsx)("span",{id:N,...I("label"),children:v})}),_&&(0,n.jsx)("div",{id:L,...I("message"),"data-variant":C,children:_})]}),w&&(0,n.jsx)(p.P,{...I("closeButton"),onClick:V,variant:"transparent",size:16,iconSize:16,"aria-label":k,unstyled:m})]})})});x.classes=h,x.displayName="@mantine/core/Alert";let y={type:"configurator",component:function(e){return(0,n.jsx)(x,{icon:(0,n.jsx)(o.Z,{}),...e})},code:`
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
`,centered:!0,maxWidth:400,controls:[{...i(50327).d_,initialValue:"light"},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"withCloseButton",initialValue:!1,libraryValue:!1},{type:"string",prop:"title",initialValue:"Alert title",libraryValue:null},{type:"string",prop:"children",initialValue:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",libraryValue:null}]};var j=i(35913),v=i(21710);let _=`
import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton{{props}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
`,g={type:"styles-api",data:v.g,component:function(e){return(0,n.jsx)(x,{title:"Alert title",icon:(0,n.jsx)(j.Z,{}),withCloseButton:!0,...e,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem aut praesentium quibusdam reiciendis."})},centered:!0,maxWidth:440,code:_};var A=i(25071),w=i(15019);let V=(0,A.A)(w.us.Alert);function k(e){let t={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:i,StylesApiSelectors:o}=t;return i||B("Demo",!0),o||B("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:y}),"\n",(0,n.jsx)(o,{component:"Alert"}),"\n",(0,n.jsx)(i,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Root element role set to ",(0,n.jsx)(t.code,{children:"alert"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aria-describedby"})," set to body element id, ",(0,n.jsx)(t.code,{children:"aria-labelledby"})," set to title element id if ",(0,n.jsx)(t.code,{children:"title"})," is provided"]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"closeButtonLabel"})," prop to make close button accessible"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Alert } from '@mantine/core';\n\nfunction Invalid() {\n  // -> not ok\n  return <Alert withCloseButton />;\n}\n\nfunction Valid() {\n  // -> ok\n  return <Alert withCloseButton closeButtonLabel=\"Dismiss\" />;\n}\n\nfunction AlsoValid() {\n  // -> ok, without close button, closeButtonLabel is not needed\n  return <Alert />;\n}\n"})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(V,{...e,children:(0,n.jsx)(k,{...e})})}function B(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},35913:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,i(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},50327:function(e,t,i){"use strict";i.d(t,{cH:function(){return n},d_:function(){return r}});let n={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=67331)}),_N_E=e.O()}]);