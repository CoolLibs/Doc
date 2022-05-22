"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[7433],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4559:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Documentation guidelines"},u=void 0,l={unversionedId:"contribute/Programming/documentation-guidelines",id:"contribute/Programming/documentation-guidelines",title:"Documentation guidelines",description:"Write documentation",source:"@site/docs/contribute/01-Programming/04-documentation-guidelines.md",sourceDirName:"contribute/01-Programming",slug:"/contribute/Programming/documentation-guidelines",permalink:"/contribute/Programming/documentation-guidelines",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Documentation guidelines"},sidebar:"contribute",previous:{title:"Coding guidelines",permalink:"/contribute/Programming/coding-guidelines"},next:{title:"Creating a new library",permalink:"/contribute/Programming/creating-a-new-library"}},c=[{value:"Write documentation",id:"write-documentation",children:[],level:2},{value:"Be close to the code",id:"be-close-to-the-code",children:[],level:2},{value:"Be complete",id:"be-complete",children:[],level:2},{value:"Document only when necessary",id:"document-only-when-necessary",children:[],level:2},{value:"Document your design decisions",id:"document-your-design-decisions",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"write-documentation"},"Write documentation"),(0,i.kt)("h2",{id:"be-close-to-the-code"},"Be close to the code"),(0,i.kt)("p",null,"The documentation should be as close as possible to the thing it explains. This means that function and class documentation should be just above their declaration. To document the whole module there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"_README.md")," file inside each folder (see ",(0,i.kt)("a",{parentName:"p",href:"#document-your-design-decisions"},"Document your design decisions")," to know what to put in that readme). "),(0,i.kt)("h2",{id:"be-complete"},"Be complete"),(0,i.kt)("p",null,"Try to be as descriptive as possible in your documentation: mention any hickups and subtleties, and give an example if the usage is not obvious."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/// Returns the Color of the (x, y) pixel. No bound checking is done, so undefined behaviour will occur if x is not inside [0, width() - 1] or y is not inside [0, height() - 1]\n/// (0, 0) is at the bottom-left of the image.\nColor& color_at(unsigned int x, unsigned int y) { return _pixel_colors[x + y * _width]; }\n")),(0,i.kt)("h2",{id:"document-only-when-necessary"},"Document only when necessary"),(0,i.kt)("p",null,"There is no point in writting documentation if you can't do a better job than the function name already does. Only write documentation when you have something meaningful to add (which should be most of the time)."),(0,i.kt)("p",null,"For example, this is some useless documentation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/// Returns the minimum of the two numbers\n/// @param a The first number to compare\n/// @param b The second number to compare\nint min(int a, int b);\n")),(0,i.kt)("p",null,"while this one is useful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/// Uses the `<` operator to compare the two arguments.\n/// /!\\ Returns a reference to one of the arguments, so you can\'t pass a temporary value into this function or you will get a dangling reference!\n/// For example `const std::string& res = min("yo"s, my_string + "!");` is a bug because `my_string + "!"` creates a temporary that will be destroyed at the end of the line, while `res` might be pointing to it.\ntemplate<typename T>\nT& min(T& a, T& b);\n')),(0,i.kt)("h2",{id:"document-your-design-decisions"},"Document your design decisions"),(0,i.kt)("p",null,"Each module is accompanied by a ",(0,i.kt)("inlineCode",{parentName:"p"},"_README.md")," file. This is where we (and you) document our design process, the options we considered, the choices we made and why we made them."),(0,i.kt)("p",null,"It is very useful to understand the intent of the people that came before you, which in turn helps you make a more educated decision as to how to work with the code. For example if the readme says ",(0,i.kt)("em",{parentName:"p"},'"I did it this way because I couldn\'t find any better solution"')," then you know that you can safely rewrite the code and that the strange bits are not here for any particular reason. On the other hand if it says that the naive and simple solution actually doesn't work, then you know that the complex code is here for a reason, and if you still try to improve it at least you won't fall in the same pitfalls as the previous implementer did."),(0,i.kt)("p",null,"It is a great way of creating and sharing knowledge: these resources will surely prove useful to many one day, and forcing you to write down the choices you made should have you question whether they are really the best and strive to improve your own design."),(0,i.kt)("p",null,"This is also a great place to explain the overall architecture of the module, the relation between classes, where to look first ",(0,i.kt)("em",{parentName:"p"},"etc."),".\nThe readme should be the first place to look when you want to understand a module."))}m.isMDXComponent=!0}}]);