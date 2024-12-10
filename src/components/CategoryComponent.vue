<template>
  <div id="app">
    <div>
      <!-- Use router-link to navigate -->
      <router-link 
        v-for="Category in manyCategorys" 
        :key="Category.name"
        :to="`/products/${Category.id}`"
        class="clickable-card"
      >
        <figure :style="{ backgroundColor: Category.color }">
          <img :src="Category.image" alt="Category image" class="image" />
          <figcaption class="title">{{ Category.name }}</figcaption>
          <figcaption>{{ Category.productCount }} items</figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    manyCategorys: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
#app > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
}
.clickable-card {
  text-decoration: none; /* Prevent default link styling */
}
figure {
  width: 100px;
  padding: 10px;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

figure:hover {
  transform: scale(1.05);
}

figcaption {
  text-align: center;
}

.title {
  margin-top: 5px;
  font-weight: bold;
}

.image {
  max-width: 100%;
  height: 50%;
  object-fit: contain;
}
</style>
