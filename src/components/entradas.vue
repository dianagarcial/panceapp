<template>
    
    <div id="contenidoEntrada" display="none">
    <h1>Entradas</h1>
    <h2>Selecciona uno de los platos a continuacion</h2>
    <Pgeneral titulo="Entrada1" subtitulo="60.000" />
    <Pgeneral titulo="Entrada2" subtitulo="70.000"/>
    <Pgeneral titulo="Entrada3" subtitulo="80.000"/>
    <Pgeneral titulo="Entrada4" subtitulo="90.000"/>
</div>
  
</template>


<script>
    import Pgeneral from "@/components/platos-general.vue";
    
    export default {
        name:'Entradas',
        components:{
    
            Pgeneral
}
    
        }
    
    
    </script>

    <style>

        div#contenidoEntradas{
            display: none;
        }
        
    </style>
