<template>
  <div class="flex flex-col w-full px-4 lg:px-0 lg:w-2/3 mx-auto mb-24 mt-12 lg:mt-0">

    <h3 class="font-semibold text-xl lg:text-base text-gray-500 mb-8 lg:mb-12">A FEW OF MY PROJECTS</h3>

    <div class="flex flex-col lg:flex-row items-center">

      <!-- swiper image -->
      <div class="w-full lg:w-1/2">

        <swiper @slideChange="slideChanged" :options="swiperOption" style="height: auto" ref="mySwiper">

          <swiper-slide class="slider1"></swiper-slide>

          <swiper-slide class="slider2"></swiper-slide>

          <swiper-slide class="slider3"></swiper-slide>

          <swiper-slide class="slider4"></swiper-slide>

        </swiper>

    </div>

      <div v-if="currentSlide === 0" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">01</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">TRACKWIRE.IO - SaaS WebApp</h3>

        <p>Founder / Full Stack Developer</p>

        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#">
          <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
        </a>

      </div>

      <div v-if="currentSlide === 1" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">02</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">SATELLITES</h3>

        <p>Full Stack Developer</p>

        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#">
          <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
        </a>

      </div>

      <div v-if="currentSlide === 2" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">03</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">MOVIES DATABASE</h3>

        <p>Full Stack Developer</p>

        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#">
          <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
        </a>

      </div>

      <div v-if="currentSlide === 3" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">04</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">SCARY MAZE</h3>

        <p>Frontend Developer</p>

        <p class="mt-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#">
          <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
        </a>

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
  <div id="mobile-swipe-controls" class="flex lg:hidden w-full mt-32">

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
    background-image: url("https://cdn.dribbble.com/users/1430543/screenshots/15800306/media/93d56c49def4c7b7b2464b0c3fe65ed9.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider2{
    background-image: url("https://cdn.dribbble.com/users/1430543/screenshots/15800306/media/7f3a21e5a4373d5e27dc394bb846edaa.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider3{
    background-image: url("https://cdn.dribbble.com/users/1430543/screenshots/15800306/media/63f78a77317c757c55cbf3f3b42a4fc7.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slider4{
    background-image: url("https://cdn.dribbble.com/users/1430543/screenshots/15800306/media/bc45e97a1ab079b87a17eca9e9424583.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  .slide-info-height{
    height: 20rem;
  }
  @media (min-width: 768px) {
    .slide-info-height{
      height: 30rem;
    }
  }
  @media (min-width: 1024px) {
    .slide-info-height{
      height: 20rem;
    }
  }
</style>
