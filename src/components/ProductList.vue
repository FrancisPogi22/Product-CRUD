<template>
  <section id="product">
    <div class="wrapper">
      <div class="product-list-con">
        <div class="product-header">
          <h2>Product List</h2>
          <button @click="addProduct()">Add Product</button>
        </div>
        <div class="product-widget-con">
          <div
            class="product-widget"
            v-for="(product, index) in productList"
            :key="index"
          >
            {{ product.name }}
            {{ product.description }}
            {{ product.price }}
            <div class="btn-con">
              <button @click="editProduct()" class="edit">Edit</button>
            </div>
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
#product {
  display: flex;
}

#product .wrapper {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}

#product .product-list-con {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
}

#product .product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#product .product-widget-con {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

#product .product-widget-con .product-widget {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 4px;
}

#product .btn-con {
  display: flex;
  gap: 10px;
  align-items: center;
}

#product .edit {
  background: #eab308;
}

button {
  border: none;
  background: #673de6;
  padding: 10px 14px;
  color: #ffffff;
  border-radius: 4px;
}
</style>