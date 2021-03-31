import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})

// // 1.基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get',
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=pop&page=3',
//   method: 'get',
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1,
//   },
// }).then(res => {
//   console.log(res)
// })

// 2.使用全局的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
// axios.defaults.timeout = 5000

// 3.axios发送并发请求
// axios
//   .all([
//     axios({
//       url: '/home/multidata',
//     }),
//     axios({
//       url: '/home/data',
//       params: {
//         type: 'sell',
//         page: 5,
//       },
//     }),
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1)
//       console.log(res2)
//     })
//   )

// axios({
//   url: '/category',
// }).then((res) => {
//   console.log(res);
// })

// 4.创建对应的axios的实例
const instancel = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000,
})

instancel({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
})

instancel({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1,
  },
}).then(res => {
  console.log(res)
})

const instancel2 = axios({
  baseURL: 'http://222.111.33.33:8000',
  timeout: 10000,
})
