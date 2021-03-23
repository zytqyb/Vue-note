// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载写法
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'news',
      },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage,
      },
    ],
  },
  {
    path: '/user/:id',
    component: User,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history', // 改为history模式,
  linkactiveClass: 'active',
})

// 3.将router对象传入到Vue实例中
export default router
