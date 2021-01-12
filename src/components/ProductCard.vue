<template>
  <div class="card" :class="{ isInLack: isProductInLack }">
    <div class="card-header">
      <div class="card-title h5">
        {{ product.code + " - " + product.name }}
      </div>
    </div>

    <div class="card-body">
      <label>{{ "Valor: " + product.value }}</label>
      <label class="float-right">{{ "Estoque: " + product.amount }}</label>
    </div>

    <div class="card-footer">  
      <button @click="editProduct" class="btn btn-primary">Editar Produto</button>

      <div class="float-right">
        <label v-if="isProductInLack">Em falta</label>

        <button v-else @click="decrement" class="btn btn-link">
          Decrementar do estoque
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isProductInLack: function () {
      return this.product.amount < 1;
    },
  },
  methods: {
    ...mapActions(["decrementProduct"]),

    editProduct: function () {
      const productCode = this.product.code;
      router.push({ name: "product", params: { code: productCode } });
    },

    decrement: function () {
      this.decrementProduct(this.product);
    },
  },
};
</script>

<style scoped>
.tile {
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}

.card:not(:last-child) {
  border-bottom: 0;
}

.isInLack {
  text-decoration: line-through;
  color: lightgray;
}
</style>

