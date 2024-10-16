<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>This is my first VueJs project</h1>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
  html, body {
  height: 100%; 
  margin: 0;
  }

.wrapper {
  display: flex;
  justify-content: center; 
  align-items: center;   
  height: 100vh;        
}

h1 {
  font-size: 2rem;  
}

</style>
