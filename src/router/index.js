import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import("@/views/login")
    },
    {
        path: '/index',
        name: 'index',
        component: () => import("@/views/index")
    },
    {
        path: '/map',
        name: 'map',
        component: () => import("@/views/map/map")
    },
    {
        // 环保数据库
        path: '/database',
        component: () => import("@/views/database/index"),
        children: [
            {
                path: '/',
                name: 'file',
                component: () => import("@/views/database/file"),
            }
        ]
    }
]


const router = new VueRouter({
    routes
})


export default router