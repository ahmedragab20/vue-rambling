<template>
  <div>
    <h3>
      {{ post?.title }}
    </h3>
  </div>
</template>

<script setup>
  import { $catch } from 'ar-catch';
  import { ref } from 'vue';

  const post = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const getPost = async () => {
    try {
      loading.value = true;
      const url = 'posts/1';
      const data = await $catch({
        ep: url,
      });

      post.value = data;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
      console.log('yes done✅');
    }
  };
  getPost();
</script>
