import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { setupCalendar } from 'v-calendar';


const app = createApp(App);
app.use(setupCalendar, {})

app.use(router);
app.use(createPinia());

app.mount('#app');
