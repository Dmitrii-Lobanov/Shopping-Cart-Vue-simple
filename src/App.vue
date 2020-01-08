<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>Онлайн магазин</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>

    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :id="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
import Item from "./components/Item";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "app",
  components: {
    Item,
    ShoppingCart
  },
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    }
  }
};
</script>

<style>
</style>
