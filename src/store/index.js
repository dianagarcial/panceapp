import { createStore } from 'vuex'
import userStorage from './user'

export default createStore({
    modules: {
        user: userStorage
    }
})