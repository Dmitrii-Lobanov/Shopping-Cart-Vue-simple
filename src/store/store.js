import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { id: 1, name: "Вещь", image: "//placehold.it/200", price: 999 },
      { id: 2, name: "Штука", image: "//placehold.it/200", price: 1499 },
      { id: 3, name: "Едрена", image: "//placehold.it/200", price: 499 },
      { id: 4, name: "Хрень", image: "//placehold.it/200", price: 299 }
    ],
    inCart: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART(state, id) {
      state.inCart.push(id);
    },
    REMOVE_FROM_CART(state, idx) {
      state.inCart.splice(idx, 1);
    }
  },
  actions: {
    addToCart({commit}, id) {
      commit('ADD_TO_CART', id);
    },
    removeFromCart({commit},idx) {
      commit('REMOVE_FROM_CART', idx);
    }
  }
})