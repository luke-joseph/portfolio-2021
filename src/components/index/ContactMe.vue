<template>
  <div class="flex flex-col w-full mx-auto mt-16">

    <h2 class="z-50 text-center inline-block bg-white?">
      <span class="bg-white px-4 text-xl">Need Help With Your Website?</span>
    </h2>

    <div class="w-full h-1 border border-gray-50 bg-gray-100 -mt-3 mb-16"></div>

    <div class="flex w-2/3 mx-auto">

      <div class="w-1/2">

        <h3 class="font-semibold text-gray-500">CURRENT STATUS</h3>

        <p v-if="available" class="mt-4">

          {{ availableMessage }}

        </p>

        <p v-else>

          {{ notAvailableMessage }}

        </p>

      </div>

      <div class="w-1/2">

        <h3 class="font-semibold text-gray-500">CONTACT METHODS</h3>

        <p>send an email</p>

        <p>message on linkedin</p>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data(){
    return{
      available: true,
      notAvailableMessage: "I'm not currently available for large projects at the moment",
      availableMessage: "I'm currently available for projects. Let's build something amazing"
    }
  }
}
</script>
