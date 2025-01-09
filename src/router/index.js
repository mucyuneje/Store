import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/aboutme', name: 'aboutme', component: About },
    { path: '/contactme', name: 'contactme', component: Contact },
    { path: '/:catchAll(.*)*', name: 'notfound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;