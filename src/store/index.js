import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkerHistory: [
      {
        text: "Tenet",
        palindrome: true
      },
      {
        text: "mama",
        palindrome: false
      },
      {
        text: "0o oko w OKO o0",
        palindrome: true
      },
      {
        text: "kajak",
        palindrome: true
      },
      {
        text: "KABOOM",
        palindrome: false
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
