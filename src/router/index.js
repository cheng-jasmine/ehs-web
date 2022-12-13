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
        redirect: '/database/file',
        children: [
            {
                path: 'file',
                name: 'file',
                component: () => import("@/views/database/file"),
            },
            {
                path: '2',
                name: '2',
                component: () => import("@/views/login"),
            }
        ]
    }
]


const router = new VueRouter({
    routes
})


export default router