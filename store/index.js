import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    category: []
  },
  mutations: {
    initCategory(state, data){
      state.category = data;
    }
  },
  actions: {
    async nuxtServerInit() {
      let category = await axios.get('http://localhost:9999/rest/category/all');
      this.commit('initCategory', category.data.data)
    },
  },
});

export default store