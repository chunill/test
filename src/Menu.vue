<script setup>
import { ref } from 'vue'
const menuShow = ref(0)
const changeShow = (show) => {
    menuShow.value = show
}
</script>

<template>
    <input type="image" src="/menuButton.png" class="menuButton" 
            @click="changeShow(1)" />
    <div id="menuBoard" v-if="menuShow" />
    <input type="image" src="/menuDeleteButton.png" 
            class="menuButton" v-if="menuShow" @click="changeShow(0)">
</template>

<style scoped>
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
    animation: menuShow 0.8s linear;
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