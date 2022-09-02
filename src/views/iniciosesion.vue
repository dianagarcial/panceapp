<template>
    <NavBar></NavBar>
    <h1>Ingreso</h1>
    <h2>Que bueno verte de nuevo</h2>
    <h3>Correo electronico</h3>
    <input/>
    <h3>Contraseña</h3>
    <input/>
    <Boton></Boton>
    <Boton></Boton>
    <Footer></Footer>


</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Boton from "@/components/Boton.vue";
import Footer from "@/components/footer.vue";

export default {
    name:'Iniciosesion',
    components:{
    NavBar,
    Boton,
    Footer
    
}
}
</script>
<style>
    
</style>