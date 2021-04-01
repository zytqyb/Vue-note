<template>
  <div id="app">
    <div>{{ result }}</div>
    <h2>------------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data() {
    return {
      result: '',
    }
  },
  components: {
    HelloWorld,
  },
  created() {
    axios({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    }).then(res => {
      // console.log(res)
      this.result = res
    })
  },
}
</script>

<style>
</style>
