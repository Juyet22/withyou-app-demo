
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Home = () => import('components/Home/Home');
const Shop = () => import('components/Shop/Shop.vue');
const Login = () => import('components/Page/Login');

const routes = [
    {
        path: '',
        // redirect: '/home'
        // component: Home
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path:'/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path:'/shop',
        component: Shop,
        meta: {
            title: '商城'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 前置钩子
router.beforeEach((to,from,next) => {
    // console.log(from);
    let reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    if (to.path.match(reg)) {
        window.location.href = to.path.slice(1)
    } else {
        document.title = to.matched[0].meta.title;
        next();
    }
    
})

export default router;