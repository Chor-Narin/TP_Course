<template>
    <div id="app">
        <div class="container">
            <HeaderBarNav />
            <MenuitemComponent />
            <PageHandlerComponent />
        </div>
    </div>
</template>

<script>
  import HeaderBarNav from '../components/HeaderBarNav.vue'
  import MenuitemComponent from '../components/MenuitemComponent.vue'
  import PageHandlerComponent from '../components/PageHeaderComponent.vue'


export default {
    name: "ProductView",
    components: {
        HeaderBarNav,
        MenuitemComponent,
        PageHandlerComponent
    }

}
</script>
<style scoped>
 #app {
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

</style>        