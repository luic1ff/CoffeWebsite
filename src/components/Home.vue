<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div id="home" class="lg:-mt-44">
    <div class="bg-[url('@/assets/images/hero_bg.jpg')] bg-cover">
      <div class="mx-4 pt-64 pb-[40%] md:pb-[30%] flex flex-col  justify-center items-center gap-3 text-center lg:gap-5 lg:pt-72 lg:pb-[25%] xl:pb-[20%]">
        <h1 class="text-green-700">Organic</h1>

        <h1>Colombian Coffee</h1>

        <p class="text-white mt-5">Experience the rich essence of Colombia with a coffee crafted to perfection. Smooth and bold, each sip delivers a unique blend of flavor and aroma that awakens your senses.</p>
      </div>
    </div>
    
    <div class="relative bg-green-800 bg-[url('@/assets/images/coffee_pattern.png')] bg-repeat bg-[length:400px_400px]">
      <div class="relative w-full h-0 pb-[50%] md:pb-[45%] lg:pb-[35%] xl:pb-0 xl:h-[450px]">
        <img class="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[700px] xl:w-[750px]" src="@/assets/images/coffee-bean.png" alt="coffee-bean">
      </div>
    </div>
  </div>
</template>

<style>

</style>