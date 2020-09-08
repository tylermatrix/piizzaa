import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import Admin from './components/Admin.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path:'/menu', component: Menu},
  { path: '/admin', component: Admin},
  { path: '/about', component: About, children: [
    { path: '/contact', component: Contact},
    { path: '/history', component: History},
    { path: '/delivery', component: Delivery},
    { path: '/ordering-guide', component: OrderingGuide}
  ]},
  { path: '*', redirect: '/'}
]
const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
