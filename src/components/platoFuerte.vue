<template>
    
    <div id="contenidoPlatoF" display="none">
    <h1>Platos fuertes</h1>
    <h2>Selecciona uno de los platos a continuacion</h2>
    <Pgeneral titulo="Plato Fuerte 1" subtitulo="60.000" />
    <Pgeneral titulo="Plato Fuerte 2" subtitulo="70.000"/>
    <Pgeneral titulo="Plato Fuerte 3" subtitulo="80.000"/>
    <Pgeneral titulo="Plato Fuerte 4" subtitulo="90.000"/>
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

        div#PlatoF{
            display: none;
        }
        
    </style>
