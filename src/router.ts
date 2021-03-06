import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import PrimarySymbol from "@/views/PrimarySymbol.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/PrimarySymbol', name: 'PrimarySymbol', component: PrimarySymbol}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router