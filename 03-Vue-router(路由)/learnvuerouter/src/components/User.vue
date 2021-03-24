<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户内容</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.id }}</h2>

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.id
    },
  },
  // 组件被创建后调用
  created() {
    console.log('User created')
    document.title = '用户'
  },
  // 销毁后调用
  destroyed() {
    console.log('User destroyed')
  },
  methods: {
    btnClick() {
      // 所有的组件都继承着Vue类的原型
      console.log(this.$router)
      console.log(this.$route)

      this.test()
      console.log(this.name)
    },
  },
}
</script>

<style scoped></style>
