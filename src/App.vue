<template>
  <div id="app">
    <category-component :manyCategorys="CategoryData" class="component" />
    <promotion-component :manyPromotions="PromotionData" class="component-1" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import ImageGallery from './components/ImageGallery.vue';
import axios from 'axios';

export default {
  name: "App",
  components: {
    ButtonComponent,
    PromotionComponent,
    CategoryComponent,
    ImageGallery,
  },
  data() {
    return {
      CategoryData: [],
      PromotionData: []
    }
  },
  methods: {
    fetchCategories() {
      axios.get('http://localhost:3000/api/categories')
        .then(response => {
          this.CategoryData = response.data;
          console.log('CategoryData:', this.CategoryData);
        })
        .catch(error => console.error("Error fetching categories:", error));
    },
    fetchPromotions() {
      axios.get('http://localhost:3000/api/promotions')
        .then(response => {
          this.PromotionData = response.data;
          console.log('PromotionData:', this.PromotionData);
        })
        .catch(error => console.error("Error fetching promotions:", error));
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
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
