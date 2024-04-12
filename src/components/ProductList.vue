<template>
  <section id="product">
    <div class="wrapper">
      <div class="product-list-con">
        <div class="product-header">
          <button @click="addProduct()">Add Product</button>
        </div>
        <div
          class="product-widget"
          v-for="(product, index) in productList"
          :key="index"
        >
          {{ product.name }}
          {{ product.description }}
          {{ product.price }}
          <div class="btn-con">
            <button @click="editProduct()">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    addProduct() {
      // Add Product
    },
    editProduct() {
      // Edit Product
    },
  },
  computed: {
    productList() {
      return this.$store.getters.productList;
    },
  },
};
</script>

<style scoped>
</style>