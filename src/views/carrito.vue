<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Carrito de compras</h1>
   
 
    <TarjetaCarrito v-for="(carrito, key) in carritos" 
        :key="key"
        :nombre="carrito.nombre"
        :numero="carrito.numero"
        :subtotal="carrito.subtotal"
        :total="carrito.total"
        :imagen="carrito.imagen"/>
    <TotalCarrito total="200.000"/>
    <div id="izq">
            <button id="retro">Cancelar</button>
            <button id="ir" >Pagar</button>
            
    </div>
    </div>
    <Footer/>
</template>
<script>
import TarjetaCarrito from "../components/tarjetaCarrito.vue";

import NavBar from "@/components/NavBar.vue";
import TotalCarrito from "@/components/totalcarrito.vue"
import Footer from "@/components/Footer.vue";

export default {
    name:'Carrito',
    data(){
            return{
                carritos:[
                    {
                        nombre:'Entrada1',
                        numero:'1',
                        subtotal:'60.000',
                        total:'60.000',
                        imagen:'https://i.ibb.co/NxmgbhK/Frame-2-3.png'
                    },
                    {
                        nombre:'Platos Fuertes 2',
                        numero:'2',
                        subtotal:'70.000',
                        total:'140.000',
                        imagen:'https://i.ibb.co/j8VMTgt/Frame-2-6.png'
                    }
                ]
            }
        },
    components:{
    TarjetaCarrito,
    NavBar,
    TotalCarrito,
    Footer
}

    }
</script>
<style>
    
</style>