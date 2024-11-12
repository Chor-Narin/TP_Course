<template>
    <div>
      <h1>Image Gallery</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="category in categories" :key="category.id" class="category">
          <h2>{{ category.name }}</h2>
          <p>Count: {{ category.productCount }}</p>
          <p>Color: {{ category.color }}</p>
          <img v-bind:src="getPhoto()" />
        </div>
      </div>  
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  
  export default {
    data() {
      return {
        categories: [],
        loading: true,
      };
    },
    async created() {
      await this.fetchCategories();
    },
    methods: {
      getPhoto(){
        return '@/assets/apple.png';

      },
      async fetchCategories() {
        try {
          const response = await axios.get('http://localhost:3000/api/categories'); // Adjust the URL as needed
          this.categories = response.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .category {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 200px; /* Adjust the size as needed */
    height: auto;
  }
  </style>
  