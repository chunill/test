<script setup>
    defineProps(['title'])
</script>

<template>
    <div class="title">
        <div class="TextBlock">
            <h1 class="pageText"> {{ title }} </h1>
        </div>
        <br>
        <!-- <div class="TextBlock">
            <p class="pageText">  </p>
        </div> -->
    </div>
</template>

<style scoped>
    .title {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0rem;
        text-align: center;
    }

    p, h1 {
        position: relative;
        top: 30%;
        color: black;
        animation: title 2s ease-in-out;
    }

    .TextBlock {
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
