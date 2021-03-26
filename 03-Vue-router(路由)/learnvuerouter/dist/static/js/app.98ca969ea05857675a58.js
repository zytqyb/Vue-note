webpackJsonp([4],{

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("/5sW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App',
  data: function data() {
    return {
      userId: 'zhangsan'
    };
  },

  methods: {
    homeClick: function homeClick() {
      this.$router.push('/home');
    },
    aboutClick: function aboutClick() {
      this.$router.push('/about');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c9306708","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-link',{attrs:{"to":"/home"}},[_vm._v("首页")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/about"}},[_vm._v("关于")]),_vm._v(" "),_c('router-link',{attrs:{"to":/user/ + _vm.userId}},[_vm._v("用户")]),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: App_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("Pg02")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c9306708"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/index.js
// 配置路由相关信息


// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载写法
var Home = function Home() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "lO7g"));
};
var About = function About() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "c27y"));
};
var User = function User() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "jyJz"));
};

// 1.通过Vue.use(插件),安装插件
vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

// 2.创建VueRouter对象
var routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/user/:abc',
  component: User
}, {
  path: '/about',
  component: About
}];

var router = new vue_router_esm["a" /* default */]({
  // 配置路由和组件之间的映射关系
  routes: routes,
  mode: 'history', // 改为history模式,
  linkactiveClass: 'active'
});

// 3.将router对象传入到Vue实例中
/* harmony default export */ var src_router = (router);
// CONCATENATED MODULE: ./src/main.js




vue_runtime_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_runtime_esm["a" /* default */]({
  el: '#app',
  router: src_router,
  render: function render(h) {
    return h(src_App);
  }
});

/***/ }),

/***/ "Pg02":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.98ca969ea05857675a58.js.map