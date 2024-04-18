<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="description">
    <input type="number" v-model="price">
    <button @click="updateProduct">Save</button>
  </div>
</template>

<script>
export default {
  props: ["productList"],
  data() {
    return {
      name: "",
      description: "",
      price: 0
    };
  },
  mounted() {
    // Assign prop values to data properties when the component is mounted
    this.name = this.productList.name;
    this.description = this.productList.description;
    this.price = this.productList.price;
  },
  methods: {
    updateProduct() {
      // You can emit an event to notify the parent component about the update
      this.$emit("update-product", {
        name: this.name,
        description: this.description,
        price: this.price
      });
    }
  }
};
</script>
