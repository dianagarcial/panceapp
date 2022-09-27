<template>
    <div id="contenido">
        <div id="home-row">
            <div id="text-home">
                <h1>Encuentra el plan perfecto, pasarla bien no te cuesta mas</h1>
                <h2>La comida ideal, una comodidad unica a los mejores precios.</h2>
            </div>
            <img src="https://i.ibb.co/C2RKDp8/undraw-destinations-re-80yc-1.png" alt="undraw-destinations-re-80yc-1"
                border="0">
        </div>
        <Botonprincipal nombre="Restaurante" link="restaurantes"></Botonprincipal>
        <Botonprincipal nombre="Hoteles" link="hoteles"></Botonprincipal>
        <Botonprincipal nombre="Planes" link="planes"></Botonprincipal>
    </div>
</template>

<script>
import Botonprincipal from "@/components/Boton-principal.vue";
export default {
    name: 'Home',
    components: {
        Botonprincipal
    }
}


</script>
<style>
div#home-row {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
}

div#text-home {
    display: flex;
    flex-direction: column;
}
</style>