"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[4243],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=u(a),c=i,m=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(m,l(l({ref:t},h),{},{components:a})):n.createElement(m,l({ref:t},h))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7599:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),l=["components"],r={title:"Our Roadmap",toc:!0},s=void 0,u={unversionedId:"lab/our-roadmap",id:"lab/our-roadmap",title:"Our Roadmap",description:"**NB:** For a finer-grain breakdown of all the tasks there is to do, refer to our GitHub Project (and our Trello that we should merge into the GitHub project at some point).",source:"@site/docs/lab/03-our-roadmap.md",sourceDirName:"lab",slug:"/lab/our-roadmap",permalink:"/lab/our-roadmap",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Our Roadmap",toc:!0},sidebar:"lab",previous:{title:"Our Philosophy",permalink:"/lab/our-philosophy"},next:{title:"The Big Architectural Plan",permalink:"/lab/the-big-architectural-plan"}},h=[{value:"\u2705 Done",id:"-done",children:[{value:"Node system",id:"node-system",children:[],level:3},{value:"Ray Marching",id:"ray-marching",children:[],level:3},{value:"Parameter system",id:"parameter-system",children:[],level:3}],level:2},{value:"\ud83d\udea7 Doing",id:"-doing",children:[{value:"Abstract GPU API",id:"abstract-gpu-api",children:[],level:3},{value:"Setup a material system",id:"setup-a-material-system",children:[],level:3},{value:"Write libraries of shader functions",id:"write-libraries-of-shader-functions",children:[],level:3},{value:"Meta language on top of glsl",id:"meta-language-on-top-of-glsl",children:[],level:3}],level:2},{value:"\ud83d\udcaa To Do",id:"-to-do",children:[{value:"History",id:"history",children:[],level:3},{value:"Post-processing",id:"post-processing",children:[],level:3},{value:"Layer system",id:"layer-system",children:[],level:3},{value:"Color palettes",id:"color-palettes",children:[],level:3},{value:"Reaction diffusion",id:"reaction-diffusion",children:[],level:3},{value:"Particle system",id:"particle-system",children:[],level:3},{value:"Audio",id:"audio",children:[],level:3},{value:"Compile for the web",id:"compile-for-the-web",children:[],level:3},{value:"History / Multiple histories in parallel ?",id:"history--multiple-histories-in-parallel-",children:[],level:3},{value:"Lights system",id:"lights-system",children:[],level:3},{value:"Simple compute shaders",id:"simple-compute-shaders",children:[],level:3},{value:"Project save",id:"project-save",children:[],level:3},{value:"Color spaces ?",id:"color-spaces-",children:[],level:3},{value:"Bezier instead of interpolation for function curves (a.k.a. RGB curves).",id:"bezier-instead-of-interpolation-for-function-curves-aka-rgb-curves",children:[],level:3},{value:"Premultiplied alpha",id:"premultiplied-alpha",children:[],level:3},{value:"Improve timeline navigation / display",id:"improve-timeline-navigation--display",children:[],level:3},{value:"Keybinds remapping (inspired from Django ?)",id:"keybinds-remapping-inspired-from-django-",children:[],level:3},{value:"Scripting",id:"scripting",children:[],level:3}],level:2},{value:"The big plan: reactive systems, caching and modules compositing",id:"the-big-plan-reactive-systems-caching-and-modules-compositing",children:[{value:"The command pattern",id:"the-command-pattern",children:[],level:3},{value:"Object IDs and Databases",id:"object-ids-and-databases",children:[{value:"Shared objects",id:"shared-objects",children:[],level:4},{value:"List of dependencies",id:"list-of-dependencies",children:[],level:4}],level:3},{value:"Rendering thread",id:"rendering-thread",children:[],level:3},{value:"Auto Updating Render targets",id:"auto-updating-render-targets",children:[],level:3}],level:2}],d={toc:h};function p(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"NB:"))," For a finer-grain breakdown of all the tasks there is to do, refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Lab/projects/1"},"GitHub Project")," (and our ",(0,o.kt)("a",{parentName:"p",href:"https://trello.com/b/PHSJwnta/cool-lab"},"Trello")," that we should merge into the GitHub project at some point)."),(0,o.kt)("h2",{id:"-done"},"\u2705 Done"),(0,o.kt)("h3",{id:"node-system"},"Node system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate a library to create node graphs and use it to create scenes."),(0,o.kt)("li",{parentName:"ul"},"Make it easy for any user to add new nodes.")),(0,o.kt)("h3",{id:"ray-marching"},"Ray Marching"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate a shader that contains the sdf of the scene (described by the node graph)."),(0,o.kt)("li",{parentName:"ul"},"Render that scene within the same shader."),(0,o.kt)("li",{parentName:"ul"},"Implement many cool rendering effects that are allowed by Ray Marching.")),(0,o.kt)("h3",{id:"parameter-system"},"Parameter system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Control them through the UI"),(0,o.kt)("li",{parentName:"ul"},"Save changes to them in a history"),(0,o.kt)("li",{parentName:"ul"},"Be able to create presets")),(0,o.kt)("h2",{id:"-doing"},"\ud83d\udea7 Doing"),(0,o.kt)("h3",{id:"abstract-gpu-api"},"Abstract GPU API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create generic classes that can be implemented both with OpenGL and Vulkan to abstract those away and allow users to write cross-platform code."),(0,o.kt)("li",{parentName:"ul"},"Add even more APIs, like WebGPU."),(0,o.kt)("li",{parentName:"ul"},"Add a type-safe C++ wrapper around OpenGL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CoolLibs/glpp"},"GL++"),".")),(0,o.kt)("h3",{id:"setup-a-material-system"},"Setup a material system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have PBR materials and a UI for them."),(0,o.kt)("li",{parentName:"ul"},"Attach those materials to objects in the is0 scene.")),(0,o.kt)("h3",{id:"write-libraries-of-shader-functions"},"Write libraries of shader functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group common functions in libraries:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Camera and 3D geometry"),(0,o.kt)("li",{parentName:"ul"},"Random"),(0,o.kt)("li",{parentName:"ul"},"PBR calculations"),(0,o.kt)("li",{parentName:"ul"},"Color conversions")))),(0,o.kt)("h3",{id:"meta-language-on-top-of-glsl"},"Meta language on top of glsl"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"#include")," directive."),(0,o.kt)("li",{parentName:"ul"},"Add recursive functions."),(0,o.kt)("li",{parentName:"ul"},"Do generic glsl parsing: look at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/shaderc"},"shaderc")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=SXDlZRDjtXg"},"https://www.youtube.com/watch?v=SXDlZRDjtXg"),") and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gfx-rs/naga"},"naga"),".")),(0,o.kt)("h2",{id:"-to-do"},"\ud83d\udcaa To Do"),(0,o.kt)("h3",{id:"history"},"History"),(0,o.kt)("p",null,"Add an ImGui-based debug tool that allows us the see the full state of the history, as in ",(0,o.kt)("em",{parentName:"p"},"paint.net"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3202).Z,width:"216",height:"245"})),(0,o.kt)("h3",{id:"post-processing"},"Post-processing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here is a ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/Y3d8jR_IwYw?t=4378"},"great inspiration"),". Especially the gradient technique is pretty cool."),(0,o.kt)("li",{parentName:"ul"},"Here is a very good resource about ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/tI70-HIc5ro"},"bloom"),"."),(0,o.kt)("li",{parentName:"ul"},"Here is a discussion of ",(0,o.kt)("a",{parentName:"li",href:"https://alexanderameye.github.io/notes/rendering-outlines/"},"outlines effects")," (the edge-detection one is particularly good)."),(0,o.kt)("li",{parentName:"ul"},"Edge detection"),(0,o.kt)("li",{parentName:"ul"},"Delaunay triangulation (on do we give it input data? Because we mostly work with images)"),(0,o.kt)("li",{parentName:"ul"},"non-affine transformations (like ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/hSsRcpIsunk?t=167"},"circle inversion")," (might require that the input image is much higher res than the output one, because we might scale some parts of the input a lot. Ideally we could query on the fly the color at a given position instead of storing in images of given size => maybe we don't pass images around, but functions that ouput color (and they can have caching in the form of images) OMG: blur (and every effect based on the niehgboorhood of pixels) is wrong on the edges of an image because we lack the information of what is outside the image. Using functions that can give you color in any point in space would fix that. What about performance? We might really need the caching in form of an image. We could use ",(0,o.kt)("inlineCode",{parentName:"li"},"CachingStrategie"),"s: each layer can ask the input one for an image of a given size: for example blur could ask the input to generate an image slightly larger so that blur will have all the information it needs on the edges) Its not that big of a deal to store unused pixels (in case when a layer needs info from the input in a region that is not rectanglular, like circle inversion) as long as the images are not too big. We will need two different modes: when previewing we want to optimize for speed, but when exporting we want to minimize the memory we use, so in that case non-rectangular regions could be sampled on the fly instead of beeing cached in a texture. Problem with circle inversion: if the inveting circle is inside the image, it's center maps to infinity, which represents quite a lot of pixels: this is not a problem at all if we sample, but we absolutely cannot store this in a cache image)."),(0,o.kt)("li",{parentName:"ul"},"circle inversion is very cool because it preserves circle, so you can create an amazing image from a boring one that contains circles"),(0,o.kt)("li",{parentName:"ul"},"post-processing is actually equivalent to the compositing system")),(0,o.kt)("h3",{id:"layer-system"},"Layer system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Think about the design: How do we combine the outputs from our different systems or from different instances of the same system.\nDo we use a classic layer structure, or a graph?")),(0,o.kt)("p",null,"One module = something that takes inputs and gives us outputs (often images (color, depth, mask (\\approx_equal alpha) etc.), or even cubemaps (environment map for a 3D module)). E.g. : is0, the color grader, the depth of field effect etc.\nInputs can also be a camera for example. So that we can decide if the different modules share the same 3D camera or not."),(0,o.kt)("p",null,"The modules are composited in a graph system: you connect images outputed by one as input to another."),(0,o.kt)("p",null,"Users should be able to create entire modules as plugins that they can add to CoolLab easily."),(0,o.kt)("p",null,"How do we handle modules that are not a direct function of time? For example a physics or particle simulation: to know the state at time ",(0,o.kt)("em",{parentName:"p"},"t")," we need to run all the simulation from time ",(0,o.kt)("em",{parentName:"p"},"0"),". This makes navigating in the timeline complicated. (NB: this is not that big of a problem is the simulation is just a few seconds long and then it cuts to another module on the timeline)"),(0,o.kt)("p",null,"Some modules can just output raw data, and it will be the responsibility of another module to display it nicely.\n=> Composition is at the heart of every good system, especially if we want it to be scalable and offer many possibilities and let the users control it and have freedom in it.\nFor example one module could output a density map (a 0 to 1 image), or a 2D distance field, and another would colorize it: apply a threshold and use only two colors, or anything else we might want."),(0,o.kt)("p",null,"Should we split is0 in two: the generation of the 3D distance field, and the rendering of it? (One problem would be that they would need to communicate through 3D textures (or do they? Can't we output a \"function\" (aka a shader, or a bit of glsl code) from a module? (one problem when exporting functions is that we don't have the ointermediate easily at hand to display it (but we can generate it though))))"),(0,o.kt)("p",null,"Example workflow: stained glass:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"step 1: a shader that generates cells"),(0,o.kt)("li",{parentName:"ul"},"step 2: edge detection (outputs only the edges, we have to add them back manually later => atomic, composable workflow)"),(0,o.kt)("li",{parentName:"ul"},"step 3: make the edges bigger (blur + threshold)"),(0,o.kt)("li",{parentName:"ul"},"step 4: add the edges back onto the cells"),(0,o.kt)("li",{parentName:"ul"},"step 5: bloom")),(0,o.kt)("p",null,"Watch videos from ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/o8QHGEtTynQ"},"this channel")," and see if we can implement them in CoolLab; if we can't, why? Can we add a module that would allow us to do it?"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"timeline")," controls the sequencing of ",(0,o.kt)("em",{parentName:"p"},"scenes"),". Scenes are independent of one another (even though they can share a few variables like color palettes); they don't know about each other's existence and the compositing between them is minimal: just your typical blending options. The fact that we can have multiple scenes is just here to account for the fact that we might want unrelated sequences one after the other in our video. This could be fully done within one scene by masking some modules depending on the time, but the UI is gonna much friendlier to use with a timeline. If you want complex logic between your \"things\", then want you want is to composite ",(0,o.kt)("em",{parentName:"p"},"modules")," inside a ",(0,o.kt)("em",{parentName:"p"},"scene"),". (TODO allow to, in one click, turn seperate scene into just one, by adding a blend controlled by time in the new merged scene)."),(0,o.kt)("p",null,"A scene is a graph that allows to compose ",(0,o.kt)("em",{parentName:"p"},"modules")," together; here there can be a lot of complexity and inter-dependence between modules. They can also be influenced by time. There is both local time (starts at 0 when the scene begins on the timeline) and global time (starts at 0 at the beginning of the timeline); both can be absolute (expressed in seconds), or relative (expressed as a fraction between 0 and 1 the corresponds to the advancement in the scene / timeline).\nA module can be instanciated as many times as you want inside a scene (NB: we might want to have some parameters shared accross some instances of a module, and some other overriden by each instance; how do we do that?)"),(0,o.kt)("p",null,"Maybe a scene could have access to the output of the scene that is below it on the timeline: this would allow to apply post-process to all scenes at once very easily. This is possible because all scenes have the same output: an RGBA image. (NB this means that scenes can control the size of the scene below it, for example to apply blur we need a slightly bigger input image)."),(0,o.kt)("p",null,"Time is nothing too special; outside of the ",(0,o.kt)("em",{parentName:"p"},"timeline")," it shouldn't be a special variable: for example if we want to give a movement to our camera over time, this would be in two steps: create a curve / animation that describes the position of the camera as a fonction of a given value, and then input time as that value. This allows to change it for debugging purposes (replace time by a slider temporarily), or decide if we want to control the camera based on something else (e.g. the position of another object in the scene, or a noise value (which itself could be based on time)). This also allows, from a code perspective, to not depend on the details of the implementation of time, because in the future when we have a timeline there will be different notions of time (local vs gloabl and relative vs absolute)."),(0,o.kt)("p",null,"You can create custom modules by grouping modules together. This solves the problem of sharing some values but not all: you decide what the inputs to your group are: those will be the ones that can be overriden. This also allows to have two scenes that are almost exactly the same except for one or two values: the scene system remains simple, but you still don't need to duplicate anything between similar scenes: you can create a modules group! In CoolLab you need functions (aka modules group) as in any other decent programming language!"),(0,o.kt)("h3",{id:"color-palettes"},"Color palettes"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://iquilezles.org/www/articles/palettes/palettes.htm"},"IQ's color palettes")," everywhere!"),(0,o.kt)("p",null,"Can we generate an IQ palette from a discrete palette with colors hand-picked by an artist?"),(0,o.kt)("h3",{id:"reaction-diffusion"},"Reaction diffusion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/1S39WgB9F60"},"https://youtu.be/1S39WgB9F60")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/1S39WgB9F60"},"https://youtu.be/1S39WgB9F60")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/zp3P78YuZRg"},"https://youtu.be/zp3P78YuZRg")),(0,o.kt)("h3",{id:"particle-system"},"Particle system"),(0,o.kt)("p",null,"2D and 3D."),(0,o.kt)("p",null,"Fully GPU based."),(0,o.kt)("h3",{id:"audio"},"Audio"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import audio files and play them along the image generation (ideal to produce audio clips)."),(0,o.kt)("li",{parentName:"ul"},"Retrieve data from the audio to drive the images (pitch, bpm, volume etc.)."),(0,o.kt)("li",{parentName:"ul"},"We can search a lib in ",(0,o.kt)("a",{parentName:"li",href:"https://awesomeopensource.com/projects/audio-library"},"this list"),". I currently found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mackron/miniaudio"},"miniaudio")," for audio playback and ",(0,o.kt)("a",{parentName:"li",href:"https://www.kfrlib.com/newdocs/index.html"},"kfrlib")," or ",(0,o.kt)("a",{parentName:"li",href:"https://aubio.org/"},"aubio")," for audio analysis.")),(0,o.kt)("h3",{id:"compile-for-the-web"},"Compile for the web"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use emscripten and WebGL (or WebGPU) to be able to run our software in the browser.")),(0,o.kt)("h3",{id:"history--multiple-histories-in-parallel-"},"History / Multiple histories in parallel ?"),(0,o.kt)("h3",{id:"lights-system"},"Lights system"),(0,o.kt)("h3",{id:"simple-compute-shaders"},"Simple compute shaders"),(0,o.kt)("h3",{id:"project-save"},"Project save"),(0,o.kt)("h3",{id:"color-spaces-"},"Color spaces ?"),(0,o.kt)("h3",{id:"bezier-instead-of-interpolation-for-function-curves-aka-rgb-curves"},"Bezier instead of interpolation for function curves (a.k.a. RGB curves)."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool/blob/main/src/Cool/RgbCurve/_README.md"},"Bezier Rgb Curves")),(0,o.kt)("p",null,"And how do we send these curves to the shader ? Do we bake it into a texture ?"),(0,o.kt)("h3",{id:"premultiplied-alpha"},"Premultiplied alpha"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E"},"https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E")),(0,o.kt)("h3",{id:"improve-timeline-navigation--display"},"Improve timeline navigation / display"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Y3d8jR_IwYw?t=5577"},"https://youtu.be/Y3d8jR_IwYw?t=5577")),(0,o.kt)("h3",{id:"keybinds-remapping-inspired-from-django-"},"Keybinds remapping (inspired from Django ?)"),(0,o.kt)("h3",{id:"scripting"},"Scripting"),(0,o.kt)("p",null,"Everythin that is doable from the UI should be doable via scripting."),(0,o.kt)("p",null,"For the language I really like Typescript, but all options should be considered."),(0,o.kt)("h2",{id:"the-big-plan-reactive-systems-caching-and-modules-compositing"},"The big plan: reactive systems, caching and modules compositing"),(0,o.kt)("h3",{id:"the-command-pattern"},"The command pattern"),(0,o.kt)("p",null,"All changes to the state of the app happen through commands: a ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," can be a nempty struct, or it can contain some data. The main app receives all the commands and executes / re-dispatches them accordingly. For example we could have a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Command_SetCamera\n{\n    CameraId id;\n    Camera value;\n};\n")),(0,o.kt)("p",null,"this would ask the application to change the camera with the given ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". Then the application could tell all the modules that were using that camera that it changed and they need to recompute their outputs."),(0,o.kt)("p",null,"The great things about commands are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"anyone can send them easily, and its easy to find in the code who can send what"),(0,o.kt)("li",{parentName:"ul"},"they cantralize all the changes; it allows us to implement an history without any of the modules having to be aware of it. (As well as recording all actions to replay them, or any other system that we could imagine. Modules ask for changes and they don't have to deal with all the complexity that come with it)"),(0,o.kt)("li",{parentName:"ul"},"they are easy to serialize: it is just a POD, a struct with some data, and no pointers (as long as we use IDs to identify our objects)")),(0,o.kt)("h3",{id:"object-ids-and-databases"},"Object IDs and Databases"),(0,o.kt)("p",null,"Objects are identified by UUIDs (Universally Unique Identifiers). This allows us:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to serialize references to objects (which raw C++ pointers and references can't do)"),(0,o.kt)("li",{parentName:"ul"},"Store the app state (aka project file) on GitHub and merge easily (this wouldn't be possible if the IDs were ordered (the first object gets ID 0 and the next 1 and so on. This is a probleme when 2 people work on the project at the same time and both create anobject with ID 0))")),(0,o.kt)("p",null,"Object = ID + value"),(0,o.kt)("p",null,"Everybody reference it through the ID, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," is the single source of truth for the value of the object. Everybody else stores the ID, not the value."),(0,o.kt)("h4",{id:"shared-objects"},"Shared objects"),(0,o.kt)("p",null,"Cameras, parameters, etc."),(0,o.kt)("p",null,"-> Stop the parameters system that is too complicated, and let the history and everything be handled by the commands / database system."),(0,o.kt)("h4",{id:"list-of-dependencies"},"List of dependencies"),(0,o.kt)("p",null,"List of all modules that depend on each object, so that when an object changes we can update all the dependent modules (and the modules that depend on those modules)"),(0,o.kt)("h3",{id:"rendering-thread"},"Rendering thread"),(0,o.kt)("h3",{id:"auto-updating-render-targets"},"Auto Updating Render targets"))}p.isMDXComponent=!0},3202:function(e,t){t.Z="data:image/png;base64,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"}}]);