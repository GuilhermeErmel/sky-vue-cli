import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Product from '@/views/Product/Product'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'product',
        path: '/product/:code?',
        component: Product,
    }
]

const router = new Router({ routes })

export default router
