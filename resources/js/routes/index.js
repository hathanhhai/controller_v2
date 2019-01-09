import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Pages/Dashboard';
import Login from '../components/Authencations/Login'
import Controller from '../components/Pages/Controller';
import Camera from '../components/Pages/Camera';
import Setting from '../components/Pages/Setting';

Vue.use(Router);
const router = new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:Dashboard,
            mode: 'history'
            // meta: { requiresAuth: true}
        },
        {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard,
            mode: 'history'
            // meta: { requiresAuth: true}
        },
        {
            path:'/controller',
            name:'controller',
            component:Controller,
            mode: 'history'
            // meta: { requiresAuth: true}
        },
        {
            path:'/camera',
            name:'camera',
            component:Camera,
            mode: 'history'
            // meta: { requiresAuth: true}
        },
        {
            path:'/setting',
            name:'setting',
            component:Setting,
            mode: 'history'
            // meta: { requiresAuth: true}
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("login") == 'false') {

            next({
                path: '/login',
                query: {
                    redirect: to.fullPath,
                },
            });
        } else {

            next();
        }
    } else {

        next();
    }
})



export default router;