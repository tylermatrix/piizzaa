<template>
  <div id="app">
    <div class="container">
      <pza-header></pza-header>
    </div>
    <div class="container">      
      <pza-menu></pza-menu>
    </div>
    <div class="container">      
      <pza-footer></pza-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

export default {
  components: {
    pzaHeader: Header,
    pzaFooter: Footer,
    pzaHome: Home,
    pzaMenu: Menu
  }
}
</script>

<style>

</style>
