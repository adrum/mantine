(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2971],{71153:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hotkeys",function(){return o(16356)}])},16356:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return x}});var t=o(52322),s=o(45392),r=o(2784),l=o(74770),i=o(78297),c=o(34192),d=o(60048);let a={type:"code",code:`
import { useState } from 'react';
import { getHotkeyHandler } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press \u2318+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`,component:function(){(0,i.A)([["alt+mod+shift+X",()=>{window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]]);let[e,n]=(0,r.useState)("I've just used a hotkey to send a message");return(0,t.jsx)(l.o,{placeholder:"Your message",label:"Press ⌘+Enter or Ctrl+Enter when input has focus to send message",value:e,onChange:e=>n(e.target.value),onKeyDown:(0,c.yr)([["mod+Enter",()=>d.N9.show({title:"Your message",message:e})],["mod+S",()=>d.N9.show({title:"You saved",color:"teal",message:e})]])})}};var h=o(25071),u=o(15019);let m=(0,h.A)(u.us.useHotkeys);function g(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-hotkeys"})," accepts as its first argument an array of hotkeys and handler tuples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hotkey"})," - hotkey string, for example ",(0,t.jsx)(n.code,{children:"ctrl+E"}),", ",(0,t.jsx)(n.code,{children:"shift+alt+L"}),", ",(0,t.jsx)(n.code,{children:"mod+S"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"})," - event handler called when a given combination was pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"})," - object with extra options for hotkey handler"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useHotkeys } from '@mantine/hooks';\n\nfunction Demo() {\n  // ctrl + J and ⌘ + J to toggle color scheme\n  // ctrl + K and ⌘ + K to search\n  useHotkeys([\n    ['mod+J', () => console.log('Toggle color scheme')],\n    ['ctrl+K', () => console.log('Trigger search')],\n    ['alt+mod+shift+X', () => console.log('Rick roll')],\n  ]);\n\n  return null;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The second argument is a list of HTML tags on which hotkeys should be ignored.\nBy default, hotkeys events are ignored if the focus is in ",(0,t.jsx)(n.code,{children:"input"}),", ",(0,t.jsx)(n.code,{children:"textarea"})," and ",(0,t.jsx)(n.code,{children:"select"})," elements."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useHotkeys } from '@mantine/hooks';\n\nfunction Demo() {\n  // Ignore hotkeys events only when focus is in input and textarea elements\n  useHotkeys(\n    [['ctrl+K', () => console.log('Trigger search')]],\n    ['INPUT', 'TEXTAREA']\n  );\n\n  // Empty array – do not ignore hotkeys events on any element\n  useHotkeys([['ctrl+K', () => console.log('Trigger search')]], []);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"targeting-elements",children:"Targeting elements"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-hotkeys"})," hook can work only with document element, you will need to create your own event listener\nif you need to support other elements. For this purpose, ",(0,t.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,t.jsx)(n.code,{children:"getHotkeyHandler"})," function\nwhich should be used with ",(0,t.jsx)(n.code,{children:"onKeyDown"}),":"]}),"\n",(0,t.jsx)(o,{data:a}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"getHotkeyHandler"})," you can also add events to any dom node using ",(0,t.jsx)(n.code,{children:".addEventListener"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { getHotkeyHandler } from '@mantine/hooks';\n\ndocument.body.addEventListener(\n  'keydown',\n  getHotkeyHandler([\n    ['mod+Enter', () => console.log('Submit')],\n    ['mod+S', () => console.log('Save')],\n  ])\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"supported-formats",children:"Supported formats"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mod+S"})," – detects ",(0,t.jsx)(n.code,{children:"⌘+S"})," on macOS and ",(0,t.jsx)(n.code,{children:"Ctrl+S"})," on Windows"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ctrl+shift+X"})," – handles multiple modifiers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alt + shift + L"})," – you can use whitespace inside hotkey"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ArrowLeft"})," – you can use special keys using ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"this format"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/hooks"})," exports ",(0,t.jsx)(n.code,{children:"HotkeyItemOptions"})," and ",(0,t.jsx)(n.code,{children:"HotkeyItem"})," types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface HotkeyItemOptions {\n  preventDefault?: boolean;\n}\n\ntype HotkeyItem = [\n  string,\n  (event: KeyboardEvent) => void,\n  HotkeyItemOptions?,\n];\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HotkeyItem"})," type can be used to create hotkey items outside of ",(0,t.jsx)(n.code,{children:"use-hotkeys"})," hook:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { HotkeyItem, useHotkeys } from '@mantine/hooks';\n\nconst hotkeys: HotkeyItem[] = [\n  [\n    'mod+J',\n    () => console.log('Toggle color scheme'),\n    { preventDefault: false },\n  ],\n  ['ctrl+K', () => console.log('Trigger search')],\n  ['alt+mod+shift+X', () => console.log('Rick roll')],\n];\n\nuseHotkeys(hotkeys);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useHotkeys(\n  hotkeys: HotkeyItem[],\n  tagsToIgnore?: string[],\n  triggerOnContentEditable?: boolean\n): void;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(g,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=71153)}),_N_E=e.O()}]);