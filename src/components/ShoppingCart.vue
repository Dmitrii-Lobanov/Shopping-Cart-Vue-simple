<template>
  <div>
    <button
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#shoppingCart"
    >
      Корзина ({{ numInCart }})
    </button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Корзина</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, idx) in cart" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price | currency }}</td>
                  <td>
                    <button
                      class="btn btn-sm btn-danger"
                      @click="removeFromCart(idx)"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>Итого: {{ total | currency }}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">
              Продолжить покупки
            </button>
            <button class="btn btn-primary">Оплатить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currency } from "../filters/filters.js";

export default {
  name: "shoppingCart",
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.forSale.find(forSaleItem => {
          return (cartItem = forSaleItem.id);
        });
      });
    },
    total() {
      return this.cart.reduce((acc, curr) => acc + curr.price, 0);
    }
  },
  methods: {
    removeFromCart(idx) {
      this.$store.dispatch("removeFromCart", idx);
    }
  },
  filters: {
    currency
  }
};
</script>

<style scoped>
</style>