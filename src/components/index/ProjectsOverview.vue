<template>
  <div class="flex flex-col w-full px-4 xl:px-0 xl:w-2/3 mx-auto border-b xl:border-none pb-12 xl:pb-0 mb-12 xl:mb-24 mt-12 lg:mt-8">

    <h3 class="font-semibold text-lg lg:text-base text-gray-500 mb-16 lg:mb-12 lg:text-center">A FEW OF MY PROJECTS</h3>

    <div id="projects-container" class="flex flex-col lg:flex-row items-center">

      <!-- swiper image -->
      <div class="w-full lg:w-1/2 lg:pr-8">

        <swiper @slideChange="slideChanged" :options="swiperOption" style="height: auto" ref="mySwiper">

          <swiper-slide class="slider1"></swiper-slide>

          <swiper-slide class="slider2"></swiper-slide>

          <swiper-slide class="slider3"></swiper-slide>

          <swiper-slide class="slider4"></swiper-slide>

        </swiper>

    </div>

      <div v-if="currentSlide === 0" class="flex flex-col w-5/6 lg:w-1/2 w-full mt-4 lg:mt-0 slide-info-height?">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">01</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">TRACKWIRE <span class="font-semibold">- SaaS Web App</span></h3>

        <p>Founder / Full Stack Developer</p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">OVERVIEW: </span>SaaS web app for music producers to monetize their music effortlessly. Within minutes of signing up a user can have their own website with a built-in store.
        </p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">KEY FEATURES: </span>Automated web app deployments, free trials, payment processing, emails based on user actions, Modern Frontend, User dashboard, marketing product pages, blog + more.
        </p>

        <div class="tech-used flex mt-4">
          <img src="@/assets/php-logo-basic.svg" class="w-8 object-contain mr-2" alt="php logo">
          <img src="@/assets/laravel-logo.png" class="w-6 object-contain bg-white mr-3" alt="laravel logo">
          <img src="@/assets/vue-logo.png" class="w-5 object-contain mr-2" alt="vue logo">
          <img src="@/assets/tailwindcss-logo.jpg" class="w-7 object-contain" alt="tailwind logo">
        </div>

        <div class="flex">
          <a target="_blank" href="https://trackwire.io/features" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
          </a>
        </div>

      </div>

      <div v-if="currentSlide === 1" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">02</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">SATELLITES <span class="font-semibold">- Customisable Web App & Store</span></h3>

        <p>Full Stack Developer</p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">OVERVIEW: </span>Self contained web apps deployed as part of trackwires trial or paid service offerings.
        </p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">KEY FEATURES: </span>Complete Customisable Website, Interactive music store / catalog, Dynamic File uploads, Payment processing integrations, Statistics and Records, Modern Frontend, Admin dashboard.
        </p>

        <div class="tech-used flex mt-4">
          <img src="@/assets/php-logo-basic.svg" class="w-8 object-contain mr-2" alt="php logo">
          <img src="@/assets/laravel-logo.png" class="w-6 object-contain bg-white mr-3" alt="laravel logo">
          <img src="@/assets/vue-logo.png" class="w-5 object-contain mr-2" alt="vue logo">
          <img src="@/assets/tailwindcss-logo.jpg" class="w-7 object-contain" alt="tailwind logo">
        </div>

        <div class="flex">
          <a target="_blank" href="https://illuzual.com/beat-store" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
          </a>
        </div>

      </div>

      <div v-if="currentSlide === 2" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">03</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">MOVIES DB <span class="font-semibold">- Movies Aggregator & API integration</span></h3>

        <p>Full Stack Developer</p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">OVERVIEW: </span>Web app that consumes themoviedb api to serve movie information under a clean and inviting ui.
        </p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">KEY FEATURES: </span>Home page with popular, upcoming & recommended movies. Show movie page with cast, related movies and watch trailer modal. Search movie page to find a movie.
        </p>

        <div class="tech-used flex mt-4">
          <img src="@/assets/php-logo-basic.svg" class="w-8 object-contain mr-2" alt="php logo">
          <img src="@/assets/laravel-logo.png" class="w-6 object-contain bg-white mr-3" alt="laravel logo">
          <img src="@/assets/vue-logo.png" class="w-5 object-contain mr-2" alt="vue logo">
          <img src="@/assets/tailwindcss-logo.jpg" class="w-7 object-contain" alt="tailwind logo">
        </div>

        <div class="flex">
          <a target="_blank" href="https://moviesdb.lukejoseph.dev" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
          </a>

          <a target="_blank" href="https://github.com/luke-joseph/movies-library" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded ml-3">GITHUB</button>
          </a>
        </div>

      </div>

      <div v-if="currentSlide === 3" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">04</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">SCARY MAZE <span class="font-semibold">- Browser Game</span></h3>

        <p>Frontend Developer</p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">OVERVIEW: </span>Addictive browser based game using mouse events. Pass each level without falling into the darkness to complete the game.
        </p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">KEY FEATURES: </span>5 Terrifying levels with increasing difficulty. SPA with Vuex used to store the state of the game. Visitors receive time based medals on completion.
        </p>

        <div class="tech-used flex mt-4">
          <img src="@/assets/vue-logo.png" class="w-5 object-contain mr-2" alt="vue logo">
          <img src="@/assets/tailwindcss-logo.jpg" class="w-7 object-contain" alt="tailwind logo">
        </div>

        <div class="flex">
          <a target="_blank" href="https://scarymaze.lukejoseph.dev" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
          </a>

          <a target="_blank" href="https://github.com/luke-joseph/maze" class="self-start">
            <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded ml-3">GITHUB</button>
          </a>
        </div>


      </div>

  </div>

  <!-- Controls for lg screens -->
  <div class="hidden lg:flex w-full mt-16">

    <div class="ml-auto cursor-pointer mr-8" style="background-image: none;">

      <img src="@/assets/arrow-left.png"
      class="w-16" :class="[currentSlide === 0 ? 'opacity-10 hover:opacity-10' : 'opacity-40 hover:opacity-60']"
      @click="prevSlide" alt="left arrow">

    </div>

    <div class="mr-auto cursor-pointer" style="background-image: none;">

      <img src="@/assets/arrow-right.png"
      class="w-16" :class="[currentSlide === lastSlideIndex ? 'opacity-10' : 'opacity-40 hover:opacity-60']"
      @click="nextSlide" alt="right arrow">

    </div>

  </div>

  <!-- Controls for sm screens -->
  <div id="mobile-swipe-controls" class="flex lg:hidden w-full mt-6">

    <div class="ml-auto cursor-pointer mr-8" style="background-image: none;">

      <img src="@/assets/arrow-left.png"
      class="w-16" :class="[currentSlide === 0 ? 'opacity-10' : 'opacity-40']"
      @click="prevSlide" alt="left arrow">

    </div>

    <div class="mr-auto cursor-pointer" style="background-image: none;">

      <img src="@/assets/arrow-right.png"
      class="w-16" :class="[currentSlide === lastSlideIndex ? 'opacity-10' : 'opacity-40']"
      @click="nextSlide" alt="right arrow">

    </div>

  </div>

  </div>

</template>

<script>
/*
* currentSlide is synced w/ the swiper.realIndex for supporting text
*/
export default {
  name: 'ProjectsOverview',
  data() {
   return {
     currentSlide: 0,
     amountOfSlides: 4,
     swiperOption: {
       autoHeight: true, //enable auto height
       spaceBetween: 20,
       setWrapperSize: true,
       loop: false,
     }
   }
 },
 computed: {
   swiper: function() {

     return this.$refs.mySwiper.$swiper

   },
   lastSlideIndex: function(){

     return this.amountOfSlides - 1;

   }
 },
 methods:{
   slideChanged(){

     this.currentSlide = this.swiper.realIndex;

     },
    nextSlide(){

     let nextIndex = this.currentSlide + 1;

     this.swiper.slideToLoop(nextIndex, 500, false);

    },
   prevSlide(){

    let prevIndex = this.currentSlide - 1;

    this.swiper.slideToLoop(prevIndex, 500, false);
    }
   },
}
</script>
<style scoped>
  .swiper-container .swiper-slide {
    height: 300px;
    line-height: 300px;
  }
  .slider1{
    background-image: url("/img/trackwireio-pj-image.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider2{
    background-image: url("/img/satellites-project-image.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider3{
    background-image: url("/img/movies-project-image.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider4{
    background-image: url("/img/scarymaze-pj-image.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

   #projects-container{
    min-height: 48rem;
  }
  @media (min-width: 768px) {
    #projects-container{
      min-height: 41rem;
    }
  }
  @media (min-width: 1024px) {
    #projects-container{
      min-height: 25rem;
    }
  }
</style>
