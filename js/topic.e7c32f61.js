(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["topic"],{1334:function(t,e,n){},3213:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-topic"},[n("div",{staticClass:"topic box level"},[n("router-link",{attrs:{to:"/"+t.board.name+"/"+t.topic.id}},[n("h3",{staticClass:"title topic-title"},[t._v(t._s(t.decodeTitle(t.topic.title)))])]),t.user.isAdmin?n("b-dropdown",{staticClass:"admin-tools is-right"},[n("button",{staticClass:"button is-small",attrs:{slot:"trigger"},slot:"trigger"},[t._v("관리자 메뉴")]),t.topic.is_hidden?n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.unhide}},[t._v("숨김 해제")]):n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.hide}},[t._v("숨기기")]),t.topic.is_suspended?n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.unsuspend}},[t._v("잠금 해제")]):n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.suspend}},[t._v("잠그기")]),t.topic.is_closed?n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.unclose}},[t._v("종료 취소")]):n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.close}},[t._v("종료")]),t.topic.is_pinned?n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.unpin}},[t._v("상단 고정 해제")]):n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.pin}},[t._v("상단 고정")])],1):t._e()],1),t._l(t.comments,(function(e,i){return n("topic-comment-card",{key:e.id,staticClass:"topic-content-card",attrs:{comment:t.comments[i]},on:{"update:comment":function(e){return t.$set(t.comments,i,e)}}})})),n("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.handleInfinite}},[n("div",{attrs:{slot:"no-more"},slot:"no-more"}),n("div",{attrs:{slot:"no-results"},slot:"no-results"})]),n("hr"),t.topic.is_closed?n("p",[t._v("이 주제는 종료되어 의견을 추가할 수 없습니다.")]):t.topic.is_suspended?n("p",[t._v("이 주제는 잠겨있어 의견을 추가할 수 없습니다.")]):t.user.isBlocked?n("p",[t._v("차단되어 있어 의견을 추가할 수 없습니다.")]):n("new-comment",{attrs:{"topic-id":t.topic.id,refresh:t.refresh}})],2)},r=[],a=n("2909"),s=n("1da1"),c=n("d4ec"),o=n("bee2"),u=n("262e"),d=n("2caf"),l=(n("b0c0"),n("99af"),n("96cf"),n("9ab4")),p=n("1b40"),m=n("e166"),h=n.n(m),f=n("7f5d"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card topic-comment-card"},[n("header",{staticClass:"card-header"},[n("div",{staticClass:"topic-comment-info"},[n("a",{attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("사용자:"+t.comment.author_name)}},[n("div",{staticClass:"topic-comment-author"},[t._v(t._s(t.comment.author_name))])]),n("a",{staticClass:"comment-author-link",attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("사용자토론:"+t.comment.author_name)}},[t._v("(토론)")])]),n("div",{staticClass:"topic-comment-tools"},[n("div",{staticClass:"topic-comment-date"},[t._v(t._s(t.$moment(t.comment.created_at).add(9,"hour").format("LLLL")))]),t.user.isAdmin?n("b-dropdown",{staticClass:"admin-tools is-right"},[n("button",{staticClass:"button is-small",attrs:{slot:"trigger"},slot:"trigger"},[n("b-icon",{attrs:{icon:"angle-down"}})],1),t.comment.is_hidden?[n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.unhide}},[t._v("숨기기 취소")]),n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.showHidden}},[t._v("보기")])]:n("b-dropdown-item",{staticClass:"admin-button",on:{click:t.hide}},[t._v("숨기기")]),n("b-dropdown-item",{staticClass:"admin-button",attrs:{href:"https://librewiki.net/wiki/"+encodeURIComponent("특수:차단/"+t.comment.author_name)}},[t._v("사용자 차단")])],2):t._e()],1)]),n("div",{staticClass:"card-comment",class:{"hidden-comment":t.comment.is_hidden}},[t.comment.content?n("viewer",{attrs:{initialValue:t.comment.content}}):n("p",[t._v("이 의견은 관리자에 의해 숨겨졌습니다.")])],1)])},v=[],w=n("0613"),k=(n("fe5f"),n("4ede")),O=function(t){Object(u["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(o["a"])(n,[{key:"user",get:function(){return w["a"].state.user}},{key:"hide",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["h"])(this.comment.id);case 2:e=t.sent,this.$emit("update:comment",e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unhide",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["p"])(this.comment.id);case 2:e=t.sent,this.$emit("update:comment",e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"showHidden",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["c"])(this.comment.id,!0);case 2:e=t.sent,this.$emit("update:comment",e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(p["c"]);Object(l["a"])([Object(p["b"])()],O.prototype,"comment",void 0),O=Object(l["a"])([Object(p["a"])({components:{Viewer:k["Viewer"]}})],O);var g=O,_=g,j=(n("ef99"),n("2877")),y=Object(j["a"])(_,b,v,!1,null,null,null),C=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:{"is-active":t.editorOpen}},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-card"},[n("div",{staticClass:"modal-card-head"},[n("label",{staticClass:"modal-card-title",attrs:{id:"label_newtopic"}},[t._v("새 의견 추가하기")]),n("button",{staticClass:"delete",on:{click:t.modalclose}})]),n("div",{staticClass:"modal-card-body"},[n("div",{staticClass:"new-topic"},[n("div",{staticClass:"field"},[n("editor",{ref:"toastuiEditor",attrs:{options:t.editorOptions,initialEditType:"wysiwyg"}})],1)])]),n("div",{staticClass:"modal-card-foot"},[n("div",{staticClass:"field"},[t.user.isLoggedIn?t._e():n("span",[t._v("⚠️현재 로그인되어 있지 않습니다. 글 작성 시 IP가 노출됩니다.")]),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link",on:{click:t.handleSubmit}},[t._v("작성")])])])])])])},R=[],I=(n("d3b7"),n("ac1f"),n("1276"),n("f513"),n("af52"),function(t){Object(u["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.editorOptions={usageStatistics:!1,initialEditType:"wysiwyg",hideModeSwitch:!0,language:"ko-KR"},t}return Object(o["a"])(n,[{key:"user",get:function(){return w["a"].state.user}},{key:"toBase64",value:function(t){return new Promise((function(e,n){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return e(i.result.split(",")[1])},i.onerror=function(t){return n(t)}}))}},{key:"mounted",value:function(){var t=this;this.$refs.toastuiEditor.invoke("addHook","addImageBlobHook",function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n,i){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(n.size>1e7)){e.next=5;break}return w["a"].commit("setErrormodal","업로드할 파일 용량은 10MB까지만 가능합니다."),e.abrupt("return");case 5:return e.t0=f["l"],e.t1=n.name,e.next=9,t.toBase64(n);case 9:return e.t2=e.sent,e.next=12,(0,e.t0)(e.t1,e.t2);case 12:r=e.sent,a=r.path,i("https://image.librewiki.net/".concat(a));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"handleSubmit",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs.toastuiEditor.invoke("getMarkdown"),t.next=3,Object(f["k"])(this.topicId,e);case 3:this.$refs.toastuiEditor.invoke("reset"),this.refresh(),this.modalclose();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"editorOpen",get:function(){return w["a"].state.editorOpen}},{key:"modalclose",value:function(){w["a"].commit("setEditorOpen",!1)}}]),n}(p["c"]));Object(l["a"])([Object(p["b"])()],I.prototype,"topicId",void 0),Object(l["a"])([Object(p["b"])()],I.prototype,"refresh",void 0),I=Object(l["a"])([Object(p["a"])({components:{Editor:k["Editor"]}})],I);var $=I,E=$,D=(n("c45d"),Object(j["a"])(E,x,R,!1,null,null,null)),L=D.exports,S=n("c2bf"),B=function(t){Object(u["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.topic={id:0,board_id:0,title:"",is_closed:!1,is_suspended:!1,is_hidden:!1,is_pinned:!1,author_id:0,author_name:"",created_at:"",updated_at:""},t.comments=[],t.busy=!1,t.infiniteId=+new Date,t}return Object(o["a"])(n,[{key:"user",get:function(){return w["a"].state.user}},{key:"board",get:function(){return w["a"].state.board}},{key:"decodeTitle",value:function(t){return S["AllHtmlEntities"].decode(t)}},{key:"refresh",value:function(){this.infiniteId+=1}},{key:"refreshComment",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.comments.indexOf(e),t.next=3,Object(f["d"])(this.topic.id,n,1);case 3:i=t.sent[0],this.$set(this.comments,n,i);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"handleInfinite",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=10,i=parseInt(this.$route.params.topicId),t.next=4,Object(f["d"])(i,this.comments.length,n);case 4:r=t.sent,r.length&&(s=this.comments).push.apply(s,Object(a["a"])(r)),r.length<n?e.complete():e.loaded();case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"fetchData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.busy=!0,t.prev=1,e=parseInt(this.$route.params.topicId),t.next=5,Object(f["e"])(e);case 5:n=t.sent,this.topic=n,this.checkCanWrite(n),localStorage.setItem("topic-last-visited.".concat(n.id),(new Date).toISOString()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),w["a"].commit("setError",t.t0);case 14:return t.prev=14,this.busy=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"checkCanWrite",value:function(t){1==t.is_closed||1==t.is_suspended||1==t.is_hidden||1==w["a"].state.user.isBlocked?w["a"].commit("setCanWrite",!1):w["a"].commit("setCanWrite",!0)}},{key:"hide",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["i"])(this.topic.id);case 2:this.$router.push("/".concat(this.board.name));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unhide",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["q"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"suspend",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["n"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unsuspend",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["s"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"close",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["a"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unclose",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["o"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"pin",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["j"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unpin",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["r"])(this.topic.id);case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(p["c"]);Object(l["a"])([Object(p["d"])("$route.params",{immediate:!0})],B.prototype,"fetchData",null),B=Object(l["a"])([Object(p["a"])({components:{TopicCommentCard:C,NewComment:L,InfiniteLoading:h.a},metaInfo:function(){var t=this.board.display_name,e=this.decodeTitle(this.topic.title);return{title:"".concat(e," - ").concat(t)}}})],B);var T=B,H=T,A=(n("8b48"),Object(j["a"])(H,i,r,!1,null,null,null));e["default"]=A.exports},"33b3":function(t,e,n){},"702c":function(t,e,n){},"8b48":function(t,e,n){"use strict";n("1334")},c45d:function(t,e,n){"use strict";n("33b3")},ef99:function(t,e,n){"use strict";n("702c")},fe5f:function(t,e,n){}}]);
//# sourceMappingURL=topic.e7c32f61.js.map