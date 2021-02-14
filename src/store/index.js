import Vue from "vue";
import Vuex from "vuex";
import * as user from './modules/user'
import * as event from './modules/event'
import * as notification from './modules/notifications'

Vue.use(Vuex)

const state = {
  categories: [
    "sustainability",
    "nature",
    "animal welfare",
    "housing",
    "education",
    "food",
    "community"
  ]
}

export default new Vuex.Store({
  state,
  modules: {
		user,
		event,
		notification
	}
});
