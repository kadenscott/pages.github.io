(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("Main",{scopedSlots:t._u([{key:"content",fn:function(){return[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("Footer")]},proxy:!0}])})],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticClass:"title"},[t._v("kaden.sh")])]),t._t("content")],2)},c=[],l={name:"Main"},u=l,f=(a("de4d"),a("2877")),p=Object(f["a"])(u,r,c,!1,null,"721b25b0",null),h=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h3",[t._v("Made with 😡 from Canada.")])])}],v={name:"Footer"},b=v,_=(a("cd71"),Object(f["a"])(b,d,m,!1,null,"32674649",null)),g=_.exports,y={name:"App",components:{Footer:g,Main:h}},k=y,w=(a("034f"),Object(f["a"])(k,s,i,!1,null,null,null)),C=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"mainpage"},[a("div",{staticClass:"button-array"},[a("router-link",{staticClass:"button",attrs:{to:"/blog"}},[a("i",{staticClass:"fas fa-comment-alt"}),a("h3",[t._v("blog")])]),a("router-link",{staticClass:"button",attrs:{to:"/blog"}},[a("i",{staticClass:"fas fa-list"}),a("h3",[t._v("projects")])]),a("router-link",{staticClass:"button",attrs:{to:"/about"}},[a("i",{staticClass:"fas fa-book-reader"}),a("h3",[t._v("about")])])],1)])])},O=[],I={name:"MainPage",computed:{username:function(){return this.$route.params.username}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},$=I,x=(a("d66b"),Object(f["a"])($,j,O,!1,null,"b22031aa",null)),M=x.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"blogpage"},[a("h1",[t._v("Hello, world!")])])])}],S={name:"BlogPage",computed:{username:function(){return this.$route.params.username}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},T=S,J=Object(f["a"])(T,P,E,!1,null,"fd6108da",null),B=J.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"aboutpage"},[a("h1",[t._v("Hi. I'm Kaden.")]),a("p",[t._v("I'm also known as "),a("code",[t._v("bluely")]),t._v(" online. I'm a software developer, with my main experience coming from Java, JavaScript, and Python.")]),a("p",[t._v("As a hobby, I develop Minecraft plugins. I enjoy writing plugins as they help me apply new knowledge to a game I know and love.")]),a("p",[t._v("I also dabble in video production. On my YouTube, you'll find short video essays about Minecraft (and sometimes the occasional shitpost).")]),a("p",[t._v("Occasionally, I'll muster up enough motivation to make a song. I enjoy making calming music that I would listen to while coding or playing a game.")]),a("h2",[t._v("Links")]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://github.com/kadenscott"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to visit my GitHub.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://chat.ksc.sh"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to join my Discord server.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://www.youtube.com/channel/UCee8ekNyhwgU8SQM2liuibQ"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to check out my YouTube channel.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://lawks.bandcamp.com/"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to visit my Bandcamp.")])])])])}],Q={name:"AboutPage"},U=Q,Y=Object(f["a"])(U,H,A,!1,null,"8a541a7e",null),F=Y.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"aboutpage"},[a("h1",[t._v("Hi. I'm Kaden.")]),a("p",[t._v("I'm also known as "),a("code",[t._v("bluely")]),t._v(" online. I'm a software developer, with my main experience coming from Java, JavaScript, and Python.")]),a("p",[t._v("As a hobby, I develop Minecraft plugins. I enjoy writing plugins as they help me apply new knowledge to a game I know and love.")]),a("p",[t._v("I also dabble in video production. On my YouTube, you'll find short video essays about Minecraft (and sometimes the occasional shitpost).")]),a("p",[t._v("Occasionally, I'll muster up enough motivation to make a song. I enjoy making calming music that I would listen to while coding or playing a game.")]),a("h2",[t._v("Links")]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://github.com/kadenscott"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to visit my GitHub.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://chat.ksc.sh"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to join my Discord server.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://www.youtube.com/channel/UCee8ekNyhwgU8SQM2liuibQ"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to check out my YouTube channel.")])]),a("h4",[a("a",{staticClass:"link",attrs:{href:"https://lawks.bandcamp.com/"}},[a("i",{staticClass:"fab fa-discord"}),t._v(" Click to visit my Bandcamp.")])])])])}],K={name:"ProjectsPage"},L=K,N=Object(f["a"])(L,D,G,!1,null,"9cd910ba",null),q=N.exports;n["a"].config.productionTip=!1;var z=[{path:"*",component:M},{path:"/blog",component:B},{path:"/about",component:F},{path:"/projects",component:q}],R=new o["a"]({mode:"history",routes:z});n["a"].use(o["a"]),new n["a"]({render:function(t){return t(C)},router:R}).$mount("#app")},"587c":function(t,e,a){},"79f1":function(t,e,a){},"85ec":function(t,e,a){},cd71:function(t,e,a){"use strict";a("e20f")},d66b:function(t,e,a){"use strict";a("79f1")},de4d:function(t,e,a){"use strict";a("587c")},e20f:function(t,e,a){}});
//# sourceMappingURL=app.59e690a5.js.map