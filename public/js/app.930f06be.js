(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f6ef7cfe"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,r[1](l)}a[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"199c":function(t,e){},"1f93":function(t,e,r){"use strict";var n=r("6e8b"),a=r.n(n);a.a},"22c7":function(t,e,r){},"23be":function(t,e,r){"use strict";var n=r("199c"),a=r.n(n);e["default"]=a.a},"2d5b":function(t,e,r){},"3dfd":function(t,e,r){"use strict";var n=r("f3d7"),a=r("23be"),i=(r("034f"),r("2877")),o=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"54d8":function(t,e,r){"use strict";var n=r("2d5b"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("3dfd"),i=r("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("navbar"),r("landing-page"),r("h1",{staticClass:"custom-header",attrs:{id:"projects"}},[t._v("Projects")]),r("projects",{attrs:{id:"completed-projects",projects:t.completedProjects}}),r("h1",{staticClass:"custom-header"},[t._v("The Team")]),r("meet-the-team"),r("h1",{staticClass:"custom-header"},[t._v("Contact")])],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"landing-page"}},[r("div",{attrs:{id:"top-section"}},[r("div",{attrs:{id:"top-section-container"}},[r("h1",{attrs:{type:"info",id:"top-section-title"}},[t._v("Stolaf & Carlton Engineering Club")]),r("span",[t._v("Can we build it? Yes we can!")]),r("div",{attrs:{id:"top-section-btns"}},[r("div",{attrs:{id:"join-now-container"}},[r("b-button",{attrs:{size:"lg",block:"",variant:"primary"}},[t._v("Join Now")])],1),r("div",{attrs:{id:"see-more-container"}},[r("b-button",{staticClass:"see-more-btn",attrs:{size:"lg",block:"",variant:"outline-primary"}},[r("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#projects"}},[t._v("See More")])])],1)])])])])},l=[],d={data:function(){return{screen:{width:500,height:500}}}},u=d,p=(r("5df8"),r("2877")),m=Object(p["a"])(u,c,l,!1,null,null,null),f=m.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"projects-container"}},[r("b-container",{staticClass:"no-padding",attrs:{fluid:""}},[r("b-row",{attrs:{"no-gutters":!0}},[r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[0]}})],1),r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[1]}})],1),r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[2]}})],1)],1),r("b-row",{attrs:{"no-gutters":!0}},[r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[2]}})],1),r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[2]}})],1),r("b-col",{attrs:{md:"4"}},[r("project",{attrs:{project:t.projects[2]}})],1)],1)],1)],1)},b=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"project",on:{mouseenter:t.setHoveredProject}},[r("div",{staticClass:"overlay"},[r("div",{attrs:{id:"overlay-content"}},[t._m(0),r("div",{attrs:{id:"overlay-from-left"}},[r("b-button",{attrs:{variant:"primary"}},[t._v("More Info")])],1)])]),r("img",{attrs:{id:"project-img",src:"https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"}})]),r("div",{attrs:{id:"project-card-footer"}})])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"overlay-from-right"}},[r("h2",[t._v("Awesome Drone")])])}],j={name:"project",props:["project"],methods:{setHoveredProject:function(){console.log("hello")}}},w=j,y=(r("54d8"),Object(p["a"])(w,h,v,!1,null,null,null)),_=y.exports,C={props:["projects"],name:"projects",components:{Project:_},data:function(){return{hoveredProject:null}}},x=C,P=(r("f6ca"),Object(p["a"])(x,g,b,!1,null,null,null)),A=P.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("NavBar")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[t._v("Projects")]),r("b-nav-item",{attrs:{href:"#"}},[t._v("The Team")]),r("b-nav-item",{attrs:{href:"#"}},[t._v("Schedule")]),r("b-nav-item",{attrs:{href:"#"}},[t._v("Contact")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"#"}},[r("span",{staticStyle:{"font-size":"2em","line-height":"20px"}},[r("i",{staticClass:"fab fa-github"})])]),r("b-nav-item",{attrs:{href:"#"}},[r("span",{staticStyle:{"font-size":"2em","line-height":"20px"}},[r("i",{staticClass:"fab fa-facebook"})])]),r("b-nav-item",{attrs:{href:"#"}},[r("span",{staticStyle:{"font-size":"2em","line-height":"20px"}},[r("i",{staticClass:"fab fa-snapchat"})])]),r("b-nav-item",{attrs:{href:"#"}},[r("span",{staticStyle:{"font-size":"2em","line-height":"20px"}},[r("i",{staticClass:"fab fa-instagram"})])]),r("b-nav-item",{attrs:{href:"#"}},[r("span",{staticStyle:{"font-size":"2em","line-height":"20px"}},[r("i",{staticClass:"fab fa-youtube"})])])],1)],1)],1)],1)},T=[],E={name:"navbar"},S=E,z=Object(p["a"])(S,O,T,!1,null,null,null),$=z.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{attrs:{src:"https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"Horizontal Card"}},[r("b-card-text",[t._v("\n              This is a wider card with supporting text as a natural lead-in to additional content.\n              This content is a little bit longer.\n            ")])],1)],1)],1)],1)],1),r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"Horizontal Card"}},[r("b-card-text",[t._v("\n              This is a wider card with supporting text as a natural lead-in to additional content.\n              This content is a little bit longer.\n            ")])],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-card-img",{attrs:{src:"https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"}})],1)],1)],1)],1),r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{attrs:{src:"https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"Horizontal Card"}},[r("b-card-text",[t._v("\n              This is a wider card with supporting text as a natural lead-in to additional content.\n              This content is a little bit longer.\n            ")])],1)],1)],1)],1)],1)])},M=[],H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"Horizontal Card"}},[r("b-card-text",[t._v("\n              This is a wider card with supporting text as a natural lead-in to additional content.\n              This content is a little bit longer.\n            ")])],1)],1)],1)],1)],1)])},I=[],N={name:"horizontal-card"},B=N,D=Object(p["a"])(B,H,I,!1,null,null,null),J=(D.exports,{name:"current-projects",props:["currentProjects"]}),L=J,F=Object(p["a"])(L,k,M,!1,null,null,null),G=F.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Tues 7-8 pm")]),r("h1",[t._v("Thurs 3-4 pm")])])}],K={name:"schedule"},Q=K,R=Object(p["a"])(Q,q,Y,!1,null,null,null),U=R.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},t._l(t.people,(function(e){return r("div",{attrs:{id:"scroll-area-content"}},[r("b-card",{staticClass:"my-b-card",staticStyle:{"min-width":"14rem"},attrs:{title:e.name,"img-src":"https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3.png","img-top":""},on:{mouseover:function(e){return t.test()}}},[r("b-card-text",[r("div",{staticStyle:{"text-align":"left"}},[r("p",[t._v(" Senior ")]),r("p",[t._v(" Stolaf ")]),r("p",[t._v(" Math Majior ")]),r("p",[t._v(' "I like cheese"')])])])],1)],1)})),0)},W=[],X={name:"meet-the-team",data:function(){return{people:[{name:"Amy",description:"A great description"},{name:"Bruce",description:"A great description"},{name:"Caroline",description:"A great description"},{name:"Danny",description:"A great description"},{name:"Elsa",description:"A great description"},{name:"Fred",description:"A great description"},{name:"Greg",description:"A great description"},{name:"Harry",description:"A great description"},{name:"Isabelle",description:"A great description"},{name:"Amy",description:"A great description"},{name:"Bruce",description:"A great description"},{name:"Caroline",description:"A great description"},{name:"Danny",description:"A great description"},{name:"Elsa",description:"A great description"},{name:"Fred",description:"A great description"},{name:"Greg",description:"A great description"},{name:"Harry",description:"A great description"},{name:"Isabelle",description:"A great description"}]}},methods:{test:function(){console.log("woring")}}},Z=X,tt=(r("1f93"),Object(p["a"])(Z,V,W,!1,null,null,null)),et=tt.exports,rt={name:"home",components:{MeetTheTeam:et,Schedule:U,CurrentProjects:G,Navbar:$,LandingPage:f,Projects:A,Project:_},data:function(){return{completedProjects:[{id:1,img:"img.jpg",description:"a great description"},{id:2,img:"img.jpg",description:"a great description"},{id:3,img:"img.jpg",description:"a great description"}],currentProjects:[{id:4,img:"img.jpg",description:"a great description"},{id:5,img:"img.jpg",description:"a great description"},{id:6,img:"img.jpg",description:"a great description"}]}}},nt=rt,at=(r("cccb"),Object(p["a"])(nt,o,s,!1,null,null,null)),it=at.exports;n["default"].use(i["a"]);var ot=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:it},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),st=(r("f9e3"),r("2dd8"),r("5f5b")),ct=r("ecee"),lt=r("5a58"),dt=r.n(lt),ut=r("ad3d"),pt=r("f2d1");ct["d"].add(pt["b"],pt["a"],pt["d"],pt["c"],pt["e"]),ct["b"].watch(),n["default"].component("font-awesome-icon",ut["a"]),n["default"].use(dt.a),n["default"].use(st["a"]),n["default"].config.productionTip=!1,new n["default"]({router:ot,render:function(t){return t(a["default"])}}).$mount("#app")},"5df8":function(t,e,r){"use strict";var n=r("c7dd"),a=r.n(n);a.a},"64a9":function(t,e,r){},"6e8b":function(t,e,r){},c7dd:function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("d563"),a=r.n(n);a.a},d563:function(t,e,r){},f3d7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[];r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}))},f6ca:function(t,e,r){"use strict";var n=r("22c7"),a=r.n(n);a.a}});
//# sourceMappingURL=app.930f06be.js.map