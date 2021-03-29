import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutations-types'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象


const state = {
  counter: 0,
  students: [
    { id: 110, name: 'zyt', age: 18 },
    { id: 111, name: 'zxc', age: 24 },
    { id: 112, name: 'qwe', age: 19 },
    { id: 113, name: 'asd', age: 20 },
  ],
  info: {
    name: 'Kobe',
    age: 40,
    height: 1.98,
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  },
})

// 3.导出store
export default store
