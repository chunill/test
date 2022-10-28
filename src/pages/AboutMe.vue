<script setup>
    import Title from '../components/Title.vue'
    import Menu from '../components/Menu.vue'

    const title = "關於我"
</script>


<template>
    <Title :title=" title "/>
    <Menu />
</template>


<style scoped>
    .title {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem;
    text-align: center;
    }

    .menu {
    position: fixed;
    width: 200px;
    height: 100%;
    }

    .aboutMeButton {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    }
</style>