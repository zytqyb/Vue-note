<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好'
    }
  },
  // 组件被创建后调用
  // created() {
  //   console.log('created');
  //   document.title = '首页'
  // },
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
