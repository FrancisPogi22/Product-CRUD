<template>
  <section id="product">
    <div class="wrapper">
      <div class="product-list-con">
        <div class="product-header">
          <button @click="showAddForm = true">Add Product</button>
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

    <div v-if="showAddForm" class="add-product-form">
      <div class="add-product-header">
        <h2>Add Product</h2>
        <button @click="closeForm">X</button>
      </div>
      <form @submit.prevent="addProduct" class="form-container">
        <div class="form-group">
          <label for="name">Product Name:</label>
          <input
            type="text"
            id="name"
            v-model="newProduct.name"
            placeholder="Enter product name"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <input
            type="text"
            id="description"
            v-model="newProduct.description"
            placeholder="Enter description"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            v-model.number="newProduct.price"
            placeholder="Enter price"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAddForm: false,
      newProduct: {
        name: "",
        description: "",
        price: 0,
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.newProduct);
      this.clearForm();
      this.showAddForm = false;
    },
    editProduct() {
      // Handle Edit Product
    },
    clearForm() {
      this.newProduct = {
        name: "",
        description: "",
        price: 0,
      };
    },
    closeForm() {
      this.showAddForm = false;
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
.add-product-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f8f9fa;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  width: 400px;
  border-radius: 8px;
}

.add-product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.add-product-header h2 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.add-product-header button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  color: #999;
}

.add-product-header button:hover {
  color: #000;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="number"]:focus {
  outline: none;
  border-color: #007bff;
}

button[type="submit"] {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
