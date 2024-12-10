import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/categories/:categoryId',
    name: 'Category',
    component: CategoryView,
  },
  {
    path: '/products',
    name: 'Product',
    component: ProductView,
    children: [
      {
        path: ':productId',
        component: ProductView,

      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
