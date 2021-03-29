import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state: {
      name: '张三'
    },
    mutations:{
      updateName(state, payload) {
        state.name = payload
      }
    },
    getters: {
      fullname(state) {
        return state.name + '1111'
      },
      fullname2(state, getters) {
        return getters.fullname + '2222'
      },
      fullname3(state, getters, rootState) {
        return getters.fullname2 + rootState.counter
      }
    },
    actions: {
      aUpdateName(context) {
        setTimeout(() => {
          context.commit('updateName', '王五')
        }, 1000)
      }
    },
    
}

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      state.counter += count
      // state.counter += count.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updataInfo(state) {
      // state.info.name = 'zytqyb' // 被监听的
      // state.info['address'] = '洛杉矶' // 不被监听的
      // Vue.set(state.info, 'address', '洛杉矶')
      // delete state.info.age // 该删除方式做不到响应式
      Vue.delete(state.info, 'name') // 该删除方式可以做到响应式

    }
  },
  actions: {
    // aUpdataInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updataInfo')
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // },
    aUpdataInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updataInfo')
          console.log(payload)
          resolve('完成了提交')
        }, 1000)
      })
    },
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter((a) => a.age > 18)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return (age) => {
        return state.students.filter((a) => a.age > age)
      }
    },
  },
  modules: {
    a: moduleA
  },
})

// 3.导出store
export default store
