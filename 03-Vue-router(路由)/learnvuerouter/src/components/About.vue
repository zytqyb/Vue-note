<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  // 组件被创建后调用
  created() {
    console.log('About created')
    document.title = '关于'
  },
  // 销毁后调用
  destroyed() {
    console.log('About destroyed')
  },
}
</script>

<style scoped></style>
