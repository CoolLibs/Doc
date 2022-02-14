"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[243],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7599:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),o=["components"],l={title:"Our Roadmap",toc:!0},s=void 0,p={unversionedId:"lab/our-roadmap",id:"lab/our-roadmap",title:"Our Roadmap",description:"Layer system",source:"@site/docs/lab/03-our-roadmap.md",sourceDirName:"lab",slug:"/lab/our-roadmap",permalink:"/lab/our-roadmap",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Our Roadmap",toc:!0},sidebar:"lab",previous:{title:"Our Philosophy",permalink:"/lab/our-philosophy"}},u=[{value:"Layer system",id:"layer-system",children:[],level:2},{value:"Audio",id:"audio",children:[],level:2},{value:"Parameter system",id:"parameter-system",children:[],level:2},{value:"History / Multiple histories in parallel ?",id:"history--multiple-histories-in-parallel-",children:[],level:2},{value:"Simple compute shaders",id:"simple-compute-shaders",children:[],level:2},{value:"Project save",id:"project-save",children:[],level:2},{value:"Post-processing",id:"post-processing",children:[],level:2},{value:"Color spaces ?",id:"color-spaces-",children:[],level:2},{value:"Bezier instead of interpolation for function curves (a.k.a. RGB curves).",id:"bezier-instead-of-interpolation-for-function-curves-aka-rgb-curves",children:[],level:2},{value:"Premultiplied alpha",id:"premultiplied-alpha",children:[],level:2},{value:"Improve timeline navigation / display",id:"improve-timeline-navigation--display",children:[],level:2},{value:"Keybinds remapping (inspired from Django ?)",id:"keybinds-remapping-inspired-from-django-",children:[],level:2},{value:"Abstract GPU  API over OpenGL and Vulkan",id:"abstract-gpu--api-over-opengl-and-vulkan",children:[],level:2},{value:"Scripting",id:"scripting",children:[],level:2},{value:"Node system",id:"node-system",children:[],level:2},{value:"Ray Marching",id:"ray-marching",children:[{value:"Write many nodes",id:"write-many-nodes",children:[],level:3},{value:"Setup a material system",id:"setup-a-material-system",children:[],level:3}],level:2},{value:"Shaders",id:"shaders",children:[{value:"Write libraries of shader functions",id:"write-libraries-of-shader-functions",children:[],level:3},{value:"Good include system / meta language on top of glsl",id:"good-include-system--meta-language-on-top-of-glsl",children:[],level:3},{value:"Glsl Parsing !",id:"glsl-parsing-",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"layer-system"},"Layer system"),(0,n.kt)("p",null,"How do we combine the outputs from our different system / from different instances of the same system.\nDo we use a classic layer structure, or a graph ?"),(0,n.kt)("h2",{id:"audio"},"Audio"),(0,n.kt)("p",null,"Import audio files and play them along the image generation (ideal to produce audio clips). Retrieve data from the audio to drive the images (pitch, bpm, volume etc.)"),(0,n.kt)("p",null,"We can search a lib in this list : ",(0,n.kt)("a",{parentName:"p",href:"https://awesomeopensource.com/projects/audio-library"},"https://awesomeopensource.com/projects/audio-library"),"\nI currently found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mackron/miniaudio"},"https://github.com/mackron/miniaudio")," for audio playback\nand ",(0,n.kt)("a",{parentName:"p",href:"https://www.kfrlib.com/newdocs/index.html"},"https://www.kfrlib.com/newdocs/index.html")," or ",(0,n.kt)("a",{parentName:"p",href:"https://aubio.org/"},"https://aubio.org/")," for audio analysis."),(0,n.kt)("h2",{id:"parameter-system"},"Parameter system"),(0,n.kt)("p",null,"Data usable across the different systems."),(0,n.kt)("h2",{id:"history--multiple-histories-in-parallel-"},"History / Multiple histories in parallel ?"),(0,n.kt)("h2",{id:"simple-compute-shaders"},"Simple compute shaders"),(0,n.kt)("h2",{id:"project-save"},"Project save"),(0,n.kt)("h2",{id:"post-processing"},"Post-processing"),(0,n.kt)("p",null,"Good example: ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Y3d8jR_IwYw?t=4378"},"https://youtu.be/Y3d8jR_IwYw?t=4378"),". Especially the gradient technique is pretty cool."),(0,n.kt)("p",null,"Very good resource about bloom: ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/tI70-HIc5ro"},"https://youtu.be/tI70-HIc5ro")),(0,n.kt)("p",null,"Outlines: ",(0,n.kt)("a",{parentName:"p",href:"https://alexanderameye.github.io/notes/rendering-outlines/"},"https://alexanderameye.github.io/notes/rendering-outlines/")," (the edge detection is particularly good)"),(0,n.kt)("h2",{id:"color-spaces-"},"Color spaces ?"),(0,n.kt)("h2",{id:"bezier-instead-of-interpolation-for-function-curves-aka-rgb-curves"},"Bezier instead of interpolation for function curves (a.k.a. RGB curves)."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool/blob/main/src/Cool/RgbCurve/_README.md"},"Bezier Rgb Curves")),(0,n.kt)("p",null,"And how do we send these curves to the shader ? Do we bake it into a texture ?"),(0,n.kt)("h2",{id:"premultiplied-alpha"},"Premultiplied alpha"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E"},"https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E")),(0,n.kt)("h2",{id:"improve-timeline-navigation--display"},"Improve timeline navigation / display"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Y3d8jR_IwYw?t=5577"},"https://youtu.be/Y3d8jR_IwYw?t=5577")),(0,n.kt)("h2",{id:"keybinds-remapping-inspired-from-django-"},"Keybinds remapping (inspired from Django ?)"),(0,n.kt)("h2",{id:"abstract-gpu--api-over-opengl-and-vulkan"},"Abstract GPU  API over OpenGL and Vulkan"),(0,n.kt)("h2",{id:"scripting"},"Scripting"),(0,n.kt)("p",null,"Everythin that is doable from the UI should be doable via scripting."),(0,n.kt)("p",null,"For the language I really like Typescript, but all options should be considered."),(0,n.kt)("h2",{id:"node-system"},"Node system"),(0,n.kt)("h2",{id:"ray-marching"},"Ray Marching"),(0,n.kt)("h3",{id:"write-many-nodes"},"Write many nodes"),(0,n.kt)("h3",{id:"setup-a-material-system"},"Setup a material system"),(0,n.kt)("h2",{id:"shaders"},"Shaders"),(0,n.kt)("h3",{id:"write-libraries-of-shader-functions"},"Write libraries of shader functions"),(0,n.kt)("h3",{id:"good-include-system--meta-language-on-top-of-glsl"},"Good include system / meta language on top of glsl"),(0,n.kt)("h3",{id:"glsl-parsing-"},"Glsl Parsing !"),(0,n.kt)("p",null,"-> Look at shaderc (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/shaderc"},"https://github.com/google/shaderc"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SXDlZRDjtXg"},"https://www.youtube.com/watch?v=SXDlZRDjtXg"),") or naga (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gfx-rs/naga"},"https://github.com/gfx-rs/naga"),")"))}c.isMDXComponent=!0}}]);