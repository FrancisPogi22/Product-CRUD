import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        title: "SNOWFLAKES",
        desciption: "James Smith",
        price: 100,
      },
      {
        title: "DREAMCATCHER",
        desciption: "Emily Johnson",
        price: 200,
        status: 0,
      },
      {
        title: "HEARTBEATS",
        desciption: "Benjamin Brown",
        price: 300,
        status: 0,
      },
      {
        title: "NIGHTMARES",
        desciption: "Sophia Lee",
        price: 400,
        status: 0,
      },
      {
        title: "AFTERMATHS",
        desciption: "Daniel White",
        price: 500,
        status: 0,
      },
      {
        title: "RAINDROPS",
        desciption: "Olivia Clark",
        price: 600,
        status: 0,
      },
      {
        title: "STARLIGHT",
        desciption: "Matthew Davis",
        price: 700,
        status: 0,
      },
      {
        title: "FIREWORKS",
        desciption: "Isabella Martinez",
        price: 800,
        status: 0,
      },
      {
        title: "BUTTERFLY",
        desciption: "Alexander Wilson",
        price: 900,
        status: 0,
      },
      {
        title: "MOONLIGHT",
        desciption: "Lily Moore",
        price: 1000,
        status: 0,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
