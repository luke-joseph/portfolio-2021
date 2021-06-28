<template>
  <div class="flex flex-col text-center">

    <div class="mt-4 lg:mt-12">
      <h2 class="text-2xl mb-1">Hi, I'm Luke & I'm a</h2>
      <h1 class="text-4xl lg:text-5xl mb-2 font-bold">Full Stack Developer</h1>
      <h2 class="text-2xl">Based in Berlin</h2>
    </div>


    <div id="fave-stack" class="flex flex-col w-full mt-6 py-10">

        <div class="flex flex-wrap w-full mx-auto z-50">

          <div class="hidden lg:block lg:w-1/4 mt-3 h-full">

            <p class="bg-white inline text-xl text-gray-300 italic px-4">Backend</p>

          </div>

          <div class="w-full lg:w-1/2 grid grid-cols-4">

            <div class="flex flex-col h-full text-gray-300 hover:text-gray-700">
              <img src="@/assets/php-logo-basic.svg" class="w-20 h-16 mx-auto object-contain" alt="php logo">
              <p class="text-base font-semibold">PHP</p>
            </div>

            <div class="flex flex-col h-full text-gray-300 hover:text-gray-700">
              <img src="@/assets/laravel-logo.png" class="w-16 h-16 mx-auto object-contain bg-white" alt="laravel logo">
              <p class="text-base font-semibold">Laravel</p>
            </div>

            <div class="flex flex-col h-full text-gray-300 hover:text-gray-700">
              <img src="@/assets/vue-logo.png" class="w-12 h-16 mx-auto object-contain" alt="vue logo">
              <p class="text-base font-semibold">Vue</p>
            </div>

            <div class="flex flex-col h-full text-gray-300 hover:text-gray-700">
              <img src="@/assets/tailwindcss-logo.jpg" class="w-16 h-16 mx-auto object-contain" alt="tailwind logo">
              <p class="text-base font-semibold">Tailwind</p>
            </div>

          </div>


          <div class="hidden lg:block lg:w-1/4 mt-3 h-full">

            <p class="bg-white inline text-xl text-gray-300 italic px-4">Frontend</p>

          </div>

        </div>

        <div class="w-full h-1 border border-gray-50 bg-gray-100 -mt-16 mb-16"></div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'IndexHero'
}
</script>
