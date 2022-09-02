<template>
    <NavBar></NavBar>
    <div>
        <h1>Home</h1>
        <h2></h2>

    </div>
    <Mapa></Mapa>
    <Botonprincipal></Botonprincipal>


</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/mapa.vue";
import Botonprincipal from "@/components/Boton-principal.vue";
export default {
    name:'Home',
    components:{
        Mapa,
        NavBar,
        Botonprincipal

    }

    }


</script>
<style>
    
</style>