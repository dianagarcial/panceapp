<template>
    <div id="contenido">
        <h1>Carrito de compras</h1>
        <TarjetaCarrito v-for="(item, key) in cart" :key="key" :cartItem="item" />
        <div id="total">
            <h2>Total a pagar</h2>
            <h3>${{ totalPrice }}</h3>
        </div>
        <div id="izq">
            <button id="retro">Cancelar</button>
            <button id="ir">Pagar</button>
        </div>
    </div>
</template>

<script>
import TarjetaCarrito from "../components/tarjetaCarrito.vue";
//import TotalCarrito from "@/components/totalcarrito.vue"

export default {
    name: 'Carrito',
    components: {
        TarjetaCarrito,
        //TotalCarrito
    },
    data() {
        return {
            cart: []
        }
    },
    mounted() {

        this.cart = JSON.parse(localStorage.getItem('platos'));
        console.log(JSON.parse(localStorage.getItem('platos')))

    },
    computed: {
        totalPrice() {
            let total = 0;
            var storedplatos = JSON.parse(localStorage.platos);


            for (let item of storedplatos) {
                console.log(item.precio)
                total += item.precio;
            }

            return total;
        }
    }

}
</script>

<style>
div#total {
    background: #EEEEEE;
    box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 15px;
    width: 50%;
    display: flex;
    right: 0;
    flex-direction: row;
    margin-left: 50%;
    justify-content: space-around;
}

</style>