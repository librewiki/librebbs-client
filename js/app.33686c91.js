(function(t){function e(e){for(var r,a,c=e[0],o=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({auth:"auth","topic~topic_list":"topic~topic_list",topic:"topic",topic_list:"topic_list"}[t]||t)+"."+{auth:"78d1cbd3","topic~topic_list":"8f0235a8",topic:"aa35e996",topic_list:"a6c41ddc"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"topic~topic_list":1,topic:1,topic_list:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({auth:"auth","topic~topic_list":"topic~topic_list",topic:"topic",topic_list:"topic_list"}[t]||t)+"."+{auth:"31d6cfe0","topic~topic_list":"32531c37",topic:"3fd7e79a",topic_list:"92a739ee"}[t]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0613":function(t,e,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("caad"),n("2532"),n("7db0"),n("b0c0"),n("7f5d")),s=n("2b0e"),i=n("2f62");s["a"].use(i["a"]);var c={state:{meta:{error:null},board:{id:0,display_name:"",name:"",is_active:!1,created_at:"",updated_at:""},user:{isInitialized:!1,isLoggedIn:!1,isAdmin:!1,isBlocked:!1,email:"",username:""},modalError:null,canWrite:!1,editorOpen:!1},mutations:{setBoard:function(t,e){t.board=e},setError:function(t,e){t.meta.error=e},setErrormodal:function(t,e){t.modalError=e},setEditorOpen:function(t,e){t.editorOpen=e},setCanWrite:function(t,e){t.canWrite=e},updateUserInfo:function(t,e){t.user=e},resetUserInfo:function(t){t.user={isInitialized:!0,isLoggedIn:!1,isAdmin:!1,isBlocked:!1,email:"",username:""}}},actions:{fetchUserInfo:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a["g"])();case 3:e=t.sent,o.commit("updateUserInfo",{isInitialized:!0,isLoggedIn:!0,isAdmin:e.groups.includes("boardmanager"),isBlocked:e.blocked,email:e.email,username:e.username}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),o.commit("resetUserInfo");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchBoard:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["b"])();case 2:if(n=t.sent,r=n.find((function(t){return t.name===e})),!r){t.next=8;break}o.commit("setBoard",r),t.next=9;break;case 8:throw new Error("존재하지 않는 게시판입니다.");case 9:case"end":return t.stop()}}),t)})))()}},modules:{}},o=new i["a"].Store(c);e["a"]=o},"136e":function(t,e,n){"use strict";n("4ac8")},"27a0":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="4678"},"4ac8":function(t,e,n){},5933:function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7be63":function(t,e,n){},"7f5d":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return L})),n.d(e,"d",(function(){return U})),n.d(e,"m",(function(){return m})),n.d(e,"k",(function(){return S})),n.d(e,"l",(function(){return F})),n.d(e,"h",(function(){return q})),n.d(e,"p",(function(){return D})),n.d(e,"i",(function(){return g})),n.d(e,"q",(function(){return w})),n.d(e,"n",(function(){return y})),n.d(e,"s",(function(){return C})),n.d(e,"a",(function(){return _})),n.d(e,"o",(function(){return E})),n.d(e,"j",(function(){return z})),n.d(e,"r",(function(){return N}));var r=n("1da1"),a=(n("d3b7"),n("96cf"),n("bc3a")),s=n.n(a),i=n("c1b7"),c=s.a.create({baseURL:"https://betaserve.librewiki.net",withCredentials:!0});function o(){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/me");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/boards");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function d(t,e,n){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/boards/".concat(e,"/topics"),{params:{offset:n,limit:r}});case 2:return a=t.sent,s=a.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function b(t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/topics/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function m(t,e,n){return v.apply(this,arguments)}function v(){return v=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.post("/topics",{board_id:e,title:n,content:r});case 2:return a=t.sent,s=a.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function g(t){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_hidden:!0});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function w(t){return k.apply(this,arguments)}function k(){return k=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_hidden:!1});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_suspended:!0});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function C(t){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_suspended:!1});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function _(t){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_closed:!0});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function E(t){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_closed:!1});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function z(t){return B.apply(this,arguments)}function B(){return B=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_pinned:!0});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function N(t){return A.apply(this,arguments)}function A(){return A=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/topics/".concat(e,"/status"),{is_pinned:!1});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),A.apply(this,arguments)}function U(t,e,n){return T.apply(this,arguments)}function T(){return T=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/topics/".concat(e,"/comments"),{params:{offset:n,limit:r}});case 2:return a=t.sent,s=a.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}function L(t,e){return P.apply(this,arguments)}function P(){return P=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.get("/comments/".concat(e),{params:{show_hidden:n}});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function S(t,e){return M.apply(this,arguments)}function M(){return M=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.post("/topics/".concat(e,"/comments"),{content:n});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function q(t){return $.apply(this,arguments)}function $(){return $=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/comments/".concat(e,"/status"),{is_hidden:!0});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),$.apply(this,arguments)}function D(t){return W.apply(this,arguments)}function W(){return W=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.put("/comments/".concat(e,"/status"),{is_hidden:!1});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}function F(t,e){return H.apply(this,arguments)}function H(){return H=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.post("/files",{filename:e,content:n});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}c.interceptors.response.use(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.config,r=e.response.status,401!==r||"TokenExpired"!==e.response.data){t.next=6;break}return a=n,t.next=5,Object(i["c"])();case 5:return t.abrupt("return",c(a));case 6:return t.abrupt("return",Promise.reject(e));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},"9c0c":function(t,e,n){},"9f3b":function(t,e,n){t.exports=n.p+"img/designedbylibre.6b03739b.png"},ba20:function(t,e,n){"use strict";n("5933")},c1b7:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return c}));var r=n("1da1"),a=(n("96cf"),n("ac1f"),n("5319"),n("bc3a")),s=n.n(a);function i(t){var e="1945c7dd30098b1db1c3f5aec8d40c14",n="https://librewiki.net/rest.php/oauth2/authorize"+"?response_type=code&client_id=".concat(e)+"&state=".concat(encodeURIComponent(t));location.replace(n)}function c(){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("https://betaserve.librewiki.net","/auth/logout"),null,{withCredentials:!0});case 2:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("https://betaserve.librewiki.net","/auth/login"),{code:e},{withCredentials:!0});case 2:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.locks.request("refreshToken",{ifAvailable:!0},function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.a.post("".concat("https://betaserve.librewiki.net","/auth/refresh"),null,{withCredentials:!0});case 4:t.next=8;break;case 6:return t.next=8,navigator.locks.request("refresh",(function(){return null}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),c(),location.reload();case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("fbcf");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("nav-bar"),n("div",{staticClass:"main-container container"},[n("div",{staticClass:"columns main-columns"},[n("div",{staticClass:"column main-column"},[n("article",{staticClass:"box is-paddingless"},[n("header",{staticClass:"main-header"},[n("SiteNotice"),n("div",{staticClass:"level title-wrapper-row"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:"/"+t.board.name}},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))])])],1)]),n("tools")],1)],1),n("section",{staticClass:"main-content"},[t.error?n("error-page"):n("router-view")],1),n("FooterContent")],1)]),n("div",{staticClass:"column is-narrow is-hidden-touch"},[n("live-recent")],1)])]),t.modalerror?n("error-modal"):t._e()],1)},s=[],i=n("d4ec"),c=n("bee2"),o=n("262e"),u=n("2caf"),l=n("9ab4"),p=n("1b40"),d=n("0613"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"liberty-navbar navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-menu is-active"},[r("div",{staticClass:"navbar-start"},[r("a",{staticClass:"navbar-item",attrs:{"active-class":"",href:"https://librewiki.net"}},[r("img",{attrs:{alt:"Logo",src:n("cf05")}}),t._v(t._s(t.settings.data.wikiName))]),r("a",{staticClass:"navbar-item",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%B5%9C%EA%B7%BC%EB%B0%94%EB%80%9C"}},[r("b-icon",{attrs:{icon:"sync"}}),r("span",{staticClass:"navbar-text"},[t._v("최근 바뀜")])],1),r("a",{staticClass:"navbar-item",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%9E%84%EC%9D%98%EB%AC%B8%EC%84%9C"}},[r("b-icon",{attrs:{icon:"random"}}),r("span",{staticClass:"navbar-text"},[t._v("임의 문서")])],1),r("a",{staticClass:"navbar-item",attrs:{href:"https://maps.librewiki.net"}},[r("b-icon",{attrs:{icon:"map"}}),r("span",{staticClass:"navbar-text"},[t._v("맵스")])],1),r("b-dropdown",[r("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[r("b-icon",{attrs:{icon:"comments"}}),r("span",{staticClass:"navbar-text"},[t._v("게시판")]),r("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),r("b-dropdown-item",{attrs:{"has-link":""}},[r("router-link",{attrs:{to:"/wiki"}},[t._v("위키방")])],1),r("b-dropdown-item",{attrs:{"has-link":""}},[r("router-link",{attrs:{to:"/freeboard"}},[t._v("자유게시판")])],1)],1),r("b-dropdown",[r("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[r("b-icon",{attrs:{icon:"wrench"}}),r("span",{staticClass:"navbar-text"},[t._v("도구")]),r("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),t.user.isAdmin?r("b-dropdown-item",{attrs:{"has-link":""}},[r("router-link",{attrs:{to:"/admin"}},[t._v("관리자 도구")])],1):t._e(),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("특수:올리기")}},[t._v("파일 업로드")])])],1),r("b-dropdown",[r("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[r("b-icon",{attrs:{icon:"question"}}),r("span",{staticClass:"navbar-text"},[t._v("도움말")]),r("b-icon",{staticClass:"navbar-caret",attrs:{icon:"caret-down"}})],1),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("도움말:문법 도움말")}},[t._v("문법 도움말")])]),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("도움말:Tex 문법")}},[t._v("TeX 문법")])])],1)],1),t.user.isInitialized?r("div",{staticClass:"user-items"},[t.user.isLoggedIn?[r("b-dropdown",[r("a",{staticClass:"navbar-item user-gravatar-wrapper",attrs:{slot:"trigger"},slot:"trigger"},[r("gravatar",{staticClass:"user-gravatar",attrs:{email:t.user.email}})],1),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("사용자:"+t.user.username)}},[t._v("사용자:"+t._s(t.user.username))])]),r("hr",{staticClass:"dropdown-divider"}),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("특수:환경설정")}},[t._v("환경설정")])]),r("hr",{staticClass:"dropdown-divider"}),r("b-dropdown-item",{attrs:{"has-link":""}},[r("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("로그아웃")])])],1),r("a",{staticClass:"navbar-item",attrs:{role:"button"},on:{click:t.logout}},[r("b-icon",{attrs:{pack:"fa",icon:"sign-out"}})],1)]:r("a",{staticClass:"navbar-item",on:{click:t.login}},[r("b-icon",{attrs:{pack:"fa",icon:"sign-in"}})],1)],2):t._e(),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"search-box-wrapper"},[r("b-field",[r("b-autocomplete",{attrs:{placeholder:"검색",icon:"search",data:t.autoCompleteItem,"max-height":"100%"},on:{select:function(e){return t.selected=e},input:function(e){return t.getMedaiwikiSearch(t.searchInput)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(e)}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),r("p",{staticClass:"control"},[r("button",{staticClass:"button",attrs:{"active-class":""},on:{click:t.go}},[r("b-icon",{attrs:{icon:"arrow-right"}})],1)]),r("p",{staticClass:"control"},[r("button",{staticClass:"button",attrs:{"active-class":""},on:{click:t.search}},[r("b-icon",{attrs:{icon:"search"}})],1)])],1)],1)])])])])},b=[],h=n("1da1"),m=(n("159b"),n("ac1f"),n("841c"),n("96cf"),n("e06a")),v=n.n(m),g=n("c1b7"),j=n("bc3a"),w=n.n(j),k=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.searchInput="",t.settings={data:{wikiname:"리브레 위키"}},t.autoCompleteItem=[""],t}return Object(c["a"])(n,[{key:"user",get:function(){return d["a"].state.user}},{key:"login",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(g["d"])(this.$route.fullPath);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["b"])();case 2:location.reload();case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"go",value:function(){this.searchInput&&(location.href="https://librewiki.net/index.php?title=special:search&search=".concat(encodeURIComponent(this.searchInput)))}},{key:"search",value:function(){this.searchInput&&(location.href="https://librewiki.net/index.php?title=special:search&search=".concat(encodeURIComponent(this.searchInput),"&fulltext=search"))}},{key:"getMedaiwikiSearch",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("https://librewiki.net/api.php",{params:{action:"query",list:"search",origin:window.origin,format:"json",srsearch:e,srlimit:10}});case 3:return n=t.sent,r=n.data,this.autoCompleteItem=[],r.query.search.forEach((function(t){return a.autoCompleteItem.push(t.title)})),t.abrupt("return");case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(p["c"]);k=Object(l["a"])([Object(p["a"])({components:{Gravatar:v.a}})],k);var y=k,x=y,C=(n("ed6b"),n("2877")),O=Object(C["a"])(x,f,b,!1,null,null,null),_=O.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"panel live-recent"},[n("div",{staticClass:"live-recent-header"},[n("div",{staticClass:"tabs is-toggle is-fullwidth"},[n("ul",[n("li",[n("a",{class:{"is-active":"DOCUMENT"===t.mode},attrs:{role:"button"},on:{click:function(e){t.mode="DOCUMENT",t.fetchLiveRecent()}}},[t._v("최근 바뀜")])]),n("li",[n("a",{class:{"is-active":"TOPIC"===t.mode},attrs:{role:"button"},on:{click:function(e){t.mode="TOPIC",t.fetchLiveRecent()}}},[t._v("최근 토론")])])])])]),n("div",{staticClass:"live-recent-content"},t._l(t.items,(function(e){return n("a",{key:e.key,staticClass:"panel-block",attrs:{href:e.to,title:e.text}},[n("span",{staticClass:"live-recent-time"},[t._v("["+t._s(e.timeString)+"]")]),e.isNew?n("span",{staticClass:"live-recent-tag"},[t._v("[New]")]):t._e(),n("span",{staticClass:"live-recent-title"},[t._v(t._s(e.text))])])})),0),t._m(0)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-recent-footer panel-block"},[n("a",{staticClass:"button is-primary is-small",attrs:{href:"https://librewiki.net/wiki/%ED%8A%B9%EC%88%98%3A%EC%B5%9C%EA%B7%BC%EB%B0%94%EB%80%9C"}},[t._v("더보기")])])}],I=(n("d81d"),n("c1df")),z=n.n(I),B="0|4|10|12|14|1600",N="1|3|5|7|9|11|13|15|2600|1601|1063|3604|3605",A=10,U=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.error=!1,t.pending=!1,t.items=[],t.mode="DOCUMENT",t}return Object(c["a"])(n,[{key:"fetchLiveRecent",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(window.innerWidth<769)){t.next=2;break}return t.abrupt("return");case 2:if(!this.pending){t.next=4;break}return t.abrupt("return");case 4:return this.pending=!0,t.prev=5,t.next=8,w.a.get("https://librewiki.net/api.php",{params:{action:"query",origin:window.origin,list:"recentchanges",rcprop:"title|timestamp",rcshow:"!bot|!redirect",rctype:"edit|new",rclimit:A,format:"json",rcnamespace:"DOCUMENT"===this.mode?B:N,rctoponly:!0}});case 8:e=t.sent,n=e.data,this.items=n.query.recentchanges.map((function(t){var e,n=z()(t.timestamp);e=n<z()().subtract(1,"day")?n.fromNow():n.format("HH[:]mm[:]ss");var r="new"===t.type;return{key:e+t.title,timeString:e,isNew:r,text:t.title,to:"https://librewiki.net/wiki/".concat(encodeURIComponent(t.title))}})),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](5),console.log(t.t0),this.error=!0;case 17:return t.prev=17,this.pending=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[5,13,17,20]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.fetchLiveRecent(),setInterval(this.fetchLiveRecent,3e4)}}]),n}(p["c"]);U=Object(l["a"])([p["a"]],U);var T=U,L=T,P=(n("136e"),Object(C["a"])(L,R,E,!1,null,null,null)),S=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},[t._v(t._s(t.error.message))])},q=[],$=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"error",get:function(){return d["a"].state.meta.error}}]),n}(p["c"]);$=Object(l["a"])([p["a"]],$);var D=$,W=D,F=Object(C["a"])(W,M,q,!1,null,null,null),H=F.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"errormodal",staticClass:"error-modal modal",class:{"is-active":"data.isactive"}},[n("div",{staticClass:"modal-background",on:{click:t.modalclose}}),n("div",{staticClass:"modal-content",attrs:{id:"ErrorModal"}},[n("span",[t._v(t._s(t.data.errormsg))])]),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.modalclose}})])},J=[],G=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.data={isactive:!1,errormsg:d["a"].state.modalError},t}return Object(c["a"])(n,[{key:"mounted",value:function(){this.data.isactive=!0}},{key:"modalclose",value:function(){this.data.isactive=!1,d["a"].commit("setErrormodal",null)}}]),n}(p["c"]);G=Object(l["a"])([p["a"]],G);var K=G,X=K,Q=(n("d882"),Object(C["a"])(X,V,J,!1,null,null,null)),Y=Q.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"liberty-footer main-footer"},[r("img",{staticClass:"designedbylibre",attrs:{src:n("9f3b")}})])}],et=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(p["c"]),nt=et,rt=(n("d2eb"),Object(C["a"])(nt,Z,tt,!1,null,null,null)),at=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.done?n("div",{staticClass:"liberty-notice"},[n("div",{attrs:{id:"sitenotice"}},[t.item.text?n("viewer",{attrs:{initialValue:t.item.text}}):t._e()],1)]):t._e()},it=[],ct=n("4ede"),ot=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.done=!1,t.item={title:"",pageid:0,text:""},t}return Object(c["a"])(n,[{key:"fetchSiteNotice",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("https://librewiki.net/api.php",{params:{action:"parse",origin:window.origin,page:"mediawiki:sitenotice",prop:"text",formatversion:"2",format:"json"}});case 3:return e=t.sent,n=e.data,this.item=n.parse,this.done=!0,t.abrupt("return");case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),this.done=!1;case 14:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.fetchSiteNotice()}}]),n}(p["c"]);ot=Object(l["a"])([Object(p["a"])({components:{Viewer:ct["Viewer"]}})],ot);var ut=ot,lt=ut,pt=(n("dfdd"),Object(C["a"])(lt,st,it,!1,null,null,null)),dt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liberty-tools level-right"},[n("div",{staticClass:"level-item"},[t.canWrite?n("button",{staticClass:"button",on:{click:t.openWriteModal}},[n("b-icon",{attrs:{icon:"edit"}}),n("span",[t._v("글쓰기")])],1):t._e()])])},bt=[],ht=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"canWrite",get:function(){return d["a"].state.canWrite}},{key:"openWriteModal",value:function(){d["a"].commit("setEditorOpen",!0)}}]),n}(p["c"]);ht=Object(l["a"])([p["a"]],ht);var mt=ht,vt=mt,gt=(n("ba20"),Object(C["a"])(vt,ft,bt,!1,null,null,null)),jt=gt.exports,wt=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"title",get:function(){return d["a"].state.board.display_name}},{key:"error",get:function(){return d["a"].state.meta.error}},{key:"board",get:function(){return d["a"].state.board}},{key:"modalerror",get:function(){return d["a"].state.modalError}}]),n}(p["c"]);wt=Object(l["a"])([Object(p["a"])({components:{NavBar:_,LiveRecent:S,ErrorPage:H,ErrorModal:Y,FooterContent:at,SiteNotice:dt,Tools:jt}})],wt);var kt=wt,yt=kt,xt=(n("5c0b"),Object(C["a"])(yt,a,s,!1,null,null,null)),Ct=xt.exports,Ot=n("9483");Object(Ot["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0");var _t=n("8c4f");r["a"].use(_t["a"]);var Rt=[{path:"/",redirect:"/wiki"},{path:"/auth",name:"Auth",component:function(){return n.e("auth").then(n.bind(null,"2fef"))}},{path:"/:boardName",name:"TopicList",component:function(){return Promise.all([n.e("topic~topic_list"),n.e("topic_list")]).then(n.bind(null,"c6f7"))}},{path:"/:boardName/:topicId",name:"Topic",component:function(){return Promise.all([n.e("topic~topic_list"),n.e("topic")]).then(n.bind(null,"3213"))}}],Et=new _t["a"]({mode:"history",base:"/",routes:Rt});Et.beforeEach(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d["a"].commit("setError",null),t.prev=1,a=[],d["a"].state.user.isInitialized||"Auth"===e.name||a.push(d["a"].dispatch("fetchUserInfo")),e.params.boardName&&a.push(d["a"].dispatch("fetchBoard",e.params.boardName)),t.next=7,Promise.all(a);case 7:r(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),d["a"].commit("setError",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n,r){return t.apply(this,arguments)}}());var It=Et,zt=n("289d");r["a"].use(zt["a"],{defaultIconPack:"fas"});var Bt=n("58ca");r["a"].config.productionTip=!1,z.a.locale("ko"),r["a"].prototype.$moment=z.a,r["a"].use(Bt["a"]),new r["a"]({router:It,store:d["a"],render:function(t){return t(Ct)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.a1ed2873.png"},d2eb:function(t,e,n){"use strict";n("dd08")},d5a8:function(t,e,n){},d882:function(t,e,n){"use strict";n("7be63")},dd08:function(t,e,n){},dfdd:function(t,e,n){"use strict";n("27a0")},ed6b:function(t,e,n){"use strict";n("d5a8")}});
//# sourceMappingURL=app.33686c91.js.map