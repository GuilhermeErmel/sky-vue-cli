<template>
  <div class="container grid-xs py-2">
    <div v-if='products' class="products-list">
      <product-card v-for="product in products" :key="product.code" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    'product-card': ProductCard
  },

  data() {
    return {
    };
  },

  computed: {
    ...mapState(["products", "loading"])
  },

  methods: {
/*    ...mapActions(["addTodo", "toggleTodo", "removeTodo"]),*/

    /*async add(todo) {
      await this.addTodo(todo);
      this.todo = { checked: false };
    }*/
  }
};
</script>

<style scoped>
.products-list {
  padding-top: 2rem;
}
</style>
