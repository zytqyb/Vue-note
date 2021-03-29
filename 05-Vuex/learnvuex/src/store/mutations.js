import { INCREMENT } from './mutations-types'
export default {
	// 方法
	[INCREMENT](state) {
		state.counter++
	},
	decrement(state) {
		state.counter--
	},
	incrementCount(state, count) {
		state.counter += count
		// state.counter += count.count
	},
	addStudent(state, stu) {
		state.students.push(stu)
	},
	updataInfo(state) {
		// state.info.name = 'zytqyb' // 被监听的
		// state.info['address'] = '洛杉矶' // 不被监听的
		// Vue.set(state.info, 'address', '洛杉矶')
		// delete state.info.age // 该删除方式做不到响应式
		Vue.delete(state.info, 'name') // 该删除方式可以做到响应式

	}
}