import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        "name": "SUNRISE",
        "description": "Grace Roberts",
        "price": 1200,
      },
      {
        "name": "SUNSET",
        "description": "Lucas Taylor",
        "price": 1300,
      },
      {
        "name": "WILDFLOWERS",
        "description": "Ava Anderson",
        "price": 1400,
      },
      {
        "name": "OCEAN BREEZE",
        "description": "Noah Garcia",
        "price": 1500,
      },
      {
        "name": "MOUNTAIN MIST",
        "description": "Mia Hernandez",
        "price": 1600,
      },
      {
        "name": "FOREST WHISPERS",
        "description": "Elijah Perez",
        "price": 1700,
      },
      {
        "name": "DESERT DREAMS",
        "description": "Charlotte Diaz",
        "price": 1800,
      },
      {
        "name": "CITY LIGHTS",
        "description": "William Rivera",
        "price": 1900,
      },
      {
        "name": "SILENT STARS",
        "description": "Harper Scott",
        "price": 2000,
      },
      {
        "name": "GARDEN GLOW",
        "description": "Jackson Carter",
        "price": 2100,
      }
    ],
  },
  getters: {
    productList: (state) => {
      return state.productList;
    },
  },
  mutations: {
    removeItem: (state, index) => {
      state.productList.splice(index, 1);
    },
  },
  actions: {
    deleteProduct({ commit }, index) {
      commit("removeItem", index);
    },
  },
  modules: {},
});
