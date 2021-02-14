import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
	events: [],
	event: {},
	eventsTotal: 0
}

export const mutations = {
	ADD_EVENT(state, payload) {
		state.events.push(payload)
	},

	SET_EVENTS(state, payload) {
		state.events = payload
	},

	SET_EVENT(state, payload) {
		state.event = payload
	},

	SET_EVENTS_TOTAL(state, payload) {
		state.eventsTotal = payload
	}
}

export const actions = {
	createEvent({ commit, rootState  }, payload) { // (params context) rootState, rootGetters -> access global 
		console.log(`User creating Event is ${rootState.user.user.name}`)
		return EventService.postEvent(payload).then(() => {
			commit('ADD_EVENT', payload)
		}).catch((err) => {
			console.log(err)
		})
	},

	fetchEvents({ commit }, { perPage, page }) {
		EventService.getEvents(perPage, page).then(response => {
				commit(
					'SET_EVENTS_TOTAL',
					parseInt(response.headers['x-total-count'])
				)
				commit('SET_EVENTS', response.data)
			})
			.catch(error => {
				console.log('There was an error:', error.response)
			})
	},

	fetchEvent({commit, getters}, id) {

		let event = getters.getEventById(id)

		if(event) {
			commit('SET_EVENT', event)
		}else {
			EventService.getEventgit(id)
			.then(response => {
				commit('SET_EVENT', response.data)
				console.log(response.data)
			}).catch(err => console.log(err))
		}
	},
}

export const getters = {
	getEventById: state => id => {
		return state.events.find(event => event.id === id)
	}
}