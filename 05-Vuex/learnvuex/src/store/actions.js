export default {
	// aUpdataInfo(context, payload) {
	//   setTimeout(() => {
	//     context.commit('updataInfo')
	//     console.log(payload.message)
	//     payload.success()
	//   }, 1000)
	// },
	aUpdataInfo(context, payload) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				context.commit('updataInfo')
				console.log(payload)
				resolve('完成了提交')
			}, 1000)
		})
	},
}