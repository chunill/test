<script setup>
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
import AboutMe from './components/AboutMe.vue'
</script>


<template>
    <Title id="title" />
    <Menu id="menu" />
    <AboutMe id="aboutMe" />
</template>


<style scoped>
#title {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0rem;
  text-align: center;
}

#menu {
  position: fixed;
  width: 200px;
  height: 100%;
}

#aboutMe {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 60px;
  height: 60px;
}
</style>