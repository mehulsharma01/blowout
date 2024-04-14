<template>
    <!-- header container start -->
   <Header/>
    <router-view></router-view>
  <!-- footer container start -->
  <Footer/>
</template>
<script>
import Header from "./components/Header.vue";
//import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  //  Home,
  }
}
</script>

<style lang="scss">
</style>
