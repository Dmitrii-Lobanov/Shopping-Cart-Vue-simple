<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | currency }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(id)">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currency } from "../filters/filters.js";

export default {
  name: "Item",
  props: ["id", "name", "image", "price"],
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
  },
  filters: {
    currency
  }
};
</script>

<style scoped>
</style>