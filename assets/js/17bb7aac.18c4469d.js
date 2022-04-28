"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[5898],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Details you need to know"},u=void 0,p={unversionedId:"tutorials/details",id:"tutorials/details",title:"Details you need to know",description:"imgui.ini",source:"@site/docs/tutorials/03-details.md",sourceDirName:"tutorials",slug:"/tutorials/details",permalink:"/tutorials/details",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Details you need to know"},sidebar:"tutorials",previous:{title:"Compiling your first project",permalink:"/tutorials/building"},next:{title:"WIP",permalink:"/tutorials/WIP"}},s=[{value:"imgui.ini",id:"imguiini",children:[],level:2},{value:"Logging",id:"logging",children:[],level:2},{value:"OpenGL",id:"opengl",children:[{value:"GLDebug",id:"gldebug",children:[],level:3},{value:"Modern Debugging",id:"modern-debugging",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"imguiini"},"imgui.ini"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imgui.ini")," file stores the position and size of our ImGui windows. It is nice to have it on the repo so that anyone cloning it will get a nice UI layout from the get go."),(0,i.kt)("p",null,"But you might want to do "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git update-index --assume-unchanged imgui.ini\n")),(0,i.kt)("p",null,"to ignore it from your commits. (It does change every time you move a window in your app, so basically it would be present in every commit)."),(0,i.kt)("p",null,"You should only commit it once in a while, when new windows are added for example."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"To log to the console, use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Log::info("You can use a variable, or a string like this one, which can be templated with some curly braces like so : {} {}", variable1ThatWillGoInTheCurlyBraces, variable2);\nLog::warn("same parameters");\nLog::error("same parameters");\n')),(0,i.kt)("p",null,"The difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," outputs green text, ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," is yellow and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," is red.\nAlso, ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," will trigger a breakpoint (you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"error_without_breakpoint")," instead if you don't want that behaviour)."),(0,i.kt)("p",null,"Note that those logs will be removed in release builds.\nIf you want to display a message to the end user, use ",(0,i.kt)("inlineCode",{parentName:"p"},"Log::ToUser")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," (you will need to include ",(0,i.kt)("inlineCode",{parentName:"p"},"<Cool/Log/ToUser.h> "),")."),(0,i.kt)("h2",{id:"opengl"},"OpenGL"),(0,i.kt)("h3",{id:"gldebug"},"GLDebug"),(0,i.kt)("p",null,"Always wrap your OpenGL calls in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GLDebug(...)")," macro. It will add debug checks even if your computer doesn't support modern OpenGL debugging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"GLDebug(GLuint program_id = glCreateProgram());\nGLDebug(glLinkProgram(program_id));\nGLDebug(glValidateProgram(program_id));\n")),(0,i.kt)("h3",{id:"modern-debugging"},"Modern Debugging"),(0,i.kt)("p",null,"Modern debugging requires OpenGL 4.3 or later. If you have it then it will happen automatically."),(0,i.kt)("p",null,"You can ignore some warnings and control the look of the messages in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Window")," module, under ",(0,i.kt)("inlineCode",{parentName:"p"},"internal/GLDebugCallback.h"),"."))}d.isMDXComponent=!0}}]);