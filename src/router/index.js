import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'MyHome',
        component: () => import('../views/MyHome.vue')
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: () => import('../views/PostDetail.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router