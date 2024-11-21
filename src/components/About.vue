<script>
export default {
  name: 'About',
}
</script>

<template>
  <section id="about" class="mx-12  flex flex-col gap-20 lg:flex-row">
    <div class="lg:w-1/2">
      <div class="flex flex-col text-center md:gap-2 lg:text-start">
        <h2 class="text-green-700">Caturra & Maragogipe</h2>
        <h2>Boutique Plantation Coffee</h2>
        <p class="mt-5">The smooth richness of Organic Colombian Coffee is perfectly balanced, offering a deep, bold flavor with a hint of sweetness. Enjoy the harmonious blend that awakens your senses with every sip.</p>
      </div>

      <div class="flex flex-col items-center gap-2 py-10 lg:items-start">
        <div class="flex items-center gap-5 font-bold">
          <i class="ri-file-list-2-fill text-2xl text-green-700"></i>
          <p>Download price</p>
        </div>

        <div class="flex items-center gap-5 font-bold">
          <i class="ri-phone-fill text-2xl text-green-700"></i>
          <p>1-780-854-68</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row xl:justify-start items-center justify-center gap-5">
        <button class="btn_primary">
          <span class="relative z-10">Read More</span>
        </button>
        <button class="btn_secondary">
          <span class="relative z-10">Read More</span>
        </button>
      </div>
    </div>

    <div class="relative lg:w-1/2 ">
      <img class="w-full mx-auto md:w-[80%] lg:w-full" src="@/assets/images/about_image.png" alt="about-image">

      <div class="absolute top-0 left-0 bg-white shadow-2xl h-40 w-40 rounded-full grid place-items-center text-center border-4 border-green-900 lg:h-44 lg:w-44 md:left-[20%]">
        <div>
          <h3>since</h3>
          <h2 class="text-green-700">1955</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.btn_primary, .btn_secondary {
  @apply relative flex h-14 w-48 bg-green-800 items-center justify-center text-white uppercase shadow-2xl overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:text-black hover:before:h-60 hover:before:w-60;
}
.btn_secondary {
  @apply bg-black
}
</style>