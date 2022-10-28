<script>
import Router from "../Router.vue"
// components: {Router}
</script>

<template>
    <div class="aboutMeButton">
    <router-link to="/about"> 
        <input type="image" src="/log4-N273/aboutMe.jpg" id="aboutMeButtonImg" />
    </router-link>
    </div>
</template>

<style scoped>
    .aboutMeButton {
        position: fixed;
        right: 50px;
        bottom: 50px;
        width: 60px;
        height: 60px;
    }
    #aboutMeButtonImg {
        width: 100%;
        height: 100%;
        border-radius: 800em;
    }

    @keyframes title{
        0% {opacity: 0;}
        100%{opacity: 1;}
    }
</style>
