<!-- <template>
   <div>
  <b-dropdown id="dropdown-1" text=" Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>
  </template>
  
  <script>
  export default {
    name: "NavbarWithDropdown",
    data() {
    
    },
  };
  </script>
  
  <style scoped>
  /* Navigation Bar Styling */
  .navbar {
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  
  .menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }
  
  .menu-item {
    position: relative;
  }
  
  .menu-item > a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    padding: 5px 10px;
    transition: color 0.3s;
  }
  
  .menu-item > a:hover {
    color: #007bff;
  }
  
  /* Dropdown Menu Styling */
  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
    z-index: 1000;
    min-width: 150px;
  }
  
  .dropdown li {
    padding: 5px 20px;
  }
  
  .dropdown li a {
    text-decoration: none;
    color: #333;
    display: block;
    transition: background-color 0.3s;
  }
  
  .dropdown li a:hover {
    background-color: #f8f9fa;
    color: #007bff;
  }
  
  /* Show Dropdown on Hover */
  .menu-item:hover .dropdown {
    display: block;
  }
  </style>
   -->