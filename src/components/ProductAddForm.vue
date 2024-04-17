<template>
  <section id="product">
    <div class="wrapper">
      <div class="product-list-con">
        <div class="product-table-container">
          <table class="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in productList" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>${{ product.price.toFixed(2) }}</td>
                <td><button>Edit</button> <button>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <form @submit.prevent="addProduct" class="add-product-form">
          <div class="form-group">
            <label for="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              v-model="newProduct.name"
              required
              class="input-field"
            />
          </div>
          <div class="form-group">
            <label for="productDescription">Description:</label>
            <input
              type="text"
              id="productDescription"
              v-model="newProduct.description"
              required
              class="input-field"
            />
          </div>
          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input
              type="number"
              id="productPrice"
              v-model.number="newProduct.price"
              required
              class="input-field"
            />
          </div>
          <button
            @click="showSuccessMessage"
            type="submit"
            class="submit-button"
          >
            ADD PRODUCT
          </button>
          <transition name="fade">
            <p v-if="show" class="success-message">
              Product added successfully!
            </p>
          </transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newProduct: {
        name: "",
        description: "",
        price: 0,
      },
      show: false,
    };
  },
  methods: {
    addProduct() {
      if (
        this.newProduct.name &&
        this.newProduct.description &&
        this.newProduct.price > 0
      ) {
        this.$store.dispatch("addProduct", this.newProduct);
        this.clearForm();
        this.showSuccessMessage();
      } else {
        alert("Please enter a valid product name, description, and price.");
      }
    },
    clearForm() {
      this.newProduct = {
        name: "",
        description: "",
        price: 0,
      };
    },
    showSuccessMessage() {
      if (
        this.newProduct.name &&
        this.newProduct.description &&
        this.newProduct.price
      ) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 2000);
      }
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
.product-list-con {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.add-product-form {
  width: 30%;
  border: 1px solid #6c50f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  align-self: flex-start;
}

.input-field {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  background-color: #6c50f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-table-container {
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
}

.product-table {
  border: 1px solid #6c50f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.product-table th {
  background-color: #6c50f0;
  color: white;
}

.product-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
.success-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #5cb85c;
  color: #ffffff;
  border-radius: 5px;
  border: 2px solid transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, border-color 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  border-color: #5cb85c;
}
</style>
