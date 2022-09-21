<template>
    <NavBar></NavBar>
    <div id="contenido">
    <div>
        <h1>Encuentra el plan perfecto, pasarla bien no te cuesta mas</h1>
        <h2>La comida ideal, una comodidad unica a los mejores precios.</h2>

    </div>
     <Botonprincipal nombre="Restaurante" link="restaurantes"></Botonprincipal>
     <Botonprincipal nombre="Hoteles" link="hoteles"></Botonprincipal>
     <Botonprincipal nombre="Planes" link="planes"></Botonprincipal>
    </div>
    <Footer></Footer>

</template>
<script>
import NavBar from "@/components/NavBar.vue";

import Botonprincipal from "@/components/Boton-principal.vue";
import Footer from "@/components/footer.vue";
export default {
    name:'Home',
    components:{
    NavBar,
    Botonprincipal,
    Footer
}

    }


</script>
<style>
    
</style>