<template>
    <NavBar></NavBar>
    <div id="contenido">
    <div id="conte-vhotel">
        <img id="foto-plan" src="https://i.ibb.co/vj3ntfd/Frame-2-1.png" alt="Frame-2"/>
        
        <div id="conte-vhotel-text">
        <h1>Hotel Pance 1</h1>
        <h2>Un lujoso hotel en un hermoso pueblo</h2>
        </div>
    </div>
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
    </div>
    
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
    <style>
        div#conte-vhotel{
            display: flex;
            flex-direction: row;
        }
        div#conte-vhotel-text{
            display: flex;
            flex-direction: column;
        }
        h1{
            margin-bottom: 0;
        }
    </style>
