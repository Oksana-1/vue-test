<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Api from "@/api/Api.js";
import { ref } from "vue";
const api = new Api();
const isLoading = ref(true);
const posts = ref(null);

async function init() {
  try {
    posts.value = await api.fetchPosts();
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}
setTimeout(() => {
  init();
}, 3000);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="main">
    <div v-if="isLoading" class="loader">Loading...</div>
    <TheWelcome v-else :posts="posts" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
