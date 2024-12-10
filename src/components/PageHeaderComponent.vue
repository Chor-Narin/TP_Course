<template>
    <div id="app" >
        <div><h1>COke & Mile</h1></div>
        <div class= "navbar">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Coke & Milk</a>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "PageHandlerComponent"
    
}
</script>


<style scoped>
#app{
    background-color: rgb(206, 229, 221);
    padding: 20px;
}

.navbar{
    display: inline-block;
    
}
.navbar:hover{
    color: aqua;
}

</style>