

<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" active-class="active">关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="/user/ + userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path: '/profile', query: {name: 'zytqyb', age: 18, height: 1.88}}">档案</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan',
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
  },
}
</script>

<style scoped>
.active {
  color: #f00;
}
.router-link-active {
  color: #f00;
}
</style>
