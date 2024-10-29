import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue 3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';

// Import components
import ButtonComponent from './components/ButtonComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';

const app = createApp(App);

// Use BootstrapVue3
app.use(BootstrapVue3);

// Register components
app.component('ButtonComponent', ButtonComponent);
app.component('CategoryComponent', CategoryComponent);
app.component('PromotionComponent', PromotionComponent);

// Mount the app
app.mount('#app');
