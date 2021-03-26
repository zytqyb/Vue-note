import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Categoty = () => import('../views/categoty/Categoty.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

// 2. 创建路由
const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/categoty',
		component: Categoty,
	},
	{
		path: '/cart',
		component: Cart,
	},
	{
		path: '/profile',
		component: Profile,
	},
]

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history', // 改为history模式
})

export default router
