<script setup>
import InputItem from "@/components/form/InputItem.vue";
import { ref } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const userName = ref("");

function printGreeting() {
  console.log(`Hello, ${userName}`);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <form class="greeting-form" @submit="printGreeting">
      <InputItem v-model="userName" />
      <button class="greeting-form__button" type="submit">Say Hello</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.greeting-form {
  margin: 30px 0;
}
.greeting-form__button {
  margin: 10px 0;
  padding: 10px 15px;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  color: hsla(0, 0%, 100%);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 3px;
}
</style>
