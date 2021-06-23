<template>
  <footer class="h-12 w-full bg-gray-100">

    <div class="container mx-auto flex h-full">
      
      <p class="my-auto pl-12">copyright {{ year }}</p>

    </div>

  </footer>
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
