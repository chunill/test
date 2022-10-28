<script setup>
    import Title from './components/Title.vue'
    import Menu from './components/Menu.vue'
    import AboutMeButton from './components/AboutMeButton.vue'

    const title = "阿千的雜物堆"
  </script>


<template>
    <Title :title=" title " />
    <Menu />
    <AboutMeButton />
</template>


<style scoped>
</style>