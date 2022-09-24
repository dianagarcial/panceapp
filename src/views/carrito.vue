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
    <Boton></Boton>
    </div>
</template>
<script>
import TarjetaCarrito from "../components/tarjetaCarrito.vue";
import Boton from "../components/Boton.vue";
import NavBar from "@/components/NavBar.vue";

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
    Boton
    
}

    }
</script>
<style>
    
</style>