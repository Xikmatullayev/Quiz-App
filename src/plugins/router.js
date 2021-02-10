import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import HomeUz from "../views/HomeUz";
import HomeRu from "../views/HomeRu";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/uz',
        name: 'home-uz',
        component: HomeUz
    },
    {
        path: '/ru',
        name: 'home-ru',
        component: HomeRu
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router