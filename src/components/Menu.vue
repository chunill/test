<script setup>
import { ref } from 'vue'
const menuShow = ref(0)
const changeShow = (show) => {
    menuShow.value = show
}
</script>

<template>
    <div class="menu">
        <input type="image" src="/log4-N273/Menu/menuButton.png" class="menuButton" 
                @click="changeShow(1)" />
        <div id="menuBoard" v-if="menuShow" />
        <input type="image" src="/log4-N273/Menu/menuDeleteButton.png" 
                class="menuButton" v-if="menuShow" @click="changeShow(0)">
    </div>
</template>

<style scoped>
    .menu {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 200px;
        height: 100%;
    }

    .menuButton {
        position: fixed;
        width: 50px;
        height: 50px;
        top: 10px;
        left: 10px;
        animation: button 1s ease-in;
    }

    #menuBoard {
        position: fixed;
        width: 200px;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background-color: aliceblue;
        animation: menuShow 0.3s ease-out;
    }

    @keyframes menuShow{
    0%   {left: -200px;}
    100% {left: 0px;}
    }

    @keyframes button{
        0% {opacity: 0;}
        100%{opacity: 1;}
    }
</style>