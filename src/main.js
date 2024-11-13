import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';


// Import components
import ButtonComponent from './components/ButtonComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';
import { createPinia } from 'pinia';


const app = createApp(App);
app.use(createPinia()); 


app.use(BootstrapVue3);
app.component('ButtonComponent', ButtonComponent);
app.component('CategoryComponent', CategoryComponent);
app.component('PromotionComponent', PromotionComponent);

app.mount('#app');
