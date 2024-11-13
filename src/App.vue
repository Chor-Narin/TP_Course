<template>
  <div id="app">
    <category-component :manyCategorys="categories" class="component" />
    <promotion-component :manyPromotions="promotions" class="component-1" />
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from './stores/index'; 
import { onMounted, computed } from 'vue';

export default {
  name: "App",
  setup() {
    const productStore = useProductStore();
        onMounted(() => {
      productStore.fetchCategories();
      productStore.fetchPromotions();
    });
    // Dynamically map store data using mapState
    const categories = computed(() => productStore.categories);  
    const promotions = computed(() => productStore.promotions);

    return {
      categories,
      promotions
    };
  },
  computed: {
    ...mapState(useProductStore, {
      categories: 'categories', 
      promotions: 'promotions', 
    })
  }
};
</script>
