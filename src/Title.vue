<script>
</script>

<template>
    <div class="titleBlock">
        <h1 id="pageTitle"> 阿千的雜物堆 </h1>
    </div>
    <br>
    <div class="titleBlock">
        <p id="pageTitle"> test </p>
    </div>
</template>

<style scoped>
    .titleBlock {
        width: 700px;
        height: 150px;
        padding: 0;
        background-color: white;
        border-radius: 4px;
    }

    #pageTitle {
        position: relative;
        top: 30%;
        padding: 0;
        color: black;
        animation: title 2s ease-in-out;
    }
    @keyframes title{
        0% {opacity: 0;}
        100%{opacity: 1;}
    }
</style>
