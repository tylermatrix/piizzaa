<template>
  <div id="app">
    <div class="container">
      <pza-header></pza-header>
    </div>
    <div class="container">      
      <router-view></router-view>
    </div>
    <div class="container">      
      <pza-footer></pza-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  components: {
    pzaHeader: Header,
    pzaFooter: Footer,
  }
}
</script>

<style>

</style>
