import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        name: "SNOWFLAKES",
        description: "James Smith",
        price: 100,
      },
      {
        name: "DREAMCATCHER",
        description: "Emily Johnson",
        price: 200,
        status: 0,
      },
      {
        name: "HEARTBEATS",
        description: "Benjamin Brown",
        price: 300,
        status: 0,
      },
      {
        name: "NIGHTMARES",
        description: "Sophia Lee",
        price: 400,
        status: 0,
      },
      {
        name: "AFTERMATHS",
        description: "Daniel White",
        price: 500,
        status: 0,
      },
      {
        name: "RAINDROPS",
        description: "Olivia Clark",
        price: 600,
        status: 0,
      },
      {
        name: "STARLIGHT",
        description: "Matthew Davis",
        price: 700,
        status: 0,
      },
      {
        name: "FIREWORKS",
        description: "Isabella Martinez",
        price: 800,
        status: 0,
      },
      {
        name: "BUTTERFLY",
        description: "Alexander Wilson",
        price: 900,
        status: 0,
      },
      {
        name: "MOONLIGHT",
        description: "Lily Moore",
        price: 1000,
        status: 0,
      },
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
