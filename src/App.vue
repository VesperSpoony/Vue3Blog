<script setup>
import MyNavbar from "./components/MyNavbar.vue";
</script>

<template>
  <MyNavbar></MyNavbar>
  <router-view></router-view>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
