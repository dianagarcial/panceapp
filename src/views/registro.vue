<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Registrate</h1>
    <h2>Registrate para obtener beneficios</h2>
    <h3>Nombre Completo</h3>
    <input/>
    <h3>Direccion</h3>
    <input/>
    <h3>Correo electronico</h3>
    <input/>
    <h3>Numero de contacto</h3>
    <input/>
    <h3>Contraseña</h3>
    <input/>
    <h3>Confirma tu contraseña</h3>
    <input/>
    <Boton></Boton>
    <Boton></Boton>
    </div>
    <Footer></Footer>


</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Boton from "@/components/Boton.vue";
import Footer from "@/components/footer.vue";
export default {
    name:'Registro',
    components:{
    
    NavBar,
    Boton,
    Footer
}
}
</script>
<style>
    
</style>