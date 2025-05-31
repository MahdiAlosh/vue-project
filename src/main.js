import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
// to install tailwindcss, run: npm install -D tailwindcss@3 postcss autoprefixer
// then run: npx tailwindcss init to create the tailwind.config.js file
import { createApp } from 'vue'
// import App from './App.vue'
import App from './App3.vue'


const app = createApp(App);

app.use(router);
app.mount('#app');
