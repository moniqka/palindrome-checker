import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkerHistory: [
      {
        text: "Tenet",
        palindrom: true
      },
      {
        text: "mama",
        palindrom: false
      },
      {
        text: "0o oko w OKO o0",
        palindrom: true
      },
      {
        text: "kajak",
        palindrom: true
      },
      {
        text: "KABOOM",
        palindrom: false
      }
    ]
  },
  getters: {
    checkerHistory: state => state.checkerHistory
  },
  mutations: {
    SET_CHECKER_HISTORY(state, list) {
      state.checkerHistory = list;
    }
  },
  actions: {
    getCheckerHistory({ commit }, array) {
      commit("SET_CHECKER_HISTORY", array);
    }
  },
  modules: {}
});
