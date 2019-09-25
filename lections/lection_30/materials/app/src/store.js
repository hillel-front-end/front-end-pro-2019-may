import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Valera"
  },
  getters: {
    getName(state) {
      return state.name + ' Welcome';
    }
  },
  mutations: {
    setName() {
      console.log('setName');
    }
  },
  actions: {
    asyncSetName() {
      console.log('setName');
    }
  }
})
