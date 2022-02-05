import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ads from "../views/Ads";
import About from "../views/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Главная'}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {title: 'О нас'}
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Ads,
    meta: {title: 'Объявления'}
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});

export default router
