<template>
  <div id="app">
    <div class="container">
      <pza-header></pza-header>
    </div>
    <div class="container">      
      <pza-admin></pza-admin>
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
import Admin from './components/Admin.vue'



export default {
  components: {
    pzaHeader: Header,
    pzaFooter: Footer,
    pzaHome: Home,
    pzaMenu: Menu,
    pzaAdmin: Admin
  }
}
</script>

<style>

</style>
