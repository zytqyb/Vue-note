<template>
  <div id="app">
    <h2>----- APP内容 -----</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----- APP内容: getter相关内容 -----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(8) }}</h2>
    <h2>----- HelloVuex内容 -----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',

  data() {
    return {
      message: '我是App组件',
    }
  },
  components: {
    HelloVuex,
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // payload: 负载
      // 1.普通的提交封装
      this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装]
      // this.$store.commit({
      //   type: 'incrementCount',
      //   count,
        
      // })
    },
    addStudent() {
      const stu = { id: 114, name: 'cvb', age: 25 }
      this.$store.commit('addStudent', stu)
    }
  },
  computed: {
    // more20stu() {
    //   return this.$store.state.students.filter(a => a.age > 18)
    // }
  },
}
</script>

<style>
</style>
