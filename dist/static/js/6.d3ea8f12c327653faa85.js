webpackJsonp([6],{EV1k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"login",beforeRouteEnter:function(e,t,n){n(function(e){var t=e.$local.fetch("easy-mock");console.log(e),t.login&&e.$router.push("/")})},methods:{sendLogin:function(){var e=this.$refs.userInput.value,t=this.$route.query.redirect;e?(this.$local.save("easy-mock",{login:!0,userName:e}),this.$router.push({path:"/"+t})):alert("请输入您的用户名!")}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"login-form"},[n("form",[n("label",{staticClass:"clearfix"},[n("span",[e._v("用户名")]),e._v(" "),n("input",{ref:"userInput",attrs:{type:"text",placeholder:"请输入用户名",autocomplete:"on"}})]),e._v(" "),e._m(0),e._v(" "),n("label",{staticClass:"clearfix"},[n("button",{on:{click:function(t){return t.preventDefault(),e.sendLogin(t)}}},[e._v("登录")])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"clearfix"},[t("span",[this._v("密 码")]),this._v(" "),t("input",{attrs:{type:"text",placeholder:"请输入密码",autocomplete:"on"}})])}]};var s=n("VU/8")(a,r,!1,function(e){n("lrmy")},"data-v-677d99af",null);t.default=s.exports},lrmy:function(e,t){}});
//# sourceMappingURL=6.d3ea8f12c327653faa85.js.map