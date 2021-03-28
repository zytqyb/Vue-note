import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      { id: 110, name: 'zyt', age: 18 },
      { id: 111, name: 'zxc', age: 24 },
      { id: 112, name: 'qwe', age: 19 },
      { id: 113, name: 'asd', age: 20 },
    ],
  },
  mutations: {
    // 方法
    increment(state) {
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
    }
    
  },
  actions: {},
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(a => a.age > 18)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(a => a.age > age)
      }
    },
  },
  modules: {},
})

// 3.导出store
export default store
