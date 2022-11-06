
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
//import firebase from '../Firebase/config'

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
    path: '/restaurante/:idrestaurante',
    name: 'Restaurante',
    props: true,
    component: () => import('../views/restaurantes.vue')

    
  },
  {
    path: '/restaurantes',
    name: 'Restaurantes',
    component: () => import('../views/TRestaurantes.vue')
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
    path: '/verHotel/:idhotel',
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
    meta: {
      autenticado: true
    },
    children: [
      {
        path: '',
        component: () => import('../views/admin/principal.vue'),
      },
      {
        path: 'hotel',
        name: 'admin/hotel',
        children: [
          {
            path: '',
            component: () => import('../views/admin/hotel.vue'),
          },
          {
            path: 'add',
            name: 'admin/hotel/add',
            component: () => import('../views/admin/addhotel.vue'),
          }
        ]  
      
      },

      {
        path: 'restaurante',
        name: 'admin/restaurante',
        children: [
          {
            path: '',
            component: () => import('../views/admin/restaurante.vue')
          },
          {
            path: 'edit/:idRestaurante',
            name: 'admin/restaurante/edit',
            component: () => import('../views/admin/editRestaurante.vue'),
          },
          {
            path: 'add',
            name: 'admin/restaurante/add',
            component: () => import('../views/admin/addRestaurante.vue'),
          },
          {
            path: 'addPlato/:idRestaurante',
            name: 'admin/restaurante/addPlato',
            component: () => import('../views/admin/addPlato.vue'),
          }


        ]
      },
      {
        path: 'ordenes',
        name: 'admin/ordenes',
        children: [
          {
            path: '',
            component: () => import('../views/admin/Ordenesgenerales.vue')
          },
          {
            path: 'view/:id',
            name: 'admin/ordenes/especifica',
            component: () => import('../views/admin/OrdenEspecifica.vue')
          }
        ]
      },
      {
        path: 'reservas',
        name: 'admin/reservas',
        children: [
          {
            path: '',
            component: () => import('../views/admin/Reservasgeneral.vue')
          },
          {
            path: 'view/:id',
            name: 'admin/reservas/especifica',
            component: () => import('../views/admin/ReservaEspecifica.vue')
          }
        ]
      },


    ]
  }
  ,




]

// router.beforeEach((to, from, next) => {
//   let usuario= firebase.auth().currentUser;
//   let autorizacion = to.matched.some(record => record.meta.autenticado)
//   if (autorizacion && !usuario) {
//     next('Iniciosesion')
//   } else if (!autorizacion && usuario){
//     next('Home');
//   }else{
//     next()
//   }
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router