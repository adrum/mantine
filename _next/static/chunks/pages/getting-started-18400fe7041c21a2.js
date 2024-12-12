(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46651],{73375:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started",function(){return t(82440)}])},82440:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(52322),s=t(45392),r=t(39629),o=t(31079),a=t(84765),c=t(4431),l=t(25071),d=t(15019);let h=(0,l.A)(d.us.GettingStarted);function p(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{InstallScript:t,PackagesInstallation:l,TemplatesList:d}=n;return t||u("InstallScript",!0),l||u("PackagesInstallation",!0),d||u("TemplatesList",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(n.h2,{id:"get-started-with-a-template",children:"Get started with a template"}),"\n",(0,i.jsxs)(n.p,{children:["The easiest way to get started is to use one of the templates.\nAll templates include required dependencies and pre-configured settings.\nSome templates also include additional features like ",(0,i.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"}),",\n",(0,i.jsx)(n.a,{href:"https://storybook.js.org/",children:"Storybook"}),", ",(0,i.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", etc."]}),"\n",(0,i.jsxs)(n.p,{children:["Templates include only ",(0,i.jsx)(n.code,{children:"@mantine/core"})," and ",(0,i.jsx)(n.code,{children:"@mantine/hooks"})," packages,\nif you need additional ",(0,i.jsx)(n.code,{children:"@mantine/*"})," packages, follow installation instructions\nof the package you want to use."]}),"\n",(0,i.jsxs)(n.p,{children:['To get started with a template, open it on GitHub and click "Use this template"\nbutton. In order to use this feature you need to be logged in to your GitHub account.\nIf you are not familiar with GitHub, you can find a detailed instruction on how to\nbootstrap a project from a template ',(0,i.jsx)(n.a,{href:"https://help.mantine.dev/q/templates-usage",children:"in this article"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Templates list:"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h2,{id:"community-templates",children:"Community templates"}),"\n",(0,i.jsxs)(n.p,{children:["Community templates are created and maintained by the community members. These templates\ninclude additional features and third-party integrations. You are welcome\nto share your template with the community by following ",(0,i.jsx)(n.a,{href:"https://help.mantine.dev/q/submit-template",children:"this guide"}),"."]}),"\n",(0,i.jsx)(d,{community:!0}),"\n",(0,i.jsx)(n.h2,{id:"framework-guide",children:"Framework guide"}),"\n",(0,i.jsx)(n.p,{children:"If you want to add Mantine to an existing project or prefer to set up everything manually,\nfollow one of the guides below to get started with Mantine and your preferred framework."}),"\n",(0,i.jsx)(a.b,{primaryCols:{lg:2},secondaryCols:{xl:3},secondaryBreakpoint:"xl"}),"\n",(0,i.jsx)(n.h2,{id:"can-i-use-mantine-with-create-react-app",children:"Can I use Mantine with create-react-app?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://create-react-app.dev/",children:"Create React App"})," was deprecated in early 2023 (",(0,i.jsx)(n.a,{href:"https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741",children:"comment from maintainers"}),").\nIt is not recommended to use it for new projects. It is recommended to use ",(0,i.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})," or ",(0,i.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"})," instead.\nStarting from version 7.0, certain Mantine styling features are no longer officially supported in Create React App.\nIf you still prefer to use Create React App, follow ",(0,i.jsx)(n.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-cra",children:"this guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"get-started-without-framework",children:"Get started without framework"}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,i.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,i.jsx)(t,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"PostCSS without framework"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using a framework that is not officially supported,\nyou may need to configure PostCSS manually. Please refer to the framework's documentation for specific instructions.\nFor instance, if you are using Webpack, it will be necessary to install and set up ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/loaders/postcss-loader/",children:"postcss-loader"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add styles imports to the root of your application. Usually styles are imported\nonce in the root file. For example, if you are using Next.js with pages router,\nyou can import styles in ",(0,i.jsx)(n.code,{children:"_app.tsx"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// core styles are required for all packages\nimport '@mantine/core/styles.css';\n\n// other css files are required only if\n// you are using components from the corresponding package\n// import '@mantine/dates/styles.css';\n// import '@mantine/dropzone/styles.css';\n// import '@mantine/code-highlight/styles.css';\n// ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Wrap your application with ",(0,i.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  /** Put your mantine theme override here */\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your application has server side rendering, add ",(0,i.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"}),"\nto the ",(0,i.jsx)(n.code,{children:"<head />"})," of your application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <html lang="en">\n      <head>\n        <meta charSet="UTF-8" />\n        <meta\n          name="viewport"\n          content="width=device-width, initial-scale=1.0"\n        />\n        <title>My awesome app</title>\n\n        <ColorSchemeScript />\n      </head>\n      <body>{/* Your app here */}</body>\n    </html>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"All set! You can now use Mantine components in your application."}),"\n",(0,i.jsx)(n.h2,{id:"set-up-vs-code",children:"Set up VS Code"}),"\n",(0,i.jsxs)(n.p,{children:["By default, VS Code does not recognize postcss syntax, you need to install\n",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss",children:"PostCSS Intellisense and Highlighting"}),"\nto enable syntax highlighting and suppress variables (",(0,i.jsx)(n.code,{children:"$variable"}),") errors."]}),"\n",(0,i.jsxs)(n.p,{children:["To get CSS variables autocomplete, install ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",children:"CSS Variable Autocomplete extension"}),".\nThen create ",(0,i.jsx)(n.code,{children:".vscode/settings.json"})," file in the root folder of your project with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "cssVariables.lookupFiles": [\n    "**/*.css",\n    "**/*.scss",\n    "**/*.sass",\n    "**/*.less",\n    "node_modules/@mantine/core/styles.css"\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"learn",children:"Learn"}),"\n",(0,i.jsx)(n.p,{children:"Before you jump into the code, it is recommended to learn more about Mantine theming and styling options.\nThe most important documentation pages are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/overview",children:"API overview"})," – overview of the most important Mantine styling and theming features"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"Theme object"})," – learn about available theme properties"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/theming/colors",children:"Colors"})," – learn how to add/replace colors in the theme object"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," – learn how to use CSS modules with Mantine"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," – learn about ",(0,i.jsx)(n.code,{children:"postcss-preset-mantine"})," functions and mixins"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/styles/responsive",children:"Responsive styles"})," – learn how to apply responsive styles to components"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," – learn how to style internal elements of any component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/guides/polymorphic",children:"Polymorphic components"})," – learn how to use polymorphic components to change rendered element"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"get-help",children:"Get help"}),"\n",(0,i.jsx)(c.a,{twitter:!1,cols:{xl:2}}),"\n",(0,i.jsx)(n.h2,{id:"support-mantine",children:"Support Mantine"}),"\n",(0,i.jsxs)(n.p,{children:["All contributions to the projects are welcome and appreciated.\nContribute financially by ",(0,i.jsx)(n.a,{href:"https://opencollective.com/mantinedev",children:"sponsoring the project on OpenCollective"}),".\nYour sponsorship will help us to maintain the project and develop new features."]}),"\n",(0,i.jsx)(r.z,{rightSection:(0,i.jsx)(o.Z,{size:22,color:"var(--mantine-color-red-7)"}),size:"lg",miw:300,justify:"space-between",children:"Sponsor Mantine",variant:"default",radius:"md",component:"a",href:"https://opencollective.com/mantinedev"}),"\n",(0,i.jsx)(n.p,{children:"Other ways to support the project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Contribute financially by ",(0,i.jsx)(n.a,{href:"https://opencollective.com/mantinedev",children:"sponsoring the project on OpenCollective"}),".\nYour sponsorship will help us to maintain the project and develop new features."]}),"\n",(0,i.jsxs)(n.li,{children:["Share your feedback in ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions/categories/feedback",children:"GitHub Discussions"})," –\nwe are always happy to hear your thoughts on how to improve Mantine. Most of the new features and components\nare based on the feedback received from the community."]}),"\n",(0,i.jsxs)(n.li,{children:["Help others on ",(0,i.jsx)(n.a,{href:"https://discord.gg/wbH82zuWMN",children:"Discord"})," and/or ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions",children:"GitHub Discussions"}),". There are usually 10-20 new questions every day,\nyou can help people with their issues and questions. While helping others, you will learn yourself and become\nmore proficient with React and Mantine."]}),"\n",(0,i.jsxs)(n.li,{children:["Give us a code review. You are welcome to explore the ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine",children:"source code"})," of ",(0,i.jsx)(n.code,{children:"@mantine/*"})," packages\nand provide your feedback on how it can be improved. We are always open to new ideas and suggestions."]}),"\n",(0,i.jsxs)(n.li,{children:["Send us some ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/discussions/categories/kind-words",children:"kind words"}),". We usually receive only\nbug reports and feature requests, it is always nice to hear that people enjoy working with Mantine."]}),"\n",(0,i.jsxs)(n.li,{children:["Star the project on ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine",children:"GitHub"}),". It is a small thing that helps us grow and get more\npeople interested in the project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/contribute",children:"Contribute"})," to the Mantine codebase. We welcome all kinds of contributions: if you do not have much\nexperience with React/TypeScript, you can help us improve the documentation to make it more clear and understandable\nfor new developers. If you are an experienced React developer, you can help us with open ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",children:"issues"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If you are using Mantine at work and your company wants to support the project, you can allocate some time\nof your engineers to contribute to Mantine."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mantine-for-figma",children:"Mantine for Figma"}),"\n",(0,i.jsx)(n.p,{children:"Design is not a part of the development process – there are no official\nFigma or Sketch design files. However, there are community-driven projects that provide Figma components\nbased on Mantine. Note that these projects are not maintained by Mantine team, and it is not guaranteed\nthat they are up-to-date with the latest Mantine version."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://www.figma.com/community/file/1293978471602433537",children:["Design files by ",(0,i.jsx)(n.strong,{children:"Ravn"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://www.figma.com/community/file/1067173247578645134",children:["Design files by ",(0,i.jsx)(n.strong,{children:"In The Zone"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://www.figma.com/community/file/1212329956432440320/Mantine-UI-Design-System---v5.10",children:["Design files by ",(0,i.jsx)(n.strong,{children:"Devias"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://www.figma.com/community/file/1294398524808646906/mantine-lean-ui-library-alley-corp-nord",children:["Design files by ",(0,i.jsx)(n.strong,{children:"AlleyCorp Nord"})]})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"@mantine/*"})," packages are distributed under ",(0,i.jsx)(n.a,{href:"https://github.com/mantinedev/mantine/blob/master/LICENSE",children:"MIT"})," license.\nYou can use them in any project, commercial or not, with or without attribution. All ",(0,i.jsx)(n.code,{children:"@mantine/*"})," packages\ndependencies are also distributed under MIT license."]})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(h,{...e,children:(0,i.jsx)(p,{...e})})}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84765:function(e,n,t){"use strict";t.d(n,{b:function(){return x}});var i=t(52322),s=t(26802),r=t(41185),o=t(39097),a=t.n(o),c=t(21243),l=t(59899),d=t(32581),h=t(8582),p=t(40586),m=t(81455),u=t.n(m);function g(e){let{title:n,description:t,logo:s,link:r,type:o,secondaryBreakpoint:m}=e,g=p.mZ[s];return(0,i.jsxs)(l.Z,{withBorder:!0,radius:"lg",padding:"xl",component:a(),href:r,"data-type":o,className:u().root,children:["primary"===o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{className:u().arrow}),(0,i.jsx)(d.C,{color:"red.8",size:"md",className:u().recommended,children:"Recommended"})]}),(0,i.jsx)("div",{className:u().iconWrapper,"data-logo":s,"data-breakpoint":m,children:(0,i.jsx)(g,{className:u().icon,"data-logo":s})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.x,{className:u().title,children:n}),t&&(0,i.jsx)(h.x,{className:u().description,children:t})]})]})}function x(e){let{primaryCols:n={md:2},secondaryCols:t={md:3},secondaryBreakpoint:o="md"}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.M,{cols:n,spacing:"lg",children:[(0,i.jsx)(g,{title:"Vite",description:"Best choice for a single page application (SPA)",logo:"vite",type:"primary",link:"/guides/vite",secondaryBreakpoint:o}),(0,i.jsx)(g,{title:"Next.js",description:"Best choice for an application with SSR",logo:"next",type:"primary",link:"/guides/next",secondaryBreakpoint:o})]}),(0,i.jsxs)(s.M,{cols:t,mt:"lg",spacing:"lg",children:[(0,i.jsx)(g,{title:"Remix",logo:"remix",type:"secondary",link:"/guides/remix",description:"Get started with Remix",secondaryBreakpoint:o}),(0,i.jsx)(g,{title:"Redwood",description:"Get started with RedwoodJS",logo:"redwood",type:"secondary",link:"/guides/redwood",secondaryBreakpoint:o}),(0,i.jsx)(g,{title:"Gatsby",logo:"gatsby",type:"secondary",link:"/guides/gatsby",description:"Get started with Gatsby",secondaryBreakpoint:o})]}),(0,i.jsx)(r.T,{h:"xl"})]})}},4431:function(e,n,t){"use strict";t.d(n,{a:function(){return b}});var i=t(52322),s=t(21243),r=t(40489),o=t(26802),a=t(51878),c=t(77145),l=t(13444),d=t(48158),h=t(10962),p=t(30622),m=t.n(p);let u={discord:(0,i.jsx)(a.D,{size:30,className:m().icon}),twitter:(0,i.jsx)(c.b,{size:30,className:m().icon}),github:(0,i.jsx)(l.E,{size:30,className:m().icon}),mantine:(0,i.jsx)("div",{className:m().icon,children:(0,i.jsx)(d.D,{size:50,type:"mark"})})};function g(e){let{icon:n,title:t,description:o,className:a,...c}=e;return(0,i.jsxs)("a",{className:(0,r.Z)(m().card,a),target:"_blank",rel:"noreferrer",...c,children:[u[n],(0,i.jsx)(s.Z,{size:20,className:m().arrow}),(0,i.jsxs)("div",{className:m().body,children:[(0,i.jsx)("div",{className:m().title,children:t}),(0,i.jsx)("div",{className:m().description,children:o})]})]})}function x(){return(0,i.jsx)(g,{icon:"discord",className:m().discord,href:h.$.discordLink,title:"Chat on Discord",description:"Join a community of 10,000+ developers to ask questions, share feedback and explore upcoming features"})}function f(){return(0,i.jsx)(g,{icon:"github",className:m().github,href:h.$.gitHubLinks.discussions,title:"Start a discussion",description:"Request new features, ask questions and provide feedback with GitHub discussions"})}function j(){return(0,i.jsx)(g,{icon:"mantine",className:m().hc,href:"https://help.mantine.dev",title:"Help center",description:"Explore 30+ frequently asked questions"})}function y(){return(0,i.jsx)(g,{icon:"twitter",className:m().twitter,href:h.$.twitterLink,title:"Follow on X",description:"Get notified about new minor and major releases"})}function b(e){let{discord:n=!0,github:t=!0,twitter:s=!0,helpCenter:r=!0,cols:a={md:2}}=e;return(0,i.jsxs)(o.M,{cols:a,spacing:"lg",children:[n&&(0,i.jsx)(x,{}),t&&(0,i.jsx)(f,{}),r&&(0,i.jsx)(j,{}),s&&(0,i.jsx)(y,{})]})}},81455:function(e){e.exports={root:"GettingStartedCard_root__chXwW",recommended:"GettingStartedCard_recommended__3rsZ8",iconWrapper:"GettingStartedCard_iconWrapper__xmm1w",icon:"GettingStartedCard_icon__6HeLs",title:"GettingStartedCard_title__X5s9D",description:"GettingStartedCard_description__wliKh",arrow:"GettingStartedCard_arrow__ilrnn"}},30622:function(e){e.exports={card:"SocialCards_card__NsQpB",discord:"SocialCards_discord__wSEoF",icon:"SocialCards_icon__24gwI",hc:"SocialCards_hc__2Rd4a",github:"SocialCards_github__9B4CL",twitter:"SocialCards_twitter__qriae",title:"SocialCards_title__zAhN_",description:"SocialCards_description__klWfo",arrow:"SocialCards_arrow__g0lB3"}},21243:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var i=(0,t(73681).Z)("outline","arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},32581:function(e,n,t){"use strict";t.d(n,{C:function(){return u}});var i=t(52322);t(2784);var s=t(91482),r=t(11200),o=t(13588),a=t(38483),c=t(46690),l=t(28559),d=t(33502),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let p={},m=(0,r.Z)((e,{radius:n,color:t,gradient:i,variant:r,size:a,autoContrast:c})=>{let l=e.variantColorResolver({color:t||e.primaryColor,theme:e,gradient:i,variant:r||"filled",autoContrast:c});return{root:{"--badge-height":(0,s.ap)(a,"badge-height"),"--badge-padding-x":(0,s.ap)(a,"badge-padding-x"),"--badge-fz":(0,s.ap)(a,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,s.H5)(n),"--badge-bg":t||r?l.background:void 0,"--badge-color":t||r?l.color:void 0,"--badge-bd":t||r?l.border:void 0,"--badge-dot-color":"dot"===r?(0,o.p)(t,e):void 0}}}),u=(0,d.b)((e,n)=>{let t=(0,a.w)("Badge",p,e),{classNames:s,className:r,style:o,styles:d,unstyled:u,vars:g,radius:x,color:f,gradient:j,leftSection:y,rightSection:b,children:w,variant:v,fullWidth:k,autoContrast:S,circle:_,mod:C,...N}=t,G=(0,c.y)({name:"Badge",props:t,classes:h,className:r,style:o,classNames:s,styles:d,unstyled:u,vars:g,varsResolver:m});return(0,i.jsxs)(l.x,{variant:v,mod:[{block:k,circle:_,"with-right-section":!!b,"with-left-section":!!y},C],...G("root",{variant:v}),ref:n,...N,children:[y&&(0,i.jsx)("span",{...G("section"),"data-position":"left",children:y}),(0,i.jsx)("span",{...G("label"),children:w}),b&&(0,i.jsx)("span",{...G("section"),"data-position":"right",children:b})]})});u.classes=h,u.displayName="@mantine/core/Badge"},59899:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var i=t(52322),s=t(2784),r=t(91482),o=t(11200),a=t(38483),c=t(46690),l=t(33502),d=t(1198);let[h,p]=(0,t(89106).R)("Card component was not found in tree");var m=t(28559),u={root:"m_e615b15f",section:"m_599a2148"};let g={},x=(0,l.b)((e,n)=>{let{classNames:t,className:s,style:r,styles:o,vars:c,withBorder:l,inheritPadding:d,mod:h,...u}=(0,a.w)("CardSection",g,e),x=p();return(0,i.jsx)(m.x,{ref:n,mod:[{"with-border":l,"inherit-padding":d},h],...x.getStyles("section",{className:s,style:r,styles:o,classNames:t}),...u})});x.classes=u,x.displayName="@mantine/core/CardSection";let f={},j=(0,o.Z)((e,{padding:n})=>({root:{"--card-padding":(0,r.bG)(n)}})),y=(0,l.b)((e,n)=>{let t=(0,a.w)("Card",f,e),{classNames:r,className:o,style:l,styles:p,unstyled:m,vars:g,children:y,padding:b,...w}=t,v=(0,c.y)({name:"Card",props:t,classes:u,className:o,style:l,classNames:r,styles:p,unstyled:m,vars:g,varsResolver:j}),k=s.Children.toArray(y),S=k.map((e,n)=>"object"==typeof e&&e&&"type"in e&&e.type===x?(0,s.cloneElement)(e,{"data-first-section":0===n||void 0,"data-last-section":n===k.length-1||void 0}):e);return(0,i.jsx)(h,{value:{getStyles:v},children:(0,i.jsx)(d.X,{ref:n,unstyled:m,...v("root"),...w,children:S})})});y.classes=u,y.displayName="@mantine/core/Card",y.Section=x},26802:function(e,n,t){"use strict";t.d(n,{M:function(){return v}});var i=t(52322);t(2784);var s=t(38483),r=t(46690),o=t(12063),a=t(28559),c=t(82027),l=t(98446),d=t(65744),h=t(40580),p=t(91482),m=t(54541),u=t(32100),g=t(68755),x=t(9437);function f({spacing:e,verticalSpacing:n,cols:t,selector:s}){let r=(0,g.rZ)(),o=void 0===n?e:n,a=(0,h.L)({"--sg-spacing-x":(0,p.bG)((0,u.v)(e)),"--sg-spacing-y":(0,p.bG)((0,u.v)(o)),"--sg-cols":u.v(t)?.toString()}),c=(0,l.X)(r.breakpoints).reduce((n,i)=>(n[i]||(n[i]={}),"object"==typeof e&&void 0!==e[i]&&(n[i]["--sg-spacing-x"]=(0,p.bG)(e[i])),"object"==typeof o&&void 0!==o[i]&&(n[i]["--sg-spacing-y"]=(0,p.bG)(o[i])),"object"==typeof t&&void 0!==t[i]&&(n[i]["--sg-cols"]=t[i]),n),{}),d=(0,m.I)((0,l.X)(c),r.breakpoints).filter(e=>(0,l.X)(c[e.value]).length>0).map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:c[e.value]}));return(0,i.jsx)(x.f,{styles:a,media:d,selector:s})}function j(e){return"object"==typeof e&&null!==e?(0,l.X)(e):[]}function y({spacing:e,verticalSpacing:n,cols:t,selector:s}){let r=void 0===n?e:n,o=(0,h.L)({"--sg-spacing-x":(0,p.bG)((0,u.v)(e)),"--sg-spacing-y":(0,p.bG)((0,u.v)(r)),"--sg-cols":u.v(t)?.toString()}),a=function({spacing:e,verticalSpacing:n,cols:t}){return Array.from(new Set([...j(e),...j(n),...j(t)])).sort((e,n)=>(0,d.px)(e)-(0,d.px)(n))}({spacing:e,verticalSpacing:n,cols:t}),c=a.reduce((n,i)=>(n[i]||(n[i]={}),"object"==typeof e&&void 0!==e[i]&&(n[i]["--sg-spacing-x"]=(0,p.bG)(e[i])),"object"==typeof r&&void 0!==r[i]&&(n[i]["--sg-spacing-y"]=(0,p.bG)(r[i])),"object"==typeof t&&void 0!==t[i]&&(n[i]["--sg-cols"]=t[i]),n),{}),l=a.map(e=>({query:`simple-grid (min-width: ${e})`,styles:c[e]}));return(0,i.jsx)(x.f,{styles:o,container:l,selector:s})}var b={container:"m_925c2d2c",root:"m_2415a157"};let w={cols:1,spacing:"md",type:"media"},v=(0,c.d5)((e,n)=>{let t=(0,s.w)("SimpleGrid",w,e),{classNames:c,className:l,style:d,styles:h,unstyled:p,vars:m,cols:u,verticalSpacing:g,spacing:x,type:j,...v}=t,k=(0,r.y)({name:"SimpleGrid",classes:b,props:t,className:l,style:d,classNames:c,styles:h,unstyled:p,vars:m}),S=(0,o.m)();return"container"===j?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...t,selector:`.${S}`}),(0,i.jsx)("div",{...k("container"),children:(0,i.jsx)(a.x,{ref:n,...k("root",{className:S}),...v})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{...t,selector:`.${S}`}),(0,i.jsx)(a.x,{ref:n,...k("root",{className:S}),...v})]})});v.classes=b,v.displayName="@mantine/core/SimpleGrid"},41185:function(e,n,t){"use strict";t.d(n,{T:function(){return c}});var i=t(52322);t(2784);var s=t(38483),r=t(28559),o=t(82027);let a={},c=(0,o.d5)((e,n)=>{let{w:t,h:o,miw:c,mih:l,...d}=(0,s.w)("Space",a,e);return(0,i.jsx)(r.x,{ref:n,...d,w:t,miw:c??t,h:o,mih:l??o})});c.displayName="@mantine/core/Space"},32100:function(e,n,t){"use strict";function i(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}t.d(n,{v:function(){return i}})},99070:function(e,n,t){"use strict";t.d(n,{o:function(){return s}});var i=t(65744);function s(e,n){return e in n?(0,i.px)(n[e]):(0,i.px)(e)}},54541:function(e,n,t){"use strict";t.d(n,{I:function(){return s}});var i=t(99070);function s(e,n){let t=e.map(e=>({value:e,px:(0,i.o)(e,n)}));return t.sort((e,n)=>e.px-n.px),t}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=73375)}),_N_E=e.O()}]);