<template>
    <div id="app">
      <div class="container">
        <HeaderBarNav />
        <MenuitemComponent />
        <MenuComponent  class="component-3" />
        <category-component :manyCategorys="categories" class="component" />
        <promotion-component :manyPromotions="promotions" class="component-1" />
        <MenuComponent  class="component-3" />
        <ProductComponent  :ManyProducts = "products" class="component-2" />
      </div>
    </div>
  </template>
  <script>
  import { mapState } from 'pinia';
  import { useProductStore } from '../stores/index'; 
  import { onMounted, computed } from 'vue';
  import ProductComponent from '../components/ProductComponent.vue'
  import MenuComponent from '../components/MenuComponent.vue'
  import Category from '../components/CategoryComponent.vue'
  import Promotion from '../components/PromotionComponent.vue'
  import HeaderBarNav from '../components/HeaderBarNav.vue'
  import SearchboxComponent from '../components/SearchboxComponent.vue'
  import MenuitemComponent from '../components/MenuitemComponent.vue'
  import ProductImageComponent from '../components/ProductImageComponent.vue'

  
  export default {
    name: "HomeView",
    setup() {
      const productStore = useProductStore();
      onMounted(() => {
  
        productStore.fetchCategories();
        productStore.fetchPromotions();
        productStore.fetchProducts();
      });
      // Dynamically map store data using mapState
      const categories = computed(() => productStore.categories);  
      const promotions = computed(() => productStore.promotions);
      const products = computed(() => productStore.products);
  
      return {
        categories,
        promotions,
        products,
        
      };
    },
    components: {
      MenuComponent,
      ProductComponent,
      Category,
      Promotion,
      HeaderBarNav,
      MenuitemComponent,
      ProductImageComponent
    },
    computed: {
      ...mapState(useProductStore, {
        categories: 'categories', 
        promotions: 'promotions', 
        products: 'products',
      }),
    },
  };
  </script>
  
  <style scoped>
  #app {
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .menu-bar {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
  }
  .featured-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
  
  .categories {
    flex: 1 1 calc(25% - 10px);
    border: 1px solid #ddd;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .promotions-section {
    display: flex;
    gap: 15px;
    justify-content: space-between;
  }
  
  .promotion-card {
    flex: 1 1 calc(33% - 15px);
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    background-color: #fefefe;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Popular Products Section */
  .popular-products {
    margin-top: 20px;
  }
  
  .popular-products h2 {
    margin-bottom: 15px;
    font-size: 24px;
    color: #333;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .product-list > * {
    flex: 1 1 calc(20% - 15px);
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .product-list img {
    max-width: 100%;
    border-radius: 4px;
  }
  
  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .categories, .promotion-card, .product-list > * {
      flex: 1 1 calc(50% - 10px);
    }
  }
  
  @media screen and (max-width: 480px) {
    .categories, .promotion-card, .product-list > * {
      flex: 1 1 100%;
    }
  }
  </style>