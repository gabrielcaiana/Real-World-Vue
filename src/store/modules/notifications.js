export const namespaced = true

export const state = {
	notifications: []
}

let nextId = 1

export const mutations = {
	PUSH(state, payload) {
		state.notifications.push({
			...payload,
			id: nextId++
		})
	},

	DELETE(state, payload) {
		state.notifications = state.notifications.filter(notification => {
			notification.id != payload.id
		})
	}
}

export const actions = {
	add({ commit }, payload) {
		commit('PUSH', payload)
	},

	remove({ commit }, payload ) {
		commit('DELETE', payload)
	}
}
