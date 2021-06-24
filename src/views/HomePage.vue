<template>

  <div class="flex flex-col">
      <index-hero />
      <projects-overview />
      <about-me />
      <contact-me />
  </div>

</template>

<script>
import IndexHero from '@/components/index/IndexHero.vue'
import AboutMe from '@/components/index/AboutMe.vue'
import ContactMe from '@/components/index/ContactMe.vue'
import ProjectsOverview from '@/components/index/ProjectsOverview.vue'

export default {
  name: 'HomePage',
  components: {
    IndexHero,
    AboutMe,
    ContactMe,
    ProjectsOverview
  }
}
</script>
