<script setup>
import SinglePost from "./SinglePost.vue";
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onUnmounted,
  onMounted,
  onUpdated,
} from "vue";
defineProps({
  posts: Array,
});
// onMounted(() => {
//   alert("onMounted");
// });
// onUpdated(() => {
//   alert("onUpdated");
// });
// onUnmounted(() => {
//   alert("onUnmounted");
// });
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<style scoped>
</style>
