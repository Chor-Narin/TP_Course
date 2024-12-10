<template>
    <div class="container my-5">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Vegetables & Tubers</a></li>
          <li class="breadcrumb-item active" aria-current="page">Seeds of Change Organic</li>
        </ol>
      </nav>
  
      <div class="row">
        <!-- Image Section -->
        <div class="col-md-6">
          <!-- Main Image -->
          <div class="main-image mb-3" id="image">
            <img
              :src="mainImage"
              alt="Main Product"
              class="img-fluid border "
            />
            </div>
  
          <!-- Thumbnail Carousel -->
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-secondary" @click="prevImage">←</button>
            <div class="thumbnail-container d-flex gap-2">
              <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                alt="Thumbnail"
                class="thumbnail border"
                @click="setMainImage(image)"
              />
            </div>
            <button class="btn btn-outline-secondary" @click="nextImage">→</button>
          </div>
        </div>
  
        <!-- Product Details -->
        <div class="col-md-6">
          <h4>Seeds of Change Organic Quinoa, Brown</h4>
          <span class="badge bg-success mb-2">In Stock</span>
          <p>
            <span class="text-warning me-2">★★★★☆</span>
            <small>(40 reviews)</small>
          </p>
          <h3 class="text-success">$38 <span class="text-muted fs-6"><del>$42</del></span></h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rem
            officia, corrupti reiciendis minima nisi modi, quasi, odio minus.
          </p>
  
          <!-- Quantity and Add to Cart -->
          <div class="d-flex align-items-center my-3">
            <input
              type="number"
              min="1"
              v-model="quantity"
              class="form-control w-25 me-3"
            />
            <button class="btn btn-success">Add To Cart</button>
          </div>
  
          <!-- Vendor and SKU -->
          <p><strong>Vendor:</strong> NestMart</p>
          <p><strong>SKU:</strong> FVM15VKT</p>
        </div>
      </div>
  
      <!-- Tabs Section -->
      <div class="mt-5">
        <ul class="nav nav-tabs" id="productTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="additional-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#additional-info"
              type="button"
              role="tab"
              aria-controls="additional-info"
              aria-selected="false"
            >
              Additional Info
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews (3)
            </button>
          </li>
        </ul>
        <div class="tab-content" id="productTabContent">
          <div
            class="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p>
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much...
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="additional-info"
            role="tabpanel"
            aria-labelledby="additional-info-tab"
          >
            <p>Additional information goes here.</p>
          </div>
          <div
            class="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <p>Reviews go here.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import apple from '../assets/apple.png'
  import cabbage from '../assets/cabbage.png'
  import banana from '../assets/banana.png'
  export default {
    name: "ProductImageComponent",
    data() {
      return {
        images: [cabbage, apple, banana, apple], // Placeholder for image sources
        mainImage: apple, // Main image placeholder
        quantity: 1,
      };
    },
    methods: {
      setMainImage(image) {
        this.mainImage = image;
      },
      prevImage() {
        const currentIndex = this.images.indexOf(this.mainImage);
        this.mainImage =
          this.images[
            (currentIndex - 1 + this.images.length) % this.images.length
          ];
      },
      nextImage() {
        const currentIndex = this.images.indexOf(this.mainImage);
        this.mainImage = this.images[(currentIndex + 1) % this.images.length];
      },
    },
  };
  </script>
  
  <style>
  .thumbnail {
    width: 50px;
    height: 50px;
    cursor: pointer;
    object-fit: cover;
  }
  .thumbnail-container {
    overflow-x: auto;
    white-space: nowrap;
  }
  #image{
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
  }
  </style>
  