import './assets/main.css';

import { createSSRApp } from 'vue';
// import App from './App.vue';

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`,
});

app.mount('#app');
