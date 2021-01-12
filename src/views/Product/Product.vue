<template>
  <div class="container grid-xs py-2 pt-2">
    <h2>{{ this.isNew ? "Cadastrar produto" : "Editar produto" }}</h2>

    <div class="form-group">
      <label class="form-label">Código do produto</label>
      <input
        v-model="productCode"
        class="form-input"
        type="text"
        placeholder="Código do produto"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Produto</label>
      <input
        v-model="productName"
        class="form-input"
        type="text"
        placeholder="Produto"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Valor</label>
      <input
        v-model="productValue"
        class="form-input"
        type="number"
        step=".01"
        placeholder="Valor"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Qtd. Estoque</label>
      <input
        v-model="productAmount"
        class="form-input"
        type="number"
        placeholder="Qtd. Estoque"
      />
    </div>

    <button class="btn btn-primary float-right" @click="save">Salvar</button>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  data() {
    return {
      productCode: "",
      productName: "",
      productValue: 0,
      productAmount: 0,
    };
  },

  computed: {
    ...mapGetters(["products"]),

    isNew: function () {
      return !this.$route.params.code;
    },

    code: function () {
      return this.$route.params.code;
    },

    product: function () {
      return {
        code: this.productCode,
        name: this.productName,
        value: this.productValue,
        amount: this.productAmount,
      };
    },
  },

  mounted: function () {
    this.init();
  },

  watch: {
    code: function() {
      // ao navegar pelas rotas, é necessário recarregar o conteúdo
      this.init();
    }
  },

  methods: {
    ...mapActions(["addProduct", "editProduct"]),

    init: function() {
      if (!this.isNew) {
        const product = this.products.find((item) => item.code === this.code);

        this.productCode = product.code;
        this.productName = product.name;
        this.productValue = product.value;
        this.productAmount = product.amount;

      } else {
        this.clearFields();
      }
    },

    async save() {
      try {
        if (this.isNew) {
          await this.addProduct(this.product);
        } else {
          await this.editProduct(this.product);
        }

        router.push("/");
      } catch (error) {
        alert(error);
      }
    },

    clearFields: function () {
      this.productCode = "";
      this.productName = "";
      this.productValue = 0;
      this.productAmount = 0;
    },
  },
};
</script>

<style scoped>
</style>
