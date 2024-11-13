import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },
    async fetchGroups() {
     try {
       const response = await axios.get('http://localhost:3000/api/groups');
       this.promotions = response.data;
     } catch (error) {
       console.error("Error fetching promotions:", error);
     }
   },
   async fetchProducts() {
     try {
       const response = await axios.get('http://localhost:3000/api/products');
       this.promotions = response.data;
     } catch (error) {
       console.error("Error fetching promotions:", error);
     }
   }
  },
  getters:{
     //List all categories by group name
     getCategoriesByGroup: (state) => {
          return (groupName) => state.categories.find((category) => category.group === groupName)
     },
     //List all products by group name
     getProductsByGroup: (state) => {
          return (groupName) => state.promotions.find((promotions) => promotions.group === groupName)
     },
     //List all products by given categoryId
     getProductsByCategoryId: (state) => {
          return (categoryId) => state.products.filter((product) => product.categoryId === categoryId)
     },
     //Any product with countSold > 10 is considered popular
     getPopularProducts: (state) => {
          return state.products.filter((product) => product.countSold > 10)
     }
     

  },
  setter: {

  }
});
