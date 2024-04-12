<template>
  <div>
    <input type="text">
  </div>
</template>

<script>
export default {
  props: ["productList"],
  data() {
    return {
        name: this.productList.name,
        description: this.productList.description,
        price: this.productList.price
    }
  }
};
</script>