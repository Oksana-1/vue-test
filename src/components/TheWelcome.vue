<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
defineProps({
  posts: Array,
});
</script>

<template>
  <div class="the-welcome">
    <WelcomeItem v-for="post in posts" :key="`postId-${post.id}`">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>{{ post.title }}</template>
      {{ post.body }}
    </WelcomeItem>
  </div>
</template>
