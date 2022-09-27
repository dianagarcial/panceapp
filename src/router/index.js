import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/carrito.vue')
  },
  {
    path: '/hoteles',
    name: 'Hoteles',
    component: () => import('../views/hoteles.vue')
  },
  {
    path: '/restaurantes',
    name: 'Restaurantes',
    component: () => import('../views/restaurantes.vue')
  },
  {
    path: '/planes',
    name: 'Planes',
    component: () => import('../views/planes.vue')
  },
  {
    path: '/platos',
    name: 'Platos',
    component: () => import('../views/platos.vue')
  },
  {
    path: '/platos-entradas',
    name: 'Entradas',
    component: () => import('../views/Entradas.vue')
  },
  {
    path: '/platos-bebidas',
    name: 'Bebidas',
    component: () => import('../views/Bebidas.vue')
  },
  {
    path: '/platos-postres',
    name: 'Postres',
    component: () => import('../views/Postres.vue')
  },
  {
    path: '/platos-fuerte',
    name: 'PFuerte',
    component: () => import('../views/PlatoFuerte.vue')
  },
  {
    path: '/verHotel',
    name: 'VerHoteles',
    component: () => import('../views/verHotel.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/registro.vue')
  },
  {
    path: '/ingreso',
    name: 'Iniciosesion',
    component: () => import('../views/iniciosesion.vue')
  },
  {
    path: '/admin',
    name: 'adminprincipal',
    component: () => import('../views/admin/principal.vue')
  }
  ,
  {
    path: '/admin/hotel',
    name: 'admin/hotel',
    component: () => import('../views/admin/hotel.vue')
  },
  {
    path: '/admin/restaurante',
    name: 'admin/restaurante',
    component: () => import('../views/admin/restaurante.vue')
  },
  {
    path: '/admin/planes',
    name: 'admin/planes',
    component: () => import('../views/admin/planes.vue')
  }



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router