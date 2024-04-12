<template>
  <section id="product">
    <div class="wrapper">
      <div class="product-list-con">
        <div class="product-header">
          <h2>Product List</h2>
          <button @click="addProduct()" class="add">Add Product</button>
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
              <button @click="deleteProduct()" class="delete">Delete</button>
            </div>
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
import Swal from "sweetalert2";

export default {
  methods: {
    addProduct() {
      // Add Product
    },
    editProduct() {
      // Edit Product
    },
    deleteProduct(index) {
      Swal.fire({
        title: "Do you want to delete this product?",
        icon: "info",
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (!result.isConfirmed) return;

        this.$store.dispatch("deleteProduct", index);
      });
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
}

#product .product-list-con {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
}

#product .wrapper {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

#product .product-list-con {
  padding: 120px 0;
  display: flex;
  flex-direction: column;
}

#product .product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

#product .edit {
  background: #facc15;
}

#product .delete {
  background: #ef4444;
}

#product .add {
  background: #673de6;
}

#product .edit:hover {
  background: #eab308;
}

#product .delete:hover {
  background: #dc2626;
}

#product .add:hover {
  background: #5025d1;
}

#product .btn-con {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
