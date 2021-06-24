<template>
  <div class="">
    <div class="flex w-full container mx-auto">
      <img src="@/assets/city-sillouhette.png" alt="city illustration" class="w-1/2 sm:w-1/3 mx-auto opacity-25 mt-auto">
    </div>
    <footer class="h-12 w-full bg-gray-100">

      <div class="container mx-auto flex h-full">

        <p class="my-auto pl-12 text-gray-400">copyright {{ year }}</p>

      </div>

    </footer>
  </div>

</template>

<script>
export default{
  name: 'FooterComponent',
  data(){
    return{
      year: new Date().getFullYear(),
    }
  }
}
</script>
