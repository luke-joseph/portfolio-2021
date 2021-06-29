<template>
  <div class="">

      <!-- Controls for lg screens -->
      <div class="hidden lg:flex w-full mt-16">

        <div class="ml-auto cursor-pointer mr-8" style="background-image: none;">

          <img src="@/assets/arrow-left.png"
          class="w-16" :class="[currentSlide === 0 ? 'opacity-10 hover:opacity-10' : 'opacity-40 hover:opacity-60']"
          @click="$emit('prevSlide')" alt="left arrow">

        </div>

        <div class="mr-auto cursor-pointer" style="background-image: none;">

          <img src="@/assets/arrow-right.png"
          class="w-16" :class="[currentSlide === lastSlideIndex ? 'opacity-10' : 'opacity-40 hover:opacity-60']"
          @click="$emit('nextSlide')" alt="right arrow">

        </div>

      </div>

      <!-- Controls for sm screens -->
      <div id="mobile-swipe-controls" class="flex lg:hidden w-full mt-6">

        <div class="ml-auto cursor-pointer mr-8" style="background-image: none;">

          <img src="@/assets/arrow-left.png"
          class="w-16" :class="[currentSlide === 0 ? 'opacity-10' : 'opacity-40']"
          @click="$emit('prevSlide')" alt="left arrow">

        </div>

        <div class="mr-auto cursor-pointer" style="background-image: none;">

          <img src="@/assets/arrow-right.png"
          class="w-16" :class="[currentSlide === lastSlideIndex ? 'opacity-10' : 'opacity-40']"
          @click="$emit('nextSlide')" alt="right arrow">

        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsControls',
  props:{
    currentSlide:{
      type: Number,
      required: true
    },
    lastSlideIndex:{
      type: Number,
      required: true
    }
  }
}
</script>
