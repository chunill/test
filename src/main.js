import { createApp } from 'vue'
import './style.css'
import Title from "./Title.vue"
import Menu from "./Menu.vue"

createApp(Title).mount('#title')
createApp(Menu).mount('#menu')