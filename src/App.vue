<template>
  <div class="">

    <nav-bar />

    <router-view class="container shadow-lg mx-auto"/>

    <footer-component />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
