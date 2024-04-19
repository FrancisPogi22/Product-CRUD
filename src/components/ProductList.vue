<!-- ProductList.vue -->
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
                <td>
                  <button @click="openEditModal(product)">Edit</button>
                  <!-- Pass product data to openEditModal -->
                  <button @click="deleteProduct(index)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal for editing product -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <product-edit-form
          :product="selectedProduct"
          @update-product="updateProduct"
        ></product-edit-form>
      </div>
    </div>
  </section>
</template>

<script>
import ProductEditForm from "../components/ProductEditForm.vue";
import Swal from "sweetalert2";

export default {
  components: {
    ProductEditForm,
  },
  data() {
    return {
      showEditModal: false,
      selectedProduct: null,
    };
  },
  computed: {
    productList() {
      return this.$store.getters.productList;
    },
  },
  methods: {
    openEditModal(product) {
      this.selectedProduct = product; // Set the selected product
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    updateProduct(updatedProductData) {
      // Update product data in the store
      const index = this.productList.findIndex(
        (product) => product.id === this.selectedProduct.id
      );
      if (index !== -1) {
        this.$store.dispatch("updateProduct", { index, updatedProductData });
      }
      this.showEditModal = false; // Close the modal after updating
    },
    deleteProduct(index) {
      Swal.fire({
        title: "Are you sure you want to delete this product?",
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
};
</script>

<style scoped>
.product-table-container {
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
  border-radius: 5px;
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

/* Modal */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.3s ease forwards;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Adjust the width as needed */
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.5s ease forwards;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Close Button */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

.form-group {
  margin-bottom: 20px;
}


.submit-button {
  margin-top: auto; /* Push the button to the bottom */
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(280px);
  }
}
</style>