<template>
  <div id="app">
    <div>
      <div class="card" 
      v-for="Promotion in manyPromotions" 
      :key="Promotion.name"
      :style="{backgroundColor: Promotion.color}">
        <div class="card-content">
          <h5 class="card-title">{{ Promotion.title }}</h5>
          <ButtonComponent 
            :buttonColor="Promotion.buttonColor"
            @click="shopNow(Promotion)"
            class="button" 
          />
        </div>
        <img :src="Promotion.image" alt="Promotion image" class="card-img" />
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'

export default {
  name: 'Promotion',
  components: { ButtonComponent },
  props: {
    manyPromotions: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      promotion: {promotion: 'buy2get1free',}
    };
  },
  methods: {
    shopNow(Promotion) {
      alert("Let's shop: "+Promotion.title);
    }
  }
};
</script>

<style scoped>
#app > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 370px; 
  height: 170px; 
}

.card-content {
  display: flex;
  flex-direction: column;
  flex: 1; 
  margin: 10px; 
}

.card-title {
  font-size: 1em; 
  color: #2b2121;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px;
}

.card-img {
  width: 40%; 
  height: 100%; 
  object-fit: contain; 
  border-radius: 0 10px 10px 0;
}

.button {
  margin-left: 20px;

}
</style>
