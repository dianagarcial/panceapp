<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Carrito de compras</h1>
    <h2>Este es el carrito</h2>
    <TarjetaHotel></TarjetaHotel>
    <TarjetaHotel></TarjetaHotel>
    <TarjetaHotel></TarjetaHotel>
    <TarjetaHotel></TarjetaHotel>   
    <Boton></Boton>
    </div>
</template>
<script>
import TarjetaHotel from "../components/tarjetaHotel.vue";
import Boton from "../components/Boton.vue";
import NavBar from "@/components/NavBar.vue";
export default {
    name:'Carrito',
    components:{
    TarjetaHotel,
    NavBar,
    Boton
}

    }
</script>
<style>
    
</style>