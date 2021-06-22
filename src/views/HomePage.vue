<template>

  <div class="flex flex-col">
      <index-hero />
      <about-me />
  </div>

</template>

<script>
import IndexHero from '@/components/index/IndexHero.vue'
import AboutMe from '@/components/index/AboutMe.vue'

export default {
  name: 'HomePage',
  components: {
    IndexHero,
    AboutMe
  }
}
</script>

<style lang="css" scoped>
</style>
