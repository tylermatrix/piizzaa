<template>
  <div id="app">
    <div class="container">
      <pza-header></pza-header>
    </div>
    <div class="container">      
      <pza-home></pza-home>
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

export default {
  components: {
    pzaHeader: Header,
    pzaFooter: Footer,
    pzaHome: Home
  }
}
</script>

<style>

</style>
