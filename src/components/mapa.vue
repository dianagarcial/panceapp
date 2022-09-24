<template>
    <div classname="mapa">
        <img id="imgc" scr="https://i.ibb.co/xMQ8dpV/Frame-5.png" alt="mapa" />
        <div classname="mapa-conte">
            <h1>Llegar es muy facil</h1>
            <h2>{{indicacion}}</h2>
            <h2>{{direccion}}</h2>
        </div>
    </div>
</template>

<script>
    
    export default {
    name:'Mapa',
    props:{
        imagen: String,
        indicacion: String,
        direccion: String

    },
    data() {
        return {
            imgSrc: this.imagen
        }
    }
    
    }
 </script>
 <style>
    div#mapa{
        /* Blanco/Blanco2 */

        background: #EEEEEE;
        border-radius: 15px;
    }
    img#mapa-imagen{
        width: 100%;
    }

 </style>