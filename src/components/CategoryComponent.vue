<template>
  <div id="app">
    <div>
      <figure 
      v-for="Category in manyCategorys" 
      :key="Category.name"
      :style="{ backgroundColor: Category.color }">
        <img  :src="Category.image" alt="Category image" class="image" />
        <figcaption class="title">{{ Category.name }}</figcaption>
        <figcaption>{{ Category.productCount }} items</figcaption>
      </figure>
    </div>
  </div>
</template> 
<script>
export default {
  name : 'Category',
  props: {
    manyCategorys: {
      type: Array,
      required: true
    }
  },
};
</script>
<style>
#app > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px; 
}
figure {
  width: 100px;
  padding: 10px;
  margin: 0;
  border-radius: 5px;
}
figcaption {
  text-align: center;
}

.title{
  margin-top: 5px;
  font-weight: bold;
}
.image{
  max-width: 100%;
  height: 50%;
  object-fit: contain
}
</style>
