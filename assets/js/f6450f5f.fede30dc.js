"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[2830],{3905:function(e,o,t){t.d(o,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},l=function(e){var o=p(e.components);return n.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:o},l),{},{components:t})):n.createElement(d,i({ref:o},l))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6388:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return m}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"How do open source software organize themself ?",authors:"yvan"},c=void 0,p={permalink:"/blog/gouvernance-model-of-open-softwares",source:"@site/blog/gouvernance-model-of-open-softwares.md",title:"How do open source software organize themself ?",description:"Cool and CoolLab are open source softwares (and even free software, see this article for more informations INSERER LIEN ARTICLE ) meaning their source code - how the program is written in binary or in programming languages - is available for anyone having a copy of the software. In consequence, any willing developers can use, modify and redistribute the software. Thus, programmers having access to the source code can change a program by adding to it, changing it or fixing parts that are non working properly. Oftenly, open source software comes with a specific license, specifying precisely to what extent these modifications or redistributions can be done - for instance, one may prohibit a commercial use of their products, or someone copying a version of their code to sell it online.",date:"2022-08-02T18:47:15.516Z",formattedDate:"August 2, 2022",tags:[],readingTime:4.8,truncated:!0,authors:[{name:"Yvan Smorag",key:"yvan"}],frontMatter:{title:"How do open source software organize themself ?",authors:"yvan"},nextItem:{title:"Introduction to raymarching",permalink:"/blog/2022/07/04/an-introduction-to-raymarching"}},l={authorsImageUrls:[void 0]},u=[],f={toc:u};function m(e){var o=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cool and CoolLab are open source softwares (and even free software, see this ",(0,a.kt)("strong",{parentName:"p"},"article")," for more informations ",(0,a.kt)("strong",{parentName:"p"},"INSERER LIEN ARTICLE")," ) meaning their source code - how the program is written in binary or in programming languages - is available for anyone ",(0,a.kt)("strong",{parentName:"p"},"having a copy of the software"),". In consequence, any willing developers can use, modify and redistribute the software. Thus, programmers having access to the source code can change a program by adding to it, changing it or fixing parts that are non working properly. Oftenly, open source software comes with a specific license, specifying precisely to what extent these modifications or redistributions can be done - for instance, one may prohibit a commercial use of their products, or someone copying a version of their code to sell it online. ",(0,a.kt)("br",null),"\nIn our case, CoolLab is provided with a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool/blob/main/LICENSE"},"MIT license"),", allowing any modification, use or selling, without charge to anyone having a copy of the software - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool"},"freely available on GitHub"),". Whatever you wanna do, you can.  "),(0,a.kt)("p",null,"Open source software often begins that way : a single person, or a bunch of developers wants to make a specific program. They begin to develop it, and end up proposing it to anyone. Little by little, a community forms itself around the project, and people that were not involved in the project at the beginning start to write some code, new features, propose new designs and ideas, fix bugs : open software is the result of communities of developers. Unlike to companies though, communities are horizontal, everyone can contribute (with a peer-review system of course), and there is, no president, no ",(0,a.kt)("strong",{parentName:"p"},"appointed")," authority to resolve conflicts, lead development choices, and no communication hierarchy, more and more necessary as the project rises in size, and so in possibilities. How do you handle this situation ? How do you organize an open source community based work ? \\EST CE QUE CE NE SERAIT PAS L'INTRO DE CETTE ARTICLE ?\\"))}m.isMDXComponent=!0}}]);