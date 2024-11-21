<template>
  <!--~~~~~~~~~~~~~~~ HEADER ~~~~~~~~~~~~~~~-->
  <Header/>
  <main>
    <!--~~~~~~~~~~~~~~~ HOME ~~~~~~~~~~~~~~~-->
  <Home/>

    <!--~~~~~~~~~~~~~~~ ABOUT ~~~~~~~~~~~~~~~-->
  <About/>

    <!--~~~~~~~~~~~~~~~ VARIETY ~~~~~~~~~~~~~~~-->
  <Variety/>


    <!--~~~~~~~~~~~~~~~ FRAGRANCE ~~~~~~~~~~~~~~~-->
  <Fragrance/>

    <!--~~~~~~~~~~~~~~~ QUALITY ~~~~~~~~~~~~~~~-->
  <Quality/>

    <!--~~~~~~~~~~~~~~~ PRODUCTS ~~~~~~~~~~~~~~~-->
  <Products/>

  </main>

  <!--~~~~~~~~~~~~~~~ FOOTER ~~~~~~~~~~~~~~~-->
  <Footer/>

</template>

<script>
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
import Products from "@/components/Products.vue";
import Quality from "@/components/Quality.vue";
import Fragrance from "@/components/Fragrance.vue";
import Variety from "@/components/Variety.vue";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";

export default {
  components: {Home, About, Variety, Fragrance, Quality, Products, Footer, Header},
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>

</style>