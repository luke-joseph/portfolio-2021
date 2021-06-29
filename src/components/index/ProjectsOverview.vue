<template>
  <div class="flex flex-col w-full px-4 xl:px-0 xl:w-2/3 mx-auto border-b xl:border-none pb-12 xl:pb-0 mb-12 xl:mb-24 mt-12 lg:mt-8">

    <h3 class="font-semibold text-lg lg:text-base text-gray-500 mb-16 lg:mb-12 lg:text-center">A FEW OF MY PROJECTS</h3>

    <div id="projects-container" class="flex flex-col lg:flex-row items-center">

      <!-- swiper image -->
      <div class="w-full lg:w-1/2 lg:pr-8">

        <swiper @slideChange="slideChanged" :options="swiperOption" style="height: auto" ref="mySwiper">

          <swiper-slide v-for="(project, index) in projects" :key="index"
          class="slider"
          v-bind:style='{ backgroundImage: "url(" + project.imageUrl + ")", }'
          ></swiper-slide>

        </swiper>

    </div>

    <!-- project to show is synced with currentSlide and ProjectsData index -->

      <div class="project flex flex-col md:w-1/2 w-5/6 w-full slide-info-height mt-4 lg:mt-0">

        <h4 class="font-semibold text-gray-300 text-lg mb-2">{{ '0' + (currentSlide + 1) }}</h4>

        <h3 class="font-bold text-gray-600 mb-1 text-base">{{ projects[currentSlide].heading }} <span class="font-semibold">{{ projects[currentSlide].headingSupport }}</span></h3>

        <p>{{ projects[currentSlide].role }}</p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">OVERVIEW: </span>
          {{ projects[currentSlide].overview }}
        </p>

        <p class="mt-4 text-gray-600">
          <span class="font-bold text-gray-400 text-sm">KEY FEATURES: </span>
          {{ projects[currentSlide].keyFeatures }}
        </p>

        <div class="tech-used flex mt-4">

          <img v-for="(logo, index) in projects[currentSlide].logos" :src="logo.src" :key="index"
          :alt="logo.name" :class="logo.additionalClasses" class="object-contain">

        </div>

        <div class="flex">

          <a v-for="(button, index) in projects[currentSlide].buttons" :key="index" target="_blank"
          :href="button.url" class="self-start">

            <button type="button" :class="button.additionalClasses"
            class="border border-gray-600 px-6 py-2 mt-6 rounded">
            {{ button.name }}
            </button>

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
import {ProjectsData} from '@/data/ProjectsData.js';

/*
* currentSlide is synced w/ the swiper.realIndex for supporting text & nav
*/
export default {
  name: 'ProjectsOverview',
  data() {
   return {
     projects: ProjectsData,
     currentSlide: 0,
     amountOfSlides: ProjectsData.length,
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

  .slider{
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
