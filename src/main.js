import { createApp } from 'vue'
import './style.css'
import Title from "./Title.vue"
import Menu from "./Menu.vue"
import AboutMe from "./AboutMe.vue"

createApp(Title).mount('#title')
createApp(Menu).mount('#menu')
createApp(AboutMe).mount('#aboutMe')