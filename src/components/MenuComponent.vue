<template>
  <nav class="header-nav">
    <div class="brand">
      <h1>Popular Products</h1>
    </div>
    <div class="nav-links">
      <a href="#" class="nav-link">All</a>
      <a href="#" class="nav-link">Milks & Dairies</a>
      <a href="#" class="nav-link">Coffees & Teas</a>
      <a href="#" class="nav-link">Pet Foods</a>
      <a href="#" class="nav-link">Meats</a>
      <a href="#" class="nav-link">Vegetables</a>
      <a href="#" class="nav-link">Fruits</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent',
};
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.brand h1 {
  font-size: 1.5rem;
  color: #253d4e;
  font-weight: 600;
  margin: 0;
}
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: #253d4e;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}
.nav-link:hover {
  color: #e42012;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .header-nav {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .brand {
    margin-bottom: 1rem;
  }
}
@media (max-width: 480px) {
  .nav-links {
    gap: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>
