<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好',
      path: '/home/news',
    }
  },
  // 组件被创建后调用
  created() {
    console.log('Home created')
    document.title = '首页'
  },
  // 销毁后调用
  destroyed() {
    console.log('Home destroyed')
  },

  // 以下俩个函数只有使用了keey-alive保存了状态时,才有效
  // 界面进入活跃状态执行
  activated() {
    console.log('首页进入活跃')
    this.$router.push(this.path)
  },
  // 界面不活跃状态执行
  deactivated() {
    console.log('首页不在活跃')
  },

  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }

  // // 组件被挂载到整个dom后调用
  // mounted() {
  //   console.log('mounted');
  // },
  // updated() {
  //   console.log('updated');
  // }
}
</script>

<style scoped></style>


