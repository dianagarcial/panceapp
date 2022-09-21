<template>
   
    <div id="tarjeta-plan">
       <img id="foto-plan" src="https://i.ibb.co/jRc4y8v/Frame-2.png" alt="Frame-2"/>
       <div id="conte-tarjeta-plan">
            <h3 id="tarj3">{{titulo}}</h3>
            <h4 id="tarj4">{{subtitulo}}</h4>
            <Estrellas></Estrellas>
        </div> 

       
        <button id="btn-ent">Reservar</button>
        

    </div>
   
 
 </template>
 
 <script>
    import Estrellas from "@/components/estrellas.vue";
    export default {
    name:'tarjetaPlan',
    props:{
        titulo: String,
        subtitulo: String,
        imagen: String

    },
    components:{
        Estrellas
    }
    
    }
 </script>
 <style>
    
    div#tarjeta-plan{
        /* Blanco/Blanco2 */

        background: #EEEEEE;
        /* Sombra1 */

        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        margin-bottom: 2%;
        margin-top: 2%;
        display: flex;
        flex-direction: row;
    }
    div#conte-tarjeta-plan{
        display: flex;
        flex-direction: column;
        margin: 2%;
        width: 50%;
    }

    img#foto-plan{
        margin: 3%;
        height: 10%;
    }
    h3#tarj3{
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        
        display: flex;
        align-items: center;
        margin-bottom: 0;

        /* Negro/Negro1 */

        color: #292929;
    }
    h4#tarj4{
        font-family: 'Varela';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
     
        display: flex;
        align-items: center;
        margin-top: 1%;

        /* Negro/Negro1 */

        color: #292929;

    }
    button#btn-ent{
        background: #78E3FD;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        border:0;
        height:max-content;
        margin: 2%;
        padding: 1%;
    }
    

 </style>