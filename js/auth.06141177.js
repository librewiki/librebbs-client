(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"2fef":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-auth"},[e._v(e._s(e.error))])},n=[],u=r("1da1"),c=r("d4ec"),s=r("bee2"),i=r("262e"),o=r("2caf"),f=(r("96cf"),r("ac1f"),r("5319"),r("9ab4")),p=r("1b40"),h=r("c1b7"),b=r("0613"),l=function(e){Object(i["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(c["a"])(this,r),e=t.apply(this,arguments),e.error="",e}return Object(s["a"])(r,[{key:"beforeMount",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("string"===typeof this.$route.query.code){e.next=3;break}return this.error="로그인 중 에러가 발생했습니다.",e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(h["a"])(this.$route.query.code);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](3),this.error="로그인 중 에러가 발생했습니다.",e.abrupt("return");case 12:b["a"].dispatch("fetchUserInfo"),"string"===typeof this.$route.query.state?this.$router.replace(this.$route.query.state):this.$router.replace("/");case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(p["c"]);l=Object(f["a"])([Object(p["a"])({name:"Auth",metaInfo:function(){return{title:"로그인"}}})],l);var v=l,d=v,j=r("2877"),w=Object(j["a"])(d,a,n,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=auth.06141177.js.map