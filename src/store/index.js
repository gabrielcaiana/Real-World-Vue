import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService'

Vue.use(Vuex);

const state = {
  user: {
    id: "abc123",
    name: "Gabriel Caiana"
  },
  categories: [
    "sustainability",
    "nature",
    "animal welfare",
    "housing",
    "education",
    "food",
    "community"
  ],
	events: [],
	event: {},
	eventsTotal: 0
}

const mutations = {
	ADD_EVENT(state, payload) {
		state.events.push(payload)
	},

	SET_EVENTS(state, payload) {
		state.events = payload
	},

	SET_EVENT(state, payload) {
		state.event = payload
	},

	SET_EVENTSTOTAL(state, payload) {
		state.eventsTotal = payload
	}
}

const actions = {
	createEvent({ commit }, payload) {
		return EventService.postEvent(payload)
		.then(() => {
			commit('ADD_EVENT', payload.data)
		}).catch((err) => {
			console.log(err)
		})
	},

	fetchEvents({commit}, {perPage, page}) {
		EventService.getEvents(perPage, page)
	 .then(response => {
		 commit('SET_EVENTS', response.data)
		 console.log(`Total events are ${response.headers['x-total-count']}`)
	 }).catch(err => {
		 console.log(err)
	 })
	},

	fetchEvent({commit}, id) {
		EventService.getEventgit(id)
		.then(response => {
			commit('SET_EVENT', response.data)
			console.log(response.data)
		}).catch(err => console.log(err))
	},

	totalPages({commit}) {
		EventService.getEvents()
		.then((response) => {
			return commit('SET_EVENTSTOTAL', parseInt(response.data.length))
		}).catch(err => console.log(err))
	}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
