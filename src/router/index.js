import Vue from 'vue'
import Router from 'vue-router'
import Loader from '@/page/loader'
import Home from '@/page/home'
import Case from '@/page/case'
import DesignDetail from '@/page/detail/design'
import NumberDetail from '@/page/detail/number'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Loader',
            component: Loader
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/case',
            name: 'Case',
            component: Case
        },
        {
            path: '/case/:type',
            name: 'Case',
            component: Case
        },
        {
            path: '/case/design/detail/:id',
            name: 'DesignDetail',
            component: DesignDetail,
        },
        {
            path: '/case/number/detail/:id',
            name: 'NumberDetail',
            component: NumberDetail,
        },
    ]
})
