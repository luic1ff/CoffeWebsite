<script>
export default {
  name: 'Header',
  data() {
    return {
      mobMenu: '-right-full',
      scrollNav: '-top-full',
    };
  },
  mounted() {
    this.updateNavPosition();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.updateNavPosition);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateNavPosition);
  },
  methods: {

    NavMenu() {
      this.mobMenu = this.mobMenu === '-right-full' ? 'right-0' : '-right-full';
    },

    handleScroll() {
      if (window.innerWidth >= 1020) {
        this.scrollNav = window.scrollY >= 150 ? 'top-0' : '-top-full';
      }
    },

    updateNavPosition() {
      if (window.innerWidth < 1020) {
        this.scrollNav = 'top-0';
      } else {
        this.scrollNav = '-top-full';
      }
    },
  },
};
</script>

<template>
  <header
          class=" text-black lg:text-white ">
    <nav class="max-w-[1920px]">
        <!--Mobile Sticky Menu-->
      <div :class="[scrollNav, 'fixed w-full  left-0 z-50 duration-500 bg-black/80']">
        <div class="flex items-center justify-between h-24 px-5 md:px-10 lg:max-w-4xl lg:mx-auto">
        <!--empty div-->
          <div class="flex-1 lg:hidden"></div>

          <div class="flex-1 grid place-items-center lg:place-items-start">
            <img src="@/assets/images/logo.png" alt="logo"
                 class="w-20" />
          </div>

          <div :class="[mobMenu, 'absolute top-0  min-h-[70vh] w-full px-5 bg-white flex flex-col gap-5 duration-500 ease-out overflow-hidden md:px-10 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto']">
            <div  class="flex items-center justify-between h-24 lg:hidden">
              <img src="@/assets/images/logo_2.png" alt="logo_2"
                   class="w-20">

              <div class="text-3xl cursor-pointer">
                <i @click="NavMenu" class="ri-close-large-line"></i>
              </div>
            </div>

            <ul class="flex flex-col items-start gap-5 lg:flex-row">
              <li><a href="#home" class="nav-link active">Home</a></li>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#fragrance" class="nav-link">Fragrance</a></li>
              <li><a href="#quality" class="nav-link">Quality</a></li>
              <li><a href="#products" class="nav-link">Products</a></li>
            </ul>
            <!--social-icons-->
            <div class="flex items-center py-10 lg:hidden">
              <p class="font-bold">Follow us <span class="ml-3 mr-5">-</span></p>

              <ul class="nav_icons_mobile flex space-x-4">
                <li class="border-2 border-black size-8 rounded-full grid place-items-center">
                  <a href="#"><i class="ri-instagram-line"></i></a>
                </li>
                <li class="border-2 border-black size-8 rounded-full grid place-items-center">
                  <a href="#"><i class="ri-github-line"></i></a>
                </li>
                <li class="border-2 border-black size-8 rounded-full grid place-items-center">
                  <a href="#"><i class="ri-facebook-fill"></i></a>
                </li>
                <li class="border-2 border-black size-8 rounded-full grid place-items-center">
                  <a href="#"><i class="ri-youtube-fill"></i></a>
                </li>
              </ul>
            </div>

            <div class="absolute bottom-16 -right-5 -rotate-[30deg] opacity-20 pointer-events-none lg:hidden">
              <img src="@/assets/images/coffee_leaf.png" alt="bg_leaf"
                   class="w-72">
            </div>
          </div>

          <div class="cursor-pointer text-3xl text-white flex-1 text-right lg:hidden">
            <i @click="NavMenu"  class="ri-menu-line"></i>
          </div>
        </div>
      </div>

        <!--Desktop Menu-->
      <div class=" hidden lg:block py-4">
          <div class="flex  items-center justify-center mx-12 ">
            <!--social-icons-->
            <div class="flex-1 flex items-center">
              <p class="font-bold">Follow us <span class="ml-3 mr-5">-</span></p>

              <ul class="nav_icons flex space-x-4">
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-instagram-line"></i></a>
                </li>
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-github-line"></i></a>
                </li>
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-facebook-fill"></i></a>
                </li>
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-youtube-fill"></i></a>
                </li>
              </ul>
            </div>

            <div class="flex-1">
              <img src="@/assets/images/logo.png" class="w-20 mx-auto" alt="logo">
            </div>
            <div class="flex-1 flex items-center justify-end">
              <ul class="nav_icons flex space-x-8">
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-user-fill"></i></a>
                </li>
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="relative text-green-700"><i class="ri-shopping-bag-fill"></i>
                    <span class="font-bold absolute -top-2 -right-6 bg-white text-black text-xs w-6 h-6 rounded-full grid place-items-center">0</span></a>
                </li>
                <li class="border-2 border-green-900 size-8 rounded-full grid place-items-center">
                  <a href="#" class="text-green-700"><i class="ri-search-line"></i></a>
                </li>
              </ul>
            </div>
          </div>
        
          <div class="flex items-center justify-center mt-10">
            <div class="flex justify-center gap-6">
              <a href="#home" class="nav-link active">Home</a>
              <a href="#about" class="nav-link">About</a>
              <a href="#fragrance" class="nav-link">Fragrance</a>
              <a href="#quality" class="nav-link">Quality</a>
              <a href="#products" class="nav-link">Products</a>
            </div>
          </div>
      </div>
    </nav>
  </header>
</template>

<style>
.nav-link{
  @apply text-xl font-bold duration-300 lg:text-base;
}
.nav-link:hover{
  @apply text-green-700;
}
.nav-link:active{
  @apply text-green-700;
}
.nav_icons_mobile li:hover{
  @apply border-green-700 duration-300;
}

.nav_icons_mobile li:hover a{
  @apply text-green-700 duration-300;
}

.nav_icons li:hover{
  @apply border-white duration-300;
}

.nav_icons li:hover a{
  @apply text-white duration-300;
}
</style>