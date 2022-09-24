<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Explora los restaurantes disponibles</h1>
    <h2>Selecciona uno de los restaurantes</h2>
    <div  id="btn-restaurante">
    <button id="imgrestau" v-on:click="entrada()"><img id="imgrestauE" src="https://i.ibb.co/r2sPSL5/Entrada-5.png" alt="Entrada"/></button>
    <button  id="imgrestau" v-on:click="platoF()"><img id="imgrestauP" src="https://i.ibb.co/StvBhSH/Entrada-1.png" alt="Entrada-1"/></button>
    <button id="imgrestau" v-on:click="postre()"><img id="imgrestauO" src="https://i.ibb.co/fN7R33C/Entrada-2.png" alt="Entrada-2"/></button>
    <button id="imgrestau" v-on:click="bebida()"><img id="imgrestauB" src="https://i.ibb.co/8MgfSTn/Entrada-3.png" alt="Entrada-3"/></button>
   
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
    import Footer from "@/components/Footer.vue";
    import PlatoF from "@/components/platoFuerte.vue";
    import Postres from "../components/postres.vue";
import Bebidas from "../components/bebidas.vue";
    export default {
        name:'Restaurantes',
        props:{
        
        imagenu: String

    },data() {
        return {
            imgSrc: this.imagenu
        }
    },
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
               
               document.getElementById("imgrestauE").src = "https://i.ibb.co/BVwNFBJ/Entrada.png";
               document.getElementById("imgrestauP").src = "https://i.ibb.co/StvBhSH/Entrada-1.png";
               document.getElementById("imgrestauO").src = "https://i.ibb.co/fN7R33C/Entrada-2.png";
               document.getElementById("imgrestauB").src = "https://i.ibb.co/8MgfSTn/Entrada-3.png";
            },
           platoF(){
            document.getElementById("contenidoPlatoF").style.display="block"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="none"
            document.getElementById("contenidoBebidas").style.display="none"
            
            document.getElementById("imgrestauE").src = "https://i.ibb.co/r2sPSL5/Entrada-5.png";
            document.getElementById("imgrestauP").src = "https://i.ibb.co/nnjn0Mh/Entrada-4.png";
            document.getElementById("imgrestauO").src = "https://i.ibb.co/fN7R33C/Entrada-2.png";
            document.getElementById("imgrestauB").src = "https://i.ibb.co/8MgfSTn/Entrada-3.png";
           },
           postre(){
            document.getElementById("contenidoPlatoF").style.display="none"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="block"
            document.getElementById("contenidoBebidas").style.display="none"

            document.getElementById("imgrestauE").src = "https://i.ibb.co/r2sPSL5/Entrada-5.png";
            document.getElementById("imgrestauP").src = "https://i.ibb.co/StvBhSH/Entrada-1.png";
            document.getElementById("imgrestauO").src = "https://i.ibb.co/G9m8VtJ/Entrada-7.png";
            document.getElementById("imgrestauB").src = "https://i.ibb.co/8MgfSTn/Entrada-3.png";

           },
           bebida(){
            document.getElementById("contenidoPlatoF").style.display="none"
            document.getElementById("contenidoEntrada").style.display="none"
            document.getElementById("contenidoPostre").style.display="none"
            document.getElementById("contenidoBebidas").style.display="block"
            
            document.getElementById("imgrestauE").src = "https://i.ibb.co/r2sPSL5/Entrada-5.png";
            document.getElementById("imgrestauP").src = "https://i.ibb.co/StvBhSH/Entrada-1.png";
            document.getElementById("imgrestauO").src = "https://i.ibb.co/fN7R33C/Entrada-2.png";
            document.getElementById("imgrestauB").src = "https://i.ibb.co/4pLsjvr/Entrada-8.png";
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
        img#imgrestauE{
            width: 90%;
        }
        img#imgrestauP{
            width: 90%;
        }
        img#imgrestauO{
            width: 90%;
        }
        img#imgrestauB{
            width: 90%;
        }
        button#imgrestau{
            border: 0;
            background-color: transparent;
            width: max-content;
        }
    </style>