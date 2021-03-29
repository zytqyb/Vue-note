export default {
	state: {
		name: '张三'
	},
	mutations:{
		updateName(state, payload) {
			state.name = payload
		}
	},
	getters: {
		fullname(state) {
			return state.name + '1111'
		},
		fullname2(state, getters) {
			return getters.fullname + '2222'
		},
		fullname3(state, getters, rootState) {
			return getters.fullname2 + rootState.counter
		}
	},
	actions: {
		aUpdateName(context) {
			setTimeout(() => {
				context.commit('updateName', '王五')
			}, 1000)
		}
	},
	
}