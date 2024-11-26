<script>
export default {
  name: 'Products',
}
</script>

<template>
  <section id="products" class="mx-12">
      <div class="flex flex-col items-center text-center">
        <h4 class="text-green-700">Online Store</h4>
        <h2>Popular Products</h2>
        <p class="py-5">Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
      </div>

    <div class="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-start lg:items-start lg:gap-20 lg:mt-10">
      <div class="grid place-items-end lg:w-1/2">
        <img class="w-full xl:w-[80%] " src="@/assets/images/product_01.png" alt="products_image" />
      </div>

      <div class="flex flex-col items-center justify-center gap-10 text-center lg:w-1/2 lg:text-start lg:items-start">
        <div class="space-y-3 lg:pt-10">
          <div class="text-yellow-500">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>

          <h3>Ethiopia Arabica</h3>

          <p>Discover the origins of our Organic Colombian Coffee, crafted with care and dedication to perfection. Each sip reveals the true essence of quality, bringing you an exceptional coffee experience.</p>
        </div>

        <div class="pl-16">
          <div class="flex items-center gap-5">
            <i class="ri-check-line text-green-700 font-bold text-xl"></i>
            <p>Pure Grade</p>
          </div>

          <div class="flex items-center gap-5">
            <i class="ri-check-line text-green-700 font-bold text-xl"></i>
            <p>Amazing Vanilla Aroma</p>
          </div>

          <div class="flex items-center gap-5">
            <i class="ri-check-line text-green-700 font-bold text-xl"></i>
            <p>Strong Roasting</p>
          </div>

          <div class="flex items-center gap-5">
            <i class="ri-check-line text-green-700 font-bold text-xl"></i>
            <p>Ultra Grinding</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <p class="text-lg line-through font-bold">$19.99</p>
          <p class="text-3xl text-red-500 font-bold">$16.99</p>
        </div>

        <div class="flex flex-col md:flex-row gap-5">
          <button class="btn_primary"><span class="relative z-10">Add to cart</span></button>
          <button class="btn_secondary"><span class="relative z-10">More info</span></button>
        </div>
      </div>
    </div>

    <div class="py-20 md:py-28">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <!--product-1-->
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="w-1/2 cursor-pointer hover:scale-110 hover:-rotate-6 duration-300" src="@/assets/images/product_02.png" alt="product_image">
          <div class="text-yellow-500">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>

          <div class="text-center">
            <h4>Peru Whole Bean</h4>
            <h4 class="text-green-700">$42.49</h4>
          </div>

          <button class="btn_primary">
            <span class="relative z-10">Add to cart</span>
          </button>

        </div>

        <!--product-2-->
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="w-1/2 cursor-pointer hover:scale-110 hover:-rotate-6 duration-300" src="@/assets/images/product_03.png" alt="product_image">
          <div class="text-yellow-500">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>

          <div class="text-center">
            <h4>Peru Whole Bean</h4>
            <h4 class="text-green-700">$42.49</h4>
          </div>

          <button class="btn_primary">
            <span class="relative z-10">Add to cart</span>
          </button>

        </div>

        <!--product-3-->
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="w-1/2 cursor-pointer hover:scale-110 hover:-rotate-6 duration-300" src="@/assets/images/product_04.png" alt="product_image">
          <div class="text-yellow-500">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>

          <div class="text-center">
            <h4>Peru Whole Bean</h4>
            <h4 class="text-green-700">$42.49</h4>
          </div>

          <button class="btn_primary">
            <span class="relative z-10">Add to cart</span>
          </button>

        </div>

        <!--product-4-->
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="w-1/2 cursor-pointer hover:scale-110 hover:-rotate-6 duration-300" src="@/assets/images/product_05.png" alt="product_image">
          <div class="text-yellow-500">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>

          <div class="text-center">
            <h4>Peru Whole Bean</h4>
            <h4 class="text-green-700">$42.49</h4>
          </div>

          <button class="btn_primary">
            <span class="relative z-10">Add to cart</span>
          </button>

        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>