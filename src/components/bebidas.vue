<template>
    
    <div id="contenidoBebidas" display="none">
    <h1>Bebidas</h1>
    <h2>Selecciona uno de los platos a continuacion</h2>
    <Pgeneral titulo="Bebida1" subtitulo="60.000" />
    <Pgeneral titulo="Bebida2" subtitulo="70.000"/>
    <Pgeneral titulo="Bebida3" subtitulo="80.000"/>
    <Pgeneral titulo="Bebida4" subtitulo="90.000"/>
</div>
  
</template>


<script>
    import Pgeneral from "@/components/platos-general.vue";
    
    export default {
        name:'Bebidas',
        components:{
    
            Pgeneral
}
    
        }
    
    
    </script>

    <style>

        div#contenidoBebidas{
            display: none;
        }
        
    </style>
