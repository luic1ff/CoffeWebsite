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

  <a href="#" class="scroll-up fixed right-4 -bottom-1/2 bg-black text-white hover:text-black cursor-pointer z-50 md:h-20 md:w-20 h-16 w-16 rounded-full text-xs uppercase grid place-items-center hover:bg-white hover:-translate-y-1 duration-300">
    <div>
      <img class="w-8 mx-auto" src="@/assets/images/scroll_icon.png" alt="scroll icon">
      <span>Go Top</span>
    </div>
  </a>

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