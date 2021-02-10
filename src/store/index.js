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
	events: []
}

const mutations = {
	ADD_EVENT(state, payload) {
		state.events.push(payload)
	},

	SET_EVENTS(state, payload) {
		state.events = payload
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

	fetchEvents({commit}) {
		EventService.getEvents()
	 .then(response => {
		 commit('SET_EVENTS', response.data)
	 }).catch(err => {
		 console.log(err)
	 })
	}
	
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
