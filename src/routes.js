import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
import Checkout from "@/pages/checkout.vue";
import Success from "@/pages/success.vue";

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home,
    },
    {
        path:"/checkout",
        name:"Checkout",
        component:Checkout,
    },
    {
        path:"/success",
        name:"Success",
        component:Success,
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;