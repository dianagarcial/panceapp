<template>

    <div id="tarjeta-carrito">

        <img id="foto-carrito" :src="cartItem.imagen" alt="Frame-2" />
        <h3 id="nombre">{{ cartItem.nombre }}</h3>
        <h4 id="total">${{ cartItem.precio }}</h4>
        <button @click="removeFromCart(this.$.vnode.key)" id="acciones">
            <img src="https://i.ibb.co/0FRPzMQ/ant-design-delete-outlined.png" alt="Eliminar" height="30" width="30">
        </button>



    </div>


</template>
 
<script>


export default {

    name: 'tarjetaPlan',
    props: ['cartItem'],
    methods: {
        entrar() {
            this.$router.push('/verHotel')

        },

        removeFromCart(key) {
            this.$store.commit('removeFromCart', key);
            console.log("borrado")
        }
    }

}
</script>
<style>
div#tarjeta-carrito {
    background: #EEEEEE;
    box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 15px;
    margin-bottom: 2%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

img#delete {
    width: 3%;
    height: 3%;
    margin-top: auto;
    margin-bottom: auto
}

h4 {
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Negro/Negro1 */

    color: #292929;


}

img#foto-carrito {
    margin-top: 2%;
    margin-bottom: 2%;
}

h3#nombre {
    width: 20%;
}

h3#numero {
    width: 5%;
}

h3#subtotal {
    width: 10%;
}

h3#total {
    width: 10%;
}
</style>