<script>
</script>

<template>
    <div class="titleBlock">
        <h1 class="pageText"> 阿千的雜物堆 </h1>
    </div>
    <br>
    <div class="titleBlock">
        <p class="pageText">  </p>
    </div>
</template>

<style scoped>
    p, h1 {
        position: relative;
        top: 30%;
        color: black;
        animation: title 2s ease-in-out;
    }

    .titleBlock {
        width: 700px;
        height: 150px;
        padding: 0;
        background-color: white;
        border-radius: 4px;
    }

    @keyframes title{
        0% {opacity: 0;}
        100%{opacity: 1;}
    }
</style>
