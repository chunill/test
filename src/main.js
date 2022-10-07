import { createApp } from 'vue'
import './style.css'
import Main from "./Main.vue"
import PageHand from "./PageHand.vue"

createApp(Main).mount('#main')
createApp(PageHand).mount('#pageHand')
