<script setup>
  import { onBeforeMount, onMounted, ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  const items = ref([
    {
      id: 1,
      title: 'image one',
      src: 'https://images.unsplash.com/photo-1682673649000-6ef8356758cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      containerTag: 'article',
    },
    {
      id: 2,
      title: 'image two',
      src: 'https://images.unsplash.com/photo-1691933111771-9ab374269391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      containerTag: 'section',
    },
  ]);

  let counter = ref(0);

  const increment = () => {
    counter.value++;
  };

  onBeforeMount(() => {
    console.log('before mount');
  });
  onBeforeMount(() => {
    console.log('before mount 2');
  });

  onMounted(() => {
    console.log('mounted');
  });
  onMounted(() => {
    console.log('mounted 2');
  });
  onMounted(() => {
    console.log('mounted 3');
  });

  onBeforeMount(() => {
    console.log('before mount 3');
  });
</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    Counter: {{ counter }}
  </div>

  <HelloWorld msg="Hello Vue 3 + Vite" :items="items">
    <template #default="{ title, src }">
      <p>default slot: {{ title }}</p>
      <img :src="src" alt="Vue.js Logo" width="100" />
    </template>
  </HelloWorld>
</template>
