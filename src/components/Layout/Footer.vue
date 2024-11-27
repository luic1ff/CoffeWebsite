<script>
export default {
  name: 'Footer',
}
</script>

<template>
  <footer class="bg-[url(@/assets/images/footer_bg.jpg)] bg-cover" id="contacts">
      <div class="mx-12 py-20 flex flex-col gap-20 md:py-28 lg:flex-row">
        <div class="flex-1 flex flex-col items-center gap-8 text-center ">
          <img class="w-24 mx-auto md:w-28" src="@/assets/images/logo.png" alt="logo">

          <p class="text-white opacity-50  lg:text-start">Experience the smooth and balanced taste of Organic Colombian Coffee, with a perfect blend of rich flavor and refined notes in every cup.</p>

          <ul class="flex space-x-4">
            <li class="text-xl md:text-2xl">
              <a href="#"><i class="ri-instagram-line text-green-700 hover:text-white duration-300"></i></a>
            </li>
            <li class="text-xl md:text-2xl">
              <a href="#"><i class="ri-github-line text-green-700 hover:text-white duration-300"></i></a>
            </li>
            <li class="text-xl md:text-2xl">
              <a href="#"><i class="ri-facebook-fill text-green-700 hover:text-white duration-300"></i></a>
            </li>
            <li class="text-xl md:text-2xl">
              <a href="#"><i class="ri-youtube-fill text-green-700 hover:text-white duration-300"></i></a>
            </li>
          </ul>
        </div>

        <div class="flex-1 text-green-700 flex flex-col gap-8">
          <div class="text-2xl font-bold border-b-2 border-green-900 self-center lg:self-start">Contact Info</div>

          <div class="flex text-start gap-3 ">
            <i class="ri-map-pin-fill text-2xl"></i>
            <div>
              <p class="font-bold">Our location</p>
              <p class="text-white">Rio de Janeiro, RJ Brazil, 04103 Route</p>
            </div>
          </div>

          <div class="flex text-start gap-3 ">
            <i class="ri-phone-fill text-2xl"></i>
            <div>
              <p class="font-bold">Phones:</p>
              <p class="text-white">+14678-039-23-11</p>
            </div>
          </div>
        </div>

        <div class="flex-1 hidden sm:flex flex-col items-center text-green-700 gap-8 lg:pl-[3%] xl:pl-[6%]">
          <div class="text-2xl font-bold border-b-2 border-green-900 self-center lg:self-start">Subscribe</div>

          <div class="flex text-start gap-3 ">
            <input class="p-5 rounded-l-full outline-none" type="email" placeholder="Email" />

            <button class="inline-block border border-green-900 text-white bg-green-800 hover:scale-110 px-14 py-4 rounded-full uppercase duration-300 -ml-16">Subscribe</button>
          </div>
        </div>
      </div>

    <div class="py-5 border-t border-white/30 ">
      <p class="text-sm text-center text-white "><span class="text-green-700">Copyright</span> &copy 2024 luiciff.<span class="text-green-700">All rights reserved.</span></p>
    </div>
  </footer>
</template>

<style>

</style>