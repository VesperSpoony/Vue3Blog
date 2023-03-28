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
    },
    {
        path: '/create',
        name: 'CreatPost',
        component: () => import('../views/CreatPost.vue'),
    },
    {
        path: '/tags/:tag',
        name: 'Tag',
        component: () => import('../views/TagSearch.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router