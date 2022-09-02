<template>
    <NavBar></NavBar>
    <img/>
    
    <h1>Hotel Pance 1</h1>
    <h2>Un lujoso hotel en un hermoso pueblo</h2>
    <Servicios></Servicios>
    <h1>Imagenes</h1>
    <img/>
    <img/>
    <img/>
    <h1>Reseñas</h1>
    <h2>Opiniones de otros clientes</h2>
    <Comentarios/>
    <Comentarios/>
    <Comentarios/>
    <Mapa/>
    <Reserva/>
    
    <Footer></Footer>

</template>


<script>
    import NavBar from "@/components/NavBar.vue";
    
    import Footer from "@/components/footer.vue";
import Servicios from "@/components/Servicios.vue";
import Comentarios from "../components/Comentarios.vue";
import Mapa from "@/components/mapa.vue";
import Reserva from "../components/Reserva.vue";
    export default {
        name:'VerHoteles',
        components:{
    NavBar,
    
    Footer,
    Servicios,
    Comentarios,
    Mapa,
    Reserva
}
    
        }
    
    
    </script>
