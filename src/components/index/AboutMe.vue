<template>
  <div class="flex flex-col-reverse lg:flex-row w-full px-4 xl:px-0 xl:w-2/3 mx-auto mb-12 xl:mb-24">
    <div class="w-full lg:w-1/2">
      <h3 class="font-semibold text-gray-500 text-lg lg:text-base">ABOUT ME</h3>

      <p class="mt-4 text-gray-600">
        Born and raised in the UK, my passion for music, computers and technology has continually shaped my journey. The vibrant blend of creativity and tech in Berlin naturally drew me in.
      </p>

      <p class="mt-4 text-gray-600">
        Professionally, I thrive on leveraging cutting-edge technology to craft seamless solutions and exceptional user experiences. Working with diverse businesses in Berlin and throughout Germany, I relish the opportunity to transform ideas into digital reality.
      </p>

      <p class="mt-4 text-gray-600">
        Outside of coding, you'll often find me immersed in music creation, indulging in series/movies, staying active through exercise, or exploring captivating literature.
      </p>

      <div class="social-links flex mt-5 items-center">

        <a target="_blank" href="https://github.com/luke-joseph">
          <img src="@/assets/GitHub-Mark-32px.png" class="w-5 object-contain mr-2" alt="github logo">
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/luke-joseph-b20413b2/" class="w-6">
          <img src="@/assets/linkedin.svg" alt="linkedin" >
        </a>


      </div>

    </div>
    <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
      <img src="@/assets/luke-job-pic.png" alt="Luke professional image" class="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/2 lg:mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>
