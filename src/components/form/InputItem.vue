<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div>
    <input type="text" v-model="name" placeholder="Enter your name" />
  </div>
</template>

<style scoped>
input {
  padding: 10px 15px;
}
</style>
