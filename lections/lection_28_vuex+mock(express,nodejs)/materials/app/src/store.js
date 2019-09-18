import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Valera'
  },
  mutations: {
    setName(state, value) {
      console.log('mutation');
      state.name = value;
      console.log(state, 'state');
    }
  },
  actions: {
    asyncSetName(context) {
      fetch('http://localhost:3000/persons')
        .then(data => data.json())
        .then(data => context.commit('setName', data));
    }
  }
})
