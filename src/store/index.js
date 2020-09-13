import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkerHistory: []
  },
  getters: {
    checkerHistory: state => state.checkerHistory
  },
  mutations: {
    SET_CHECKER_HISTORY(state, list) {
      state.checkerHistory = list;
    },
    ADD_CHECKED_WORD(state, word) {
      state.checkerHistory.unshift(word);
      if (state.checkerHistory.length > 5) {
        state.checkerHistory.pop();
      }
    }
  },
  actions: {
    getCheckerHistory({ commit }, array) {
      commit("SET_CHECKER_HISTORY", array);
    },
    addCheckedWordToHistory({ commit }, word) {
      commit("ADD_CHECKED_WORD", word);
    }
  },
  modules: {}
});
