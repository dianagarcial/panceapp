<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Ingreso</h1>
    <h2>Que bueno verte de nuevo</h2>
    <h3>Correo electronico</h3>
    <input type="email"/>
    <h3>Contraseña</h3>
    <input type="password"/>
    <div id="izq">
            <button id="ir" @click="registro">Registrarse</button>
            <button id="retro" @click="ingreso">Ingresar</button>
    </div>
    </div>
    <Footer></Footer>


</template>
<script>
import NavBar from "@/components/NavBar.vue";

import Footer from "@/components/footer.vue";

export default {
    name:'Iniciosesion',
    components:{
    NavBar,

    Footer
    
},methods:{
            ingreso(){
                this.$router.push('/') 
            },
            registro(){
                this.$router.push('/registro') 
            }

        }
}
</script>
<style>
    
</style>