<template>
  <div class="flex flex-col w-2/3 mx-auto mb-24">

    <h3 class="font-semibold text-gray-500 mb-12">A FEW OF MY PROJECTS</h3>

    <div class="flex items-center">

      <!-- swiper image -->
      <div class="w-1/2 ">

        <swiper @slideChange="slideChanged" :options="swiperOption" style="height: auto" ref="mySwiper">
          <swiper-slide class="slider1"></swiper-slide>
          <!-- <swiper-slide class="slider2"></swiper-slide>
          <swiper-slide class="slider3"></swiper-slide>
          <swiper-slide class="slider4"></swiper-slide>
          <swiper-slide class="slider5"></swiper-slide>
          <swiper-slide class="slider6"></swiper-slide> -->
        </swiper>

    </div>

      <div v-if="currentSlide === 0" class="flex flex-col md:w-1/2 w-5/6 w-full slide-info-height">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">01</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">TRACKWIRE.IO</h3>

        <p>Founder / Full Stack Developer</p>

        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#">
          <button type="button" class="border border-gray-600 px-6 py-2 mt-6 rounded">WEBSITE</button>
        </a>

      </div>

  </div>

  <!-- Controls for lg screens -->
  <div class="hidden lg:flex w-full mt-16">
    <div class="ml-auto cursor-pointer" style="background-image: none;">
<svg xmlns="http://www.w3.org/2000/svg" @click="prevSlide" viewBox="0 0 24 24" class="w-20 h-20 icon-cheveron-left-circle"><circle cx="12" cy="12" r="10" style="fill: none;"/><path style="fill: #db8753;" d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"/></svg>
    </div>
    <div class="mr-auto cursor-pointer" style="background-image: none;">
      <svg xmlns="http://www.w3.org/2000/svg" @click="nextSlide" viewBox="0 0 24 24" class="w-20 h-20 icon-cheveron-right-circle"><circle cx="12" cy="12" r="10" style="fill: none;"/><path style="fill: #db8753;" d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"/></svg>
    </div>
  </div>

  <!-- Controls for sm screens -->
  <div id="mobile-swipe-controls" class="flex lg:hidden w-full">
    <div class="ml-auto cursor-pointer" style="background-image: none;">
<svg xmlns="http://www.w3.org/2000/svg" @click="prevSlide" viewBox="0 0 24 24" class="w-20 h-20 icon-cheveron-left-circle"><circle cx="12" cy="12" r="10" style="fill: none;"/><path style="fill: #db8753;" d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"/></svg>
    </div>
    <div class="mr-auto cursor-pointer" style="background-image: none;">
      <svg xmlns="http://www.w3.org/2000/svg" @click="nextSlide" viewBox="0 0 24 24" class="w-20 h-20 icon-cheveron-right-circle"><circle cx="12" cy="12" r="10" style="fill: none;"/><path style="fill: #db8753;" d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"/></svg>
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
     amountOfSlides: 6,
     swiperOption: {
       autoHeight: true, //enable auto height
       spaceBetween: 20,
       setWrapperSize: true,
       loop: true,
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
     /*
     * see if the next index is bigger than the amount of slides
     * if bigger move to the first slide else move to the next
     */
     let nextIndex = this.currentSlide + 1;
     let shouldLoop = (nextIndex > this.lastSlideIndex);
     nextIndex = shouldLoop ? 0 : nextIndex;
     this.swiper.slideToLoop(nextIndex, 500, false);
    },
   prevSlide(){
    /*
    * see if the prev index is smaller than 0
    * if smaller move to the last slide else move to the prev
    */
    let prevIndex = this.currentSlide - 1;
    let shouldLoop = (prevIndex < 0);
    prevIndex = shouldLoop ? this.lastSlideIndex : prevIndex;
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
