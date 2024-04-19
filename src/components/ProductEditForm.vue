<!-- ProductEditForm.vue -->
<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="description" />
    <input type="number" v-model="price" />
    <button @click="updateProduct">Save</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
    };
  },
  methods: {
    updateProduct() {
      this.$emit("update-product", {
        name: this.name,
        description: this.description,
        price: this.price,
      });
    },
  },
};
</script>
