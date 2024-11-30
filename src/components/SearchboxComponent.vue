<template>
    <div class="search-bar">
      <div class="search-bar-container">
        <select v-model="selectedCategory" class="category-dropdown">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
          <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for items"
          class="search-input"
        />
  
        <!-- Search Button -->
        <button @click="handleSearch" class="search-button">
          🔍
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchboxComponent",
    data() {
      return {
        categories: ["All Categories", "Electronics", "Books", "Clothing", "Home Appliances"],
        selectedCategory: "All Categories",
        searchQuery: "",
      };
    },
    methods: {
      handleSearch() {
        // Emit the search query and selected category to the parent component
        console.log("Category:", this.selectedCategory);
        console.log("Search Query:", this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  
  .search-bar-container {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .category-dropdown {
    border: none;
    padding: 8px;
    background-color: #f9f9f9;
    font-size: 14px;
    outline: none;
  }
  
  .search-input {
    flex: 1;
    padding: 8px;
    border: none;
    font-size: 14px;
    outline: none;
  }
  
  .search-button {
    background-color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .search-button:hover {
    background-color: #f1f1f1;
  }
  </style>
  