"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Coding guidelines"},l=void 0,c={unversionedId:"contributing/coding-guidelines",id:"contributing/coding-guidelines",isDocsHomePage:!1,title:"Coding guidelines",description:"Keep functions short",source:"@site/docs/contributing/03-coding-guidelines.md",sourceDirName:"contributing",slug:"/contributing/coding-guidelines",permalink:"/home/docs/contributing/coding-guidelines",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Coding guidelines"},sidebar:"contributing",previous:{title:"Git guidelines",permalink:"/home/docs/contributing/git-guidelines"},next:{title:"Documentation guidelines",permalink:"/home/docs/contributing/documentation-guidelines"}},u=[{value:"Keep functions short",id:"keep-functions-short",children:[]},{value:"Prefer free functions",id:"prefer-free-functions",children:[]},{value:"Name with empathy",id:"name-with-empathy",children:[]},{value:"Refer to the C++ Core Guidelines",id:"refer-to-the-c-core-guidelines",children:[]},{value:"Write debug checks",id:"write-debug-checks",children:[]},{value:"Coding style",id:"coding-style",children:[{value:"Snake Case",id:"snake-case",children:[]},{value:"Member variables",id:"member-variables",children:[]},{value:"Formatting",id:"formatting",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keep-functions-short"},"Keep functions short"),(0,o.kt)("p",null,"This helps a lot with code readability. See ",(0,o.kt)("a",{parentName:"p",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rf-single"},"here")," what the ",(0,o.kt)("em",{parentName:"p"},"C++ Core Guidelines")," have to say about it."),(0,o.kt)("h2",{id:"prefer-free-functions"},"Prefer free functions"),(0,o.kt)("p",null,"They help a lot with decoupling, code reuse, testing, ",(0,o.kt)("em",{parentName:"p"},"etc.")),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/WLDT1lDOsb4"},"this great conference")," about why you should love free functions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," This doesn't mean that member functions are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a member function is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function."),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Cpp-And-Dev-Practices/docs/lessons/free-functions"},(0,o.kt)("em",{parentName:"a"},"Learn C++ and Dev Practices")),"."),(0,o.kt)("h2",{id:"name-with-empathy"},"Name with empathy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Naming is important (and hard)"),", so please be mindful when you choose a name. Be explicit, ",(0,o.kt)("strong",{parentName:"p"},"don't be too afraid of long names"),". And most importantly : make sure the name describes what the thing is, nothing more, nothing less.\nAlso, ",(0,o.kt)("strong",{parentName:"p"},"don't hesitate to rename")," as soon as you find a better name to describe what your thing actually is or does. (And by the way, ",(0,o.kt)("em",{parentName:"p"},"right click -> Rename")," is an amazing feature)."),(0,o.kt)("p",null,"The ideal name is very concise and allows readers to instantly understand what the thing is / does.\nIf you can't find such a name, then the second best thing is a long name that still perfectly describes the object.\nOnly misleading names are bad and not tolerated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/FyCYva9DhsI?t=2494"},"About naming")," (watch from 41:34 to 51:30 if you want to laugh a lot) (By the way, watch the whole conference it's great)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/MBRoCdtZOYg"},"A whole conference by Kate Gregory")),(0,o.kt)("h2",{id:"refer-to-the-c-core-guidelines"},"Refer to the ",(0,o.kt)("a",{parentName:"h2",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines"},"C++ Core Guidelines")),(0,o.kt)("p",null,"There are a lot of great people out there that have gathered a big list of great ideas and best practices."),(0,o.kt)("p",null,"You can start by watching this amazing conference:"),(0,o.kt)("iframe",{width:"880",height:"495",src:"https://www.youtube.com/embed/XkDEzfpdcSg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"write-debug-checks"},"Write debug checks"),(0,o.kt)("p",null,"If there is some invariant that must be verified, add debug checks to make sure users of your code don't mess up!\nYou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"assert()")," in the simpler cases, but sometimes you will need to add variables to keep track of some state. In that case, wrap the debug code in a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#if defined(DEBUG)\n// . . .\n#endif\n")),(0,o.kt)("p",null,"block so that it doesn't impact release build performance."),(0,o.kt)("p",null,"An example would be to make sure an initialization function is called once, and only once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass {\npublic:\n    void initialize() {\n#if defined(DEBUG)\n        assert(!_is_initialized);\n        _is_initialized = true;\n#endif\n        // . . .\n    }\n\n    void use_my_class() {\n        assert(_is_initialized);\n        // . . .\n    }\n\nprivate:\n#if defined(DEBUG)\n    bool _is_initialized = false;\n#endif\n};\n")),(0,o.kt)("h2",{id:"coding-style"},"Coding style"),(0,o.kt)("p",null,"Coding styles don't matter, and that's why we simply have to choose one and stick to it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"There is no right answer")," to where you should put your curly braces, or whether you shoud use camelCase or snake_case. If there was, all the developers of the world would have agreed on it years ago."),(0,o.kt)("h3",{id:"snake-case"},"Snake Case"),(0,o.kt)("p",null,"I used to use camelCase, and then started to learn Rust which forces you to use snake_case. And well, after a short period of adaptation I started really enjoying snake case because the separation between words is clearer, and therefore long names are easier to read."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("em",{parentName:"li"},"snake_case")," for variables and functions."),(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("em",{parentName:"li"},"PascalCase")," for types, namespaces and enum values.")),(0,o.kt)("h3",{id:"member-variables"},"Member variables"),(0,o.kt)("p",null,"They are prefixed with an underscore like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass {\n    // ...\nprivate:\n    float _my_member_variable = 0.f;\n};\n")),(0,o.kt)("h3",{id:"formatting"},"Formatting"),(0,o.kt)("p",null,"We use the famous ",(0,o.kt)("inlineCode",{parentName:"p"},"clang-format")," as our formatting tool. You will need to install it (on Windows this happens through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Installer"),": modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Build Tools")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"C++ Clang Tools for Windows"),")."),(0,o.kt)("p",null,"Then for VS Code I recommended this extension: ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=xaver.clang-format"},"xaver.clang-format")," ; and you should enable ",(0,o.kt)("inlineCode",{parentName:"p"},"Format on Save")," in your VS Code settings. After that it should just work."),(0,o.kt)("p",null,"Note that in some very specific cases you can disable ",(0,o.kt)("inlineCode",{parentName:"p"},"clang-format")," locally to use some non-standard formatting, using these special comments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// clang-format off\nvoid on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }\nvoid on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }\nvoid on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }\nvoid on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }\n// clang-format on\n")))}p.isMDXComponent=!0}}]);