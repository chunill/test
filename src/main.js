import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue'
import AboutMe from './pages/AboutMe.vue'
import Router from "./Router.vue"
import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: Main }, 
    { path: '/about', component: AboutMe },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

const app = createApp(Router)
app.use(router)
app.mount('#main')