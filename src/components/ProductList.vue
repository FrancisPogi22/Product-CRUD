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
      </div>
    </div>
  </section>
</template>

<script>
// import Swal from "sweetalert2";

export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    productList() {
      return this.$store.getters.productList;
    },
  },
  // methods: {
  //   addProduct() {
  //     // Add Product
  //   },
  //   editProduct() {
  //     // Edit Product
  //   },
  //   deleteProduct(index) {
  //     Swal.fire({
  //       title: "Do you want to delete this product?",
  //       icon: "info",
  //       showDenyButton: true,
  //       confirmButtonText: "Delete",
  //       denyButtonText: `Cancel`,
  //     }).then((result) => {
  //       if (!result.isConfirmed) return;

  //       this.$store.dispatch("deleteProduct", index);
  //     });
  //   },
  // },
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
</style>
