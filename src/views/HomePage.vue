<template>

  <div class="flex flex-col text-center">

    <div class="mt-16">
      <h2 class="text-xl mb-1">Hi, I'm Luke & I'm a</h2>
      <h1 class="text-5xl mb-2 font-bold">Full Stack Developer</h1>
      <h2 class="text-xl">Based in Berlin</h2>
    </div>


    <div id="fave-stack" class="flex flex-col w-full mt-6 py-10">

        <div class="flex flex-wrap w-full mx-auto z-50">

          <div class="w-1/4 mt-4 h-full">
            <p class="bg-white inline text-xl text-gray-300 italic px-4">Backend</p>
          </div>

          <div class="w-1/2 grid grid-cols-4">
            <div class="flex flex-col h-full">
              <img src="../assets/PHP-logo.svg" class="w-20 h-16 mx-auto object-contain" alt="laravel logo">
              <p class="text-xl text-gray-500">PHP</p>
            </div>

            <div class="flex flex-col h-full">
              <img src="../assets/laravel-logo.png" class="w-16 h-16 mx-auto object-contain" alt="laravel logo">
              <p class="text-xl text-gray-500">Laravel</p>
            </div>

            <div class="flex flex-col h-full">
              <img src="../assets/vue-logo.png" class="w-16 h-16 mx-auto object-contain" alt="vue logo">
              <p class="text-xl text-gray-500">Vue</p>
            </div>

            <div class="flex flex-col h-full">
              <img src="../assets/tailwindcss-logo.jpg" class="w-16 h-16 mx-auto object-contain" alt="tailwind logo">
              <p class="text-xl text-gray-500">Tailwind</p>
            </div>
          </div>


          <div class="w-1/4 mt-4 h-full">
            <p class="bg-white inline text-xl text-gray-300 italic px-4">Frontend</p>
          </div>

        </div>

        <div class="w-full h-1 border border-gray-50 bg-gray-100 -mt-16"></div>

      </div>

  </div>



</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
