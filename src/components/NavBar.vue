<template>
  <div class="container mx-auto">

    <div id="large-nav" class="flex items-center leading-loose tracking-wide text-base mt-4 lg:mt-0">

       <div class="container mx-auto flex items-center justify-between">

         <nav class="flex mx-auto w-full">

             <div class="flex pt-2 pb-2 text-gray-500 font-semibold items-center justify-between w-1/2 mx-auto">

               <a href="#" class="home hidden lg:block cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">Home</a>

               <a href="#projects" class="project hidden lg:block cursor-pointer tracking-wider hover:no-underline text-lg">Projects</a>

               <img src="@/assets/logo4.png"
               class="rounded-full w-24 mx-auto lg:mx-4 "
               alt="Luke Cartoon Logo">

               <a href="#about" class="about hidden lg:block cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">About</a>

               <a href="#contact" class="contact hidden lg:block cursor-pointer tracking-wider pr-4 hover:no-underline text-lg">Contact</a>

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
