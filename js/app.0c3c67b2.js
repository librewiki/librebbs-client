(function(t){function e(e){for(var n,a,s=e[0],o=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i={app:0},c=[];function s(t){return o.p+"js/"+({auth:"auth","topic~topic_list":"topic~topic_list",topic:"topic",topic_list:"topic_list"}[t]||t)+"."+{auth:"d79d5a3d","topic~topic_list":"2be0a616",topic:"283df54c",topic_list:"46088dcf"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],r={"topic~topic_list":1,topic:1,topic_list:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({auth:"auth","topic~topic_list":"topic~topic_list",topic:"topic",topic_list:"topic_list"}[t]||t)+"."+{auth:"31d6cfe0","topic~topic_list":"32531c37",topic:"3fd7e79a",topic_list:"92a739ee"}[t]+".css",i=o.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],d.parentNode.removeChild(d),r(c)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"0613":function(t,e,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("caad"),r("2532"),r("7db0"),r("b0c0"),r("7f5d")),i=r("2b0e"),c=r("2f62");i["a"].use(c["a"]);var s={state:{meta:{error:null},board:{id:0,display_name:"",name:"",is_active:!1,created_at:"",updated_at:""},user:{isInitialized:!1,isLoggedIn:!1,isAdmin:!1,isBlocked:!1,email:"",username:""},modalError:null,canWrite:!1,editorOpen:!1},mutations:{setBoard:function(t,e){t.board=e},setError:function(t,e){t.meta.error=e},setErrormodal:function(t,e){t.modalError=e},setEditorOpen:function(t,e){t.editorOpen=e},setCanWrite:function(t,e){t.canWrite=e},updateUserInfo:function(t,e){t.user=e},resetUserInfo:function(t){t.user={isInitialized:!0,isLoggedIn:!1,isAdmin:!1,isBlocked:!1,email:"",username:""}}},actions:{fetchUserInfo:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a["g"])();case 3:e=t.sent,o.commit("updateUserInfo",{isInitialized:!0,isLoggedIn:!0,isAdmin:e.groups.includes("boardmanager"),isBlocked:e.blocked,email:e.email,username:e.username}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),o.commit("resetUserInfo");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchBoard:function(t,e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["b"])();case 2:if(r=t.sent,n=r.find((function(t){return t.name===e})),!n){t.next=8;break}o.commit("setBoard",n),t.next=9;break;case 8:throw new Error("존재하지 않는 게시판입니다.");case 9:case"end":return t.stop()}}),t)})))()}},modules:{}},o=new c["a"].Store(s);e["a"]=o},"136e":function(t,e,r){"use strict";r("4ac8")},"27a0":function(t,e,r){},"4ac8":function(t,e,r){},5933:function(t,e,r){},"5c0b":function(t,e,r){"use strict";r("9c0c")},"7be6":function(t,e,r){},"7f5d":function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return L})),r.d(e,"d",(function(){return S})),r.d(e,"m",(function(){return b})),r.d(e,"k",(function(){return M})),r.d(e,"l",(function(){return F})),r.d(e,"h",(function(){return $})),r.d(e,"p",(function(){return W})),r.d(e,"i",(function(){return g})),r.d(e,"q",(function(){return k})),r.d(e,"n",(function(){return O})),r.d(e,"s",(function(){return C})),r.d(e,"a",(function(){return _})),r.d(e,"o",(function(){return E})),r.d(e,"j",(function(){return A})),r.d(e,"r",(function(){return N}));var n=r("1da1"),a=(r("d3b7"),r("96cf"),r("bc3a")),i=r.n(a),c=r("c1b7"),s=i.a.create({baseURL:"https://betaserve.librewiki.net",withCredentials:!0});function o(){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/me");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/boards");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function d(t,e,r){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/boards/".concat(e,"/topics"),{params:{offset:r,limit:n}});case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/topics/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function b(t,e,r){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/topics",{board_id:e,title:r,content:n});case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_hidden:!0});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function k(t){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_hidden:!1});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_suspended:!0});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function C(t){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_suspended:!1});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function _(t){return R.apply(this,arguments)}function R(){return R=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_closed:!0});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function E(t){return I.apply(this,arguments)}function I(){return I=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_closed:!1});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function A(t){return B.apply(this,arguments)}function B(){return B=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_pinned:!0});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function N(t){return T.apply(this,arguments)}function T(){return T=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/topics/".concat(e,"/status"),{is_pinned:!1});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}function S(t,e,r){return U.apply(this,arguments)}function U(){return U=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/topics/".concat(e,"/comments"),{params:{offset:r,limit:n}});case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}function L(t,e){return P.apply(this,arguments)}function P(){return P=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get("/comments/".concat(e),{params:{show_hidden:r}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function M(t,e){return D.apply(this,arguments)}function D(){return D=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/topics/".concat(e,"/comments"),{content:r});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function $(t){return q.apply(this,arguments)}function q(){return q=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/comments/".concat(e,"/status"),{is_hidden:!0});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),q.apply(this,arguments)}function W(t){return z.apply(this,arguments)}function z(){return z=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.put("/comments/".concat(e,"/status"),{is_hidden:!1});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function F(t,e){return H.apply(this,arguments)}function H(){return H=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/files",{filename:e,content:r});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}s.interceptors.response.use(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.config,n=e.response.status,401!==n||"TokenExpired"!==e.response.data){t.next=6;break}return a=r,t.next=5,Object(c["c"])();case 5:return t.abrupt("return",s(a));case 6:return t.abrupt("return",Promise.reject(e));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},"9c0c":function(t,e,r){},"9f3b":function(t,e,r){t.exports=r.p+"img/designedbylibre.6b03739b.png"},ba20:function(t,e,r){"use strict";r("5933")},c1b7:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return s}));var n=r("1da1"),a=(r("96cf"),r("ac1f"),r("5319"),r("bc3a")),i=r.n(a);function c(t){var e="1945c7dd30098b1db1c3f5aec8d40c14",r="https://librewiki.net/rest.php/oauth2/authorize"+"?response_type=code&client_id=".concat(e)+"&state=".concat(encodeURIComponent(t));location.replace(r)}function s(){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("".concat("https://betaserve.librewiki.net","/auth/logout"),null,{withCredentials:!0});case 2:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("".concat("https://betaserve.librewiki.net","/auth/login"),{code:e},{withCredentials:!0});case 2:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.locks.request("refreshToken",{ifAvailable:!0},function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,i.a.post("".concat("https://betaserve.librewiki.net","/auth/refresh"),null,{withCredentials:!0});case 4:t.next=8;break;case 6:return t.next=8,navigator.locks.request("refresh",(function(){return null}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),s(),location.reload();case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("fbcf");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("nav-bar"),r("div",{staticClass:"main-container container"},[r("div",{staticClass:"columns main-columns"},[r("div",{staticClass:"column main-column"},[r("article",{staticClass:"box is-paddingless"},[r("header",{staticClass:"main-header"},[r("SiteNotice"),r("div",{staticClass:"level title-wrapper-row"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[r("router-link",{attrs:{to:"/"+t.board.name}},[r("h1",{staticClass:"title"},[t._v(t._s(t.title))])])],1)]),r("tools")],1)],1),r("section",{staticClass:"main-content"},[t.error?r("error-page"):r("router-view")],1),r("FooterContent")],1)]),r("div",{staticClass:"column is-narrow is-hidden-touch"},[r("live-recent")],1)])]),t.modalerror?r("error-modal"):t._e()],1)},i=[],c=r("d4ec"),s=r("bee2"),o=r("262e"),u=r("2caf"),l=r("9ab4"),p=r("1b40"),d=r("0613"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"liberty-navbar navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-menu is-active"},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",attrs:{"active-class":"",href:"https://librewiki.net"}},[n("img",{attrs:{alt:"Logo",src:r("cf05")}}),t._v(t._s(t.settings.data.wikiName))]),n("a",{staticClass:"navbar-item",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%B5%9C%EA%B7%BC%EB%B0%94%EB%80%9C"}},[n("b-icon",{attrs:{icon:"sync"}}),n("span",{staticClass:"navbar-text"},[t._v("최근 바뀜")])],1),n("a",{staticClass:"navbar-item",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%9E%84%EC%9D%98%EB%AC%B8%EC%84%9C"}},[n("b-icon",{attrs:{icon:"random"}}),n("span",{staticClass:"navbar-text"},[t._v("임의 문서")])],1),n("a",{staticClass:"navbar-item",attrs:{href:"https://maps.librewiki.net"}},[n("b-icon",{attrs:{icon:"map"}}),n("span",{staticClass:"navbar-text"},[t._v("맵스")])],1),n("b-dropdown",[n("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[n("b-icon",{attrs:{icon:"comments"}}),n("span",{staticClass:"navbar-text"},[t._v("게시판")]),n("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),n("b-dropdown-item",{attrs:{"has-link":""}},[n("router-link",{attrs:{to:"/wiki"}},[t._v("위키방")])],1),n("b-dropdown-item",{attrs:{"has-link":""}},[n("router-link",{attrs:{to:"/freeboard"}},[t._v("자유게시판")])],1)],1),n("b-dropdown",[n("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[n("b-icon",{attrs:{icon:"wrench"}}),n("span",{staticClass:"navbar-text"},[t._v("도구")]),n("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),t.user.isAdmin?n("b-dropdown-item",{attrs:{"has-link":""}},[n("router-link",{attrs:{to:"/admin"}},[t._v("관리자 도구")])],1):t._e(),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("특수:올리기")}},[t._v("파일 업로드")])])],1),n("b-dropdown",[n("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[n("b-icon",{attrs:{icon:"question"}}),n("span",{staticClass:"navbar-text"},[t._v("도움말")]),n("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("도움말:문법 도움말")}},[t._v("문법 도움말")])]),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("도움말:Tex 문법")}},[t._v("TeX 문법")])])],1)],1),t.user.isInitialized?n("div",{staticClass:"user-items"},[t.user.isLoggedIn?[n("b-dropdown",[n("a",{staticClass:"navbar-item user-gravatar-wrapper",attrs:{slot:"trigger"},slot:"trigger"},[n("gravatar",{staticClass:"user-gravatar",attrs:{email:t.user.email}})],1),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("사용자:"+t.user.username)}},[t._v("사용자:"+t._s(t.user.username))])]),n("hr",{staticClass:"dropdown-divider"}),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("특수:환경설정")}},[t._v("환경설정")])]),n("hr",{staticClass:"dropdown-divider"}),n("b-dropdown-item",{attrs:{"has-link":""}},[n("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("로그아웃")])])],1),n("a",{staticClass:"navbar-item",attrs:{role:"button"},on:{click:t.logout}},[n("b-icon",{attrs:{pack:"fa",icon:"sign-out"}})],1)]:n("a",{staticClass:"navbar-item",on:{click:t.login}},[n("b-icon",{attrs:{pack:"fa",icon:"sign-in"}})],1)],2):t._e(),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"search-box-wrapper"},[n("b-field",[n("b-autocomplete",{attrs:{placeholder:"검색",icon:"search",data:t.autoCompleteItem,"max-height":"100%"},on:{select:function(e){return t.selected=e},input:function(e){return t.getMedaiwikiSearch(t.searchInput)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go.apply(null,arguments)}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),n("p",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{"active-class":""},on:{click:t.go}},[n("b-icon",{attrs:{icon:"arrow-right"}})],1)]),n("p",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{"active-class":""},on:{click:t.search}},[n("b-icon",{attrs:{icon:"search"}})],1)])],1)],1)])])])])},h=[],m=r("1da1"),b=r("257e"),v=r("ade3"),g=(r("96cf"),r("99af"),r("159b"),r("ac1f"),r("841c"),r("e06a")),w=r.n(g),k=r("c1b7"),y=r("bc3a"),O=r.n(y),j=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;Object(c["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(v["a"])(Object(b["a"])(t),"searchInput",""),Object(v["a"])(Object(b["a"])(t),"settings",{data:{wikiname:"리브레 위키"}}),Object(v["a"])(Object(b["a"])(t),"autoCompleteItem",[""]),t}return Object(s["a"])(r,[{key:"user",get:function(){return d["a"].state.user}},{key:"login",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(k["d"])(this.$route.fullPath);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(k["b"])();case 2:location.reload();case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"go",value:function(){this.searchInput&&(location.href="https://librewiki.net/index.php?title=special:search&search=".concat(encodeURIComponent(this.searchInput)))}},{key:"search",value:function(){this.searchInput&&(location.href="https://librewiki.net/index.php?title=special:search&search=".concat(encodeURIComponent(this.searchInput),"&fulltext=search"))}},{key:"getMedaiwikiSearch",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var r,n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://librewiki.net/api.php",{params:{action:"query",list:"search",origin:window.origin,format:"json",srsearch:e,srlimit:10}});case 3:return r=t.sent,n=r.data,this.autoCompleteItem=[],n.query.search.forEach((function(t){return a.autoCompleteItem.push(t.title)})),t.abrupt("return");case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(e){return t.apply(this,arguments)}return e}()}]),r}(p["c"]);j=Object(l["a"])([Object(p["a"])({components:{Gravatar:w.a}})],j);var C=j,x=C,_=(r("ed6b"),r("2877")),R=Object(_["a"])(x,f,h,!1,null,null,null),E=R.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"panel live-recent"},[r("div",{staticClass:"live-recent-header"},[r("div",{staticClass:"tabs is-toggle is-fullwidth"},[r("ul",[r("li",[r("a",{class:{"is-active":"DOCUMENT"===t.mode},attrs:{role:"button"},on:{click:function(e){t.mode="DOCUMENT",t.fetchLiveRecent()}}},[t._v("최근 바뀜")])]),r("li",[r("a",{class:{"is-active":"TOPIC"===t.mode},attrs:{role:"button"},on:{click:function(e){t.mode="TOPIC",t.fetchLiveRecent()}}},[t._v("최근 토론")])])])])]),r("div",{staticClass:"live-recent-content"},t._l(t.items,(function(e){return r("a",{key:e.key,staticClass:"panel-block",attrs:{href:e.to,title:e.text}},[r("span",{staticClass:"live-recent-time"},[t._v("["+t._s(e.timeString)+"]")]),e.isNew?r("span",{staticClass:"live-recent-tag"},[t._v("[New]")]):t._e(),r("span",{staticClass:"live-recent-title"},[t._v(t._s(e.text))])])})),0),t._m(0)])},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"live-recent-footer panel-block"},[r("a",{staticClass:"button is-primary is-small",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%B5%9C%EA%B7%BC%EB%B0%94%EB%80%9C"}},[t._v("더보기")])])}],B=(r("d81d"),r("1315")),N="0|4|10|12|14|1600",T="1|3|5|7|9|11|13|15|2600|1601|1063|3604|3605",S=10,U=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;Object(c["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(v["a"])(Object(b["a"])(t),"error",!1),Object(v["a"])(Object(b["a"])(t),"pending",!1),Object(v["a"])(Object(b["a"])(t),"items",[]),Object(v["a"])(Object(b["a"])(t),"mode","DOCUMENT"),t}return Object(s["a"])(r,[{key:"fetchLiveRecent",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(window.innerWidth<769)){t.next=2;break}return t.abrupt("return");case 2:if(!this.pending){t.next=4;break}return t.abrupt("return");case 4:return this.pending=!0,t.prev=5,t.next=8,O.a.get("https://librewiki.net/api.php",{params:{action:"query",origin:window.origin,list:"recentchanges",rcprop:"title|timestamp",rcshow:"!bot|!redirect",rctype:"edit|new",rclimit:S,format:"json",rcnamespace:"DOCUMENT"===this.mode?N:T,rctoponly:!0}});case 8:e=t.sent,r=e.data,this.items=r.query.recentchanges.map((function(t){var e,r=B["DateTime"].fromISO(t.timestamp);e=r<B["DateTime"].now().minus({days:1})?r.toRelative()||"":r.toFormat("HH:mm:ss");var n="new"===t.type;return{key:e+t.title,timeString:e,isNew:n,text:t.title,to:"https://librewiki.net/wiki/".concat(encodeURIComponent(t.title))}})),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](5),console.log(t.t0),this.error=!0;case 17:return t.prev=17,this.pending=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[5,13,17,20]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.fetchLiveRecent(),setInterval(this.fetchLiveRecent,3e4)}}]),r}(p["c"]);U=Object(l["a"])([p["a"]],U);var L=U,P=L,M=(r("136e"),Object(_["a"])(P,I,A,!1,null,null,null)),D=M.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-error"},[t._v(t._s(t.error.message))])},q=[],W=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(s["a"])(r,[{key:"error",get:function(){return d["a"].state.meta.error}}]),r}(p["c"]);W=Object(l["a"])([p["a"]],W);var z=W,F=z,H=Object(_["a"])(F,$,q,!1,null,null,null),V=H.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"errormodal",staticClass:"error-modal modal",class:{"is-active":"data.isactive"}},[r("div",{staticClass:"modal-background",on:{click:t.modalclose}}),r("div",{staticClass:"modal-content",attrs:{id:"ErrorModal"}},[r("span",[t._v(t._s(t.data.errormsg))])]),r("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.modalclose}})])},K=[],G=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;Object(c["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(v["a"])(Object(b["a"])(t),"data",{isactive:!1,errormsg:d["a"].state.modalError}),t}return Object(s["a"])(r,[{key:"mounted",value:function(){this.data.isactive=!0}},{key:"modalclose",value:function(){this.data.isactive=!1,d["a"].commit("setErrormodal",null)}}]),r}(p["c"]);G=Object(l["a"])([p["a"]],G);var X=G,Q=X,Y=(r("d882"),Object(_["a"])(Q,J,K,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"liberty-footer main-footer"},[n("img",{staticClass:"designedbylibre",attrs:{src:r("9f3b")}})])}],rt=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(p["c"]),nt=rt,at=(r("d2eb"),Object(_["a"])(nt,tt,et,!1,null,null,null)),it=at.exports,ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.done?r("div",{staticClass:"liberty-notice"},[r("div",{attrs:{id:"sitenotice"}},[t.item.text?r("viewer",{attrs:{initialValue:t.item.text}}):t._e()],1)]):t._e()},st=[],ot=r("4ede"),ut=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;Object(c["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(v["a"])(Object(b["a"])(t),"done",!1),Object(v["a"])(Object(b["a"])(t),"item",{title:"",pageid:0,text:""}),t}return Object(s["a"])(r,[{key:"fetchSiteNotice",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://librewiki.net/api.php",{params:{action:"parse",origin:window.origin,page:"mediawiki:sitenotice",prop:"text",formatversion:"2",format:"json"}});case 3:return e=t.sent,r=e.data,this.item=r.parse,this.done=!0,t.abrupt("return");case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),this.done=!1;case 14:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.fetchSiteNotice()}}]),r}(p["c"]);ut=Object(l["a"])([Object(p["a"])({components:{Viewer:ot["Viewer"]}})],ut);var lt=ut,pt=lt,dt=(r("dfdd"),Object(_["a"])(pt,ct,st,!1,null,null,null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"liberty-tools level-right"},[r("div",{staticClass:"level-item"},[t.canWrite?r("button",{staticClass:"button",on:{click:t.openWriteModal}},[r("b-icon",{attrs:{icon:"edit"}}),r("span",[t._v("글쓰기")])],1):t._e()])])},mt=[],bt=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(s["a"])(r,[{key:"canWrite",get:function(){return d["a"].state.canWrite}},{key:"openWriteModal",value:function(){d["a"].commit("setEditorOpen",!0)}}]),r}(p["c"]);bt=Object(l["a"])([p["a"]],bt);var vt=bt,gt=vt,wt=(r("ba20"),Object(_["a"])(gt,ht,mt,!1,null,null,null)),kt=wt.exports,yt=function(t){Object(o["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(s["a"])(r,[{key:"title",get:function(){return d["a"].state.board.display_name}},{key:"error",get:function(){return d["a"].state.meta.error}},{key:"board",get:function(){return d["a"].state.board}},{key:"modalerror",get:function(){return d["a"].state.modalError}}]),r}(p["c"]);yt=Object(l["a"])([Object(p["a"])({components:{NavBar:E,LiveRecent:D,ErrorPage:V,ErrorModal:Z,FooterContent:it,SiteNotice:ft,Tools:kt}})],yt);var Ot=yt,jt=Ot,Ct=(r("5c0b"),Object(_["a"])(jt,a,i,!1,null,null,null)),xt=Ct.exports,_t=r("9483");Object(_t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0");var Rt=r("8c4f");n["a"].use(Rt["a"]);var Et=[{path:"/",redirect:"/wiki"},{path:"/auth",name:"Auth",component:function(){return r.e("auth").then(r.bind(null,"2fef"))}},{path:"/:boardName",name:"TopicList",component:function(){return Promise.all([r.e("topic~topic_list"),r.e("topic_list")]).then(r.bind(null,"c6f7"))}},{path:"/:boardName/:topicId",name:"Topic",component:function(){return Promise.all([r.e("topic~topic_list"),r.e("topic")]).then(r.bind(null,"3213"))}}],It=new Rt["a"]({mode:"history",base:"/",routes:Et});It.beforeEach(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d["a"].commit("setError",null),t.prev=1,a=[],d["a"].state.user.isInitialized||"Auth"===e.name||a.push(d["a"].dispatch("fetchUserInfo")),e.params.boardName&&a.push(d["a"].dispatch("fetchBoard",e.params.boardName)),t.next=7,Promise.all(a);case 7:n(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),d["a"].commit("setError",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r,n){return t.apply(this,arguments)}}());var At=It,Bt=r("289d");n["a"].use(Bt["a"],{defaultIconPack:"fas"});var Nt=r("58ca");n["a"].config.productionTip=!1,B["Settings"].defaultLocale="ko-KR",n["a"].use(Nt["a"]),new n["a"]({router:At,store:d["a"],render:function(t){return t(xt)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.a1ed2873.png"},d2eb:function(t,e,r){"use strict";r("dd08")},d5a8:function(t,e,r){},d882:function(t,e,r){"use strict";r("7be6")},dd08:function(t,e,r){},dfdd:function(t,e,r){"use strict";r("27a0")},ed6b:function(t,e,r){"use strict";r("d5a8")}});
//# sourceMappingURL=app.0c3c67b2.js.map