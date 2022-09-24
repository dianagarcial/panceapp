<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Registrate</h1>
    <h2>Registrate para obtener beneficios</h2>
    <div id="row-form">
        <div id="colum-form">
            <h3>Nombre Completo</h3>
            <input/>
        </div>
        <div id="colum-form">
            <h3>Direccion</h3>
            <input/>
        </div>
    </div>
        <div id="row-form">
            <div id="colum-form">
                <h3>Correo electronico</h3>
                <input/>
            </div>
        <div id="colum-form">
            <h3>Numero de contacto</h3>
            <input/>
        </div>
        </div>
        <div id="row-form">
            <div id="colum-form">
                <h3>Contraseña</h3>
                <input/>
            </div>
            <div id="colum-form">
                <h3>Confirma tu contraseña</h3>
                <input/>
            </div>
    </div>
    <div id="izq">
            <button id="ir" @click="ingreso">Registrarse</button>
            <button id="retro" @click="ingreso">Ingresar</button>
    </div>
    </div>
    <Footer></Footer>


</template>
<script>
import NavBar from "@/components/NavBar.vue";

import Footer from "@/components/footer.vue";
export default {
    name:'Registro',
    components:{
    
    NavBar,
   
    Footer
},methods:{
            ingreso(){
                this.$router.push('/') 
            }
            

        }
}
</script>
<style>
    div#row-form{
        
        display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    }

    div#colum-form{
        display: flex;
        flex-direction: column;
        width: 45%;
    }
</style>