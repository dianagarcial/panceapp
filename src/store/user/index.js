
import state from "./state"
import * as actions from "./action"
import * as getters from "./getter"
import * as mutations from "./mutations"

const userStorage = {
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
    getters:getters
}

export default userStorage;