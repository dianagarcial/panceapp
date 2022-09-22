<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Explora los restaurantes disponibles</h1>
    <h2>Selecciona uno de los restaurantes</h2>
    <div  id="btn-restaurante">
    <button id="imgrestau" v-on:click="entrada()"><img id="imgrestau" src="https://i.ibb.co/BVwNFBJ/Entrada.png" alt="Entrada"/></button>
    <button  id="imgrestau" v-on:click="platoF()"><img id="imgrestau" src="https://i.ibb.co/StvBhSH/Entrada-1.png" alt="Entrada-1"/></button>
    <button id="imgrestau" v-on:click="postre()"><img id="imgrestau" src="https://i.ibb.co/fN7R33C/Entrada-2.png" alt="Entrada-2"/></button>
    <button id="imgrestau" v-on:click="bebida()"><img id="imgrestau" src="https://i.ibb.co/8MgfSTn/Entrada-3.png" alt="Entrada-3"/></button>
    </div>
        <Entradas/>
        <PlatoF/>
        <Postres/>
        <Bebidas/>

    
    
    </div>
    <Footer></Footer>

</template>
<script>
    import NavBar from "@/components/NavBar.vue";
    
    import Entradas from "@/components/entradas.vue";
    import Footer from "@/components/footer.vue";
    import PlatoF from "@/components/platoFuerte.vue";
    import Postres from "../components/postres.vue";
import Bebidas from "../components/bebidas.vue";
    export default {
        name:'Restaurantes',
        components:{
    NavBar,

    Footer,
    Entradas,
    PlatoF,
    Postres,
    Bebidas
},
   
methods:{
           entrada(){
            
               document.getElementById("contenidoEntrada").style.display="block"
               document.getElementById("contenidoPlatoF").style.display="none"
               document.getElementById("contenidoPostre").style.display="none"
               document.getElementById("contenidoBebidas").style.display="none"
            },
           platoF(){
            document.getElementById("contenidoPlatoF").style.display="block"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="none"
            document.getElementById("contenidoBebidas").style.display="none"
           },
           postre(){
            document.getElementById("contenidoPlatoF").style.display="none"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="block"
            document.getElementById("contenidoBebidas").style.display="none"

           },
           bebida(){
            document.getElementById("contenidoPlatoF").style.display="none"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="none"
            document.getElementById("contenidoBebidas").style.display="block"

           }
      
        }
    }
    </script>
    <style>
         div#contenidoEntrada {
            display: none;
        }
        div#contenidoPlatoF {
            display: none;
        }
        div#contenidoPostre {
            display: none;
        }
        div#btn-restaurante{
            display: flex;
            flex-direction: row;
            width: 90%;
            margin: auto;
        }
        img#imgrestau{
            width: 90%;
        }
        button#imgrestau{
            border: 0;
            background-color: transparent;
            width: max-content;
        }
    </style>