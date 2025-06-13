import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router'
// to install tailwindcss, run: npm install -D tailwindcss@3 postcss autoprefixer
// then run: npx tailwindcss init to create the tailwind.config.js file
import { createApp } from 'vue'
// import App from './App.vue'
import App from './App3.vue'


const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount('#app');

// npm run dev
// npm run build
// npm run server
// on package.json: "server": "json-server --watch src/jobs.json --port 3000"

