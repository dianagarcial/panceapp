

let carrito = localStorage.getItem('platos');

const state = {
    cart: carrito ? JSON.parse(carrito) : [],
}

const mutations = {
    saveCart(state) {
        localStorage.setItem('platos', JSON.stringify(state.cart));
    },
    addToCart(state, item) {

        state.cart.push(item);


        this.commit('saveCart');
    },
    removeFromCart(state, key) {
        //let index = state.cart.indexOf(item);



        console.log(key)
        state.cart.splice(key, 1);


        this.commit('saveCart');
    }
}




const cartModule = {
    state,
    mutations
}
export default cartModule;