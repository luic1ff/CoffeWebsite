<script>
export default {
  name: 'Fragrance',
}
</script>

<template>
  <section class="py-0 flex" id="fragrance">
    <img class="hidden lg:block w-1/3 object-cover" src="@/assets/images/fragrance_01.jpg" alt="fragrance_image">

    <div class="relative bg-green-800 w-full flex items-center py-20 overflow-hidden md:py-32">
      <img class="absolute bottom-0 -right-20 h-full pointer-events-none opacity-20 xl:-right-24 " src="@/assets/images/fragrance_bg.png" alt="fragrance_bg">

      <div class="flex flex-col  items-center text-center mx-auto px-3 md:text-start md:items-start md:mx-12 md:max-w-md">
        <h2 class="text-black xl:text-6xl">Unmatched</h2>
        <h2 class="text-white  leading-tight xl:text-6xl">Fragrance in Each Sip</h2>
        <p class="text-white pt-10 pb-20">Savor the bold richness of Organic Colombian Coffee, expertly crafted for a smooth and balanced flavor. Each cup offers a deep, satisfying experience with a perfect hint of refinement.</p>
        <button class="btn_secondary"><span class="z-10">Read More</span></button>
      </div>
    </div>

    <img class="hidden lg:block w-1/3 object-cover" src="@/assets/images/fragrance_02.jpg" alt="fragrance_image">
  </section>
</template>

<style>

</style>