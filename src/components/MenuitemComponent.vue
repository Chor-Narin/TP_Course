<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Browse All Categories Button -->
      <button
        class="btn btn-success me-3"
        type="button"
      >
        Browse All Categories
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Hot Deals</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <!-- Dropdowns for Food -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="foodDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Food
            </a>
            <ul class="dropdown-menu" aria-labelledby="foodDropdown">
              <li><a class="dropdown-item" href="#">Snacks</a></li>
              <li><a class="dropdown-item" href="#">Desserts</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="vegetablesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Vegetables
            </a>
            <ul class="dropdown-menu" aria-labelledby="vegetablesDropdown">
              <li><a class="dropdown-item" href="#">Fresh</a></li>
              <li><a class="dropdown-item" href="#">Frozen</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drink</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cookies</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="meatSeafoodDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Meat & Seafood
            </a>
            <ul class="dropdown-menu" aria-labelledby="meatSeafoodDropdown">
              <li><a class="dropdown-item" href="#">Chicken</a></li>
              <li><a class="dropdown-item" href="#">Fish</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Bakery</a>
          </li>
        </ul>
      </div>

      <!-- Support Center -->
      <div class="d-flex align-items-center">
        <i class="bi bi-headset me-2"></i>
        <span>099 777 888</span>
        <small class="text-muted ms-1">24/7 Support Center</small>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuitemComponent",
};
</script>

<style>
.navbar {
  padding: 10px 20px;
}
</style>
