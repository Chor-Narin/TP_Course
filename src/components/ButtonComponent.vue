
<template>
  <div>
  <b-button :style="{ backgroundColor: buttonColor }">Shop Now</b-button>
  </div>
</template>
<script>
export default {
  props: {
    buttonColor: {
      type: String,
      default: 'blue',
    },
  },
  data(){
    return {
      promotion: 'buy2get1free',
    }
  },
  methods:{
    shopNow(promotion){
      alert("let's buy anything you want ")
    }
  }
}
</script>
<style scoped>
</style>