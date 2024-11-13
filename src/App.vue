<template>
  <div id="app">
    <category-component :manyCategorys="categories" class="component" />
    <promotion-component :manyPromotions="promotions" class="component-1" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import ImageGallery from './components/ImageGallery.vue';
import { useProductStore } from './stores/index'; 
import { onMounted, computed } from 'vue';

export default {
  name: "App",
  components: {
    ButtonComponent,
    PromotionComponent,
    CategoryComponent,
    ImageGallery,
  },
  setup() {
    const productStore = useProductStore();

    // Fetch categories and promotions on component mount
    onMounted(() => {
      productStore.fetchCategories();
      productStore.fetchPromotions();
    });

    // Getters using computed properties
    const categories = computed(() => productStore.getCategoriesByGroup('Group A')); 
    const promotions = computed(() => productStore.getProductsByGroup('Group A')); 

    return {
      categories,
      promotions
    };
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center; 
  background-color: #f5f5f5;
}
.component {
  margin-top: 200px;
}
</style>
