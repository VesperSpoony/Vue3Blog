<script setup>
import PostList from "../components/PostList.vue";
import getPosts from "../composibles/getPosts";
import MySpinner from "../components/MySpinner.vue";

const { posts, load } = getPosts();
load();
</script>

<template>
  <div class="home">
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      <MySpinner></MySpinner>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
