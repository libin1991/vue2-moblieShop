import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Classify from '@/components/pages/Classify'
import Cart from '@/components/pages/Cart'
import Me from '@/components/pages/Me'

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/',name:'ShoppingMall',component:ShoppingMall},
   {path:'/register',name:'Register',component:Register},
   { path: '/classify',name: 'Classify',component: Classify},
  {path: '/cart',name: 'Cart',component: Cart},
  {path: '/me',name: 'Me',component: Me},
  ]
})
