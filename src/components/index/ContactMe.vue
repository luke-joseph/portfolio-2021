<template>
  <div class="flex flex-col w-full mx-auto mt-8">

    <h2 class="z-50 lg:text-center inline-block">
      <span class="bg-white px-4 text-xl lg:text-xl">Need Help With Your Website?</span>
    </h2>

    <div class="w-full h-1 border border-gray-50 bg-gray-100 -mt-3 mb-16"></div>

    <div class="flex flex-col lg:flex-row px-4 xl:px-0 w-full xl:w-2/3 mx-auto -mt-6 lg:-mt-0">

      <div class="w-full lg:w-1/2 mb-8">

        <div class="flex mb-4">

          <div class="" v-if="fullyAvailable">

            <h3 class="flex items-center mb-6 font-semibold text-green-500 text-base">

              <span class="h-3 w-3 bg-green-500 rounded-full mr-2"></span>

              I'm currently available for new projects

            </h3>

            <p class="w-5/6 mb-3 text-gray-600">

              Please enquire if your would like me to be a part of your next project.

            </p>

            <p class="text-gray-600">

              Let's build something amazing.

            </p>

          </div>

          <div class="" v-if="partlyAvailable">

            <h3 class="flex items-center mb-6 font-semibold text-yellow-600">

              <span class="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>

              I'm partially available for new projects

            </h3>

            <p class="w-5/6 mb-3">

              I'm currently available for small scale projects at the moment. Feel free to message me with your project details and I'll do my best to accomodate you.

            </p>

          </div>

          <div class="" v-if="notAvailable">

            <h3 class="flex items-center mb-6 font-semibold text-red-400">

              <span class="h-3 w-3 bg-red-500 rounded-full mr-2"></span>

              I'm not currently available for new projects

            </h3>

            <p class="w-5/6 mb-3">

              I'm not currently available for any projects at the moment. If you have a <span class="font-bold italic">very short term limited project</span> feel free to message me and I'll do my best to accomodate you.

            </p>

          </div>

        </div>

      </div>

      <div class="w-full lg:w-1/3 ml-auto">

        <h3 class="font-semibold text-gray-500 mb-4">CONTACT METHODS</h3>

        <div class="flex items-center mb-3">

          <a href="https://www.linkedin.com/in/luke-joseph-b20413b2/" class="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-mail">
              <path class="fill-primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/>
              <path class="fill-secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/>
            </svg>
          </a>

          <a href="mailto:hello@lukejoseph.dev" class="ml-1 hover:underline text-gray-600">Send me an email</a>

        </div>

        <div class="flex items-center">

          <a href="https://www.linkedin.com/in/luke-joseph-b20413b2/" class="w-5 h-5 mt-1">
            <img src="@/assets/linkedin.svg" alt="LinkedIn logo" >
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/luke-joseph-b20413b2/" class="ml-1 hover:underline text-gray-600">
            Message me on LinkedIn
          </a>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data(){
    return{
      available: 1,
    }
  },
  computed:{
    fullyAvailable: function(){
      return this.available === 1;
    },
    partlyAvailable: function(){
      return this.available === 2;
    },
    notAvailable: function(){
      return this.available === 3;
    },
  }
}
</script>
