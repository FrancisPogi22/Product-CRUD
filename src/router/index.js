//router/index.php

import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import addProduct from "../components/ProductAddForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: addProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
