<template>
  <div class="h-screen">
    <nav-bar />
    <router-view class="container shadow-lg mx-auto h-full"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
