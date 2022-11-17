import { createStore } from 'vuex'
import userStorage from './user'
import cartModule from './carrito'

export default createStore({
    modules: {
        user: userStorage,
        cart: cartModule
    }
})