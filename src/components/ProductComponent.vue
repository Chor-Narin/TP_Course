<template>
  <div id="app">

    <router-link class="card" 
        v-for="product in ManyProducts" 
        :key="product.name"
        :to="`/categories/${product.id}`">
      <!-- Sale Badge -->
      <div class="badge-container" v-if="product.promotionAsPercentage > 0">
        <span class="sale-badge">Sale</span>
      </div>
      <!-- Product Image -->
      <img :src="product.image" :alt="product.name" class="image" />
      <div class="card-body">
        <!-- Product Info -->
        <div class="product-info">
          <p class="brand">{{ product.group }}</p>
          <h4 class="product-name">{{ product.name }}</h4>
          <!-- Product Rating -->
          <div class="rating">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ filled: star <= product.rating }"
            >
              ★
            </span>
            <span class="rating-value">({{ product.rating }}.0)</span>
          </div>
          <p class="weight">{{ product.size }} gram</p>
          <!-- Pricing and Add Button -->
          <div class="price-action">
            <div class="pricing">
              <span class="current-price">${{ product.price.toFixed(2) }}</span>
              <span
                class="old-price"
                v-if="product.promotionAsPercentage > 0"
              >
                ${{ (product.price * (1 + product.promotionAsPercentage / 100)).toFixed(2) }}
              </span>
            </div>
            <button class="add-button">
              Add <span class="plus">+</span>
            </button>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    ManyProducts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Overall App Container */
#app {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}

/* Card Styling */
.card {
  display: flex;
  flex-direction: column;
  width: calc(20% - 10px); /* Default: 5 cards per row */
  background: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-5px);
}

/* Sale Badge */
.badge-container {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
}
.sale-badge {
  background-color: #ff9800;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
}
.image {
  width: 100%;
  height: 150px;
  object-fit: contain; 
  border-radius: 8px;
}
.card-body {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.brand {
  color: #666;
  font-size: 12px;
  margin: 0;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
}

.weight {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* Rating */
.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  color: #ddd;
  font-size: 15px;
}

.star.filled {
  color: #ffc107;
}

.rating-value {
  color: #666;
  font-size: 14px;
  margin-left: 4px;
}

/* Pricing and Add Button */
.price-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.pricing {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-price {
  color: #2e7d32;
  font-size: 16px;
  font-weight: 600;
}

.old-price {
  color: #666;
  text-decoration: line-through;
  font-size: 14px;
}

/* Add Button */
.add-button {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: none;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #c8e6c9;
}

.plus {
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .card {
    width: calc(33.33% - 10px); /* 3 cards per row */
  }
}

@media (max-width: 768px) {
  .card {
    width: calc(50% - 10px); /* 2 cards per row */
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%; /* 1 card per row */
  }
}
</style>

