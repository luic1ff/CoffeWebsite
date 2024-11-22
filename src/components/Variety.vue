<template>
  <section class="relative bg-[url('@/assets/images/bg_image.jpg')] bg-top bg-no-repeat">
    <div class="mx-12 relative z-10">
      <h3 class="text-center mx-auto">
        Experience the vibrant taste of Organic Colombian Coffee, crafted to perfection with a
        <span class="text-green-700">smooth finish and rich aroma</span>. Its balanced notes offer
        a satisfying blend of flavor and freshness, making every cup truly exceptional.
      </h3>

      <div class="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 xl:grid-cols-4">
        <!-- item-1 -->
        <div class="about_item flex flex-col gap-3 items-center justify-center text-center">
          <div class="relative size-60 about_item_img_wrapper">
            <img class="about_item_img rounded-full" src="@/assets/images/coffee-1.jpg" alt="variety_image" />
            <h3
                class="h3_wrapper absolute -left-8 top-1/3 size-16 md:size-20 md:-left-10 bg-green-800 rounded-full grid place-items-center text-white">
              01
            </h3>
          </div>
          <h3>Arabica Green</h3>
          <p>
            Enjoy the smooth, full-bodied flavor of Organic Colombian Coffee, perfectly balanced for a rich and
            satisfying experience.
          </p>
        </div>
        <!-- item-2 -->
        <div class="about_item flex flex-col gap-3 items-center justify-center text-center">
          <div class="relative size-60 about_item_img_wrapper">
            <img class="about_item_img rounded-full" src="@/assets/images/coffee-2.jpg" alt="variety_image" />
            <h3
                class="h3_wrapper md:size-20 md:-left-10 absolute -left-8 top-1/3 size-16 bg-green-800 rounded-full grid place-items-center text-white">
              02
            </h3>
          </div>
          <h3>Arabica Roasted</h3>
          <p>
            Enjoy the smooth, full-bodied flavor of Organic Colombian Coffee, perfectly balanced for a rich and
            satisfying experience.
          </p>
        </div>
        <!-- item-3 -->
        <div class="about_item flex flex-col gap-3 items-center justify-center text-center">
          <div class="relative size-60 about_item_img_wrapper">
            <img class="about_item_img rounded-full" src="@/assets/images/coffee-3.jpg" alt="variety_image" />
            <h3
                class="h3_wrapper md:size-20 md:-left-10 absolute -left-8 top-1/3 size-16 bg-green-800 rounded-full grid place-items-center text-white">
              03
            </h3>
          </div>
          <h3>Robusta Roasted</h3>
          <p>
            Enjoy the smooth, full-bodied flavor of Organic Colombian Coffee, perfectly balanced for a rich and
            satisfying experience.
          </p>
        </div>
        <!-- item-4 -->
        <div class="about_item flex flex-col gap-3 items-center justify-center text-center">
          <div class="relative size-60 about_item_img_wrapper">
            <img class="about_item_img rounded-full" src="@/assets/images/coffee-4.jpg" alt="variety_image" />
            <h3
                class="h3_wrapper md:size-20 md:-left-10 absolute -left-8 top-1/3 size-16 bg-green-800 rounded-full grid place-items-center text-white">
              04
            </h3>
          </div>
          <h3>Mixed Sorts</h3>
          <p>
            Enjoy the smooth, full-bodied flavor of Organic Colombian Coffee, perfectly balanced for a rich and
            satisfying experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about_item_img {
  @apply cursor-pointer duration-300;
}

.about_item_img_wrapper:hover .about_item_img {
  @apply rotate-45;
}

.h3_wrapper {
  @apply duration-300 transform; /* Добавляем transform для поддержки scale */
}

.about_item_img_wrapper:hover .h3_wrapper {
  @apply scale-50;
}
</style>
<script setup lang="ts">
</script>