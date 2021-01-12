<template>
  <div class id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/product" class="btn btn-link">Novo Produto</router-link>
        </section>
        <section class="navbar-section">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logotipo SKY informática" />
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
  </div>
</template>

<style scoped>
  .img-logo {
    max-height: 75px;
    padding: 3px;
  }
</style>

