import EventService from "@/services/EventService";

export const namespaced = true;

export const state = {
  events: [],
  event: {},
  perPage: 3,
  eventsTotal: 0,
};

export const mutations = {
  ADD_EVENT(state, payload) {
    state.events.push(payload);
  },

  SET_EVENTS(state, payload) {
    state.events = payload;
  },

  SET_EVENT(state, payload) {
    state.event = payload;
  },

  SET_EVENTS_TOTAL(state, payload) {
    state.eventsTotal = payload;
  },
};

export const actions = {
  createEvent({ commit, dispatch, rootState }, payload) {
    // (params context) rootState, rootGetters -> access global
    console.log(`User creating Event is ${rootState.user.user.name}`);
    return EventService.postEvent(payload)
      .then(() => {
        commit("ADD_EVENT", payload);
        const notification = {
          type: "success",
          message: "Your event has been created!",
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: `There as a problem creating your event ${error.message}`,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },

  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then((response) => {
        commit("SET_EVENTS_TOTAL", parseInt(response.headers["x-total-count"]));
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: `There as a problem fetching events: ${error.message}`,
        };
        dispatch("notification/add", notification, { root: true });
      });
  },

  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id);

    if (event) {
      commit("SET_EVENT", event);
      return event;
    } else {
      return EventService.getEvent(id).then((response) => {
        commit("SET_EVENT", response.data);
        return response.data;
      });
    }
  },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
