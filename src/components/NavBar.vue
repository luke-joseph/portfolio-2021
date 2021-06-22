<template>
  <div class="container mx-auto">

    <div id="large-nav" class="hidden sm:flex items-center leading-loose tracking-wide text-base">

       <div class="container mx-auto flex items-center justify-between">

         <nav class="hidden sm:flex mx-auto w-full">

             <div class="flex pt-2 pb-2 text-grey-600 font-bold items-center justify-between w-1/2 mx-auto">

               <a to="#" class="home cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">Home</a>

               <a to="#projects" class="project cursor-pointer tracking-wider hover:no-underline text-lg">Projects</a>

               <img src="../assets/69426404_463769394467924_3898618810080587669_n.jpg"
               class="rounded-full w-24 mx-4"
               alt="Luke Cartoon Logo">

               <a to="#about" class="about cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">About</a>

               <a to="#contact" class="contact cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">Contact</a>

             </div>

         </nav>

       </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="css" scoped>
</style>
