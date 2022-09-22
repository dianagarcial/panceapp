<template>
    
    <div id="contenidoPostre" display="none">
    <h1>Postres</h1>
    <h2>Selecciona uno de los platos a continuacion</h2>
        <Pgeneral titulo="Postre1" subtitulo="60.000" />
    <Pgeneral titulo="Postre2" subtitulo="70.000"/>
    <Pgeneral titulo="Postre3" subtitulo="80.000"/>
    <Pgeneral titulo="Postre4" subtitulo="90.000"/>
</div>
  
</template>


<script>
    import Pgeneral from "@/components/platos-general.vue";
    
    export default {
        name:'Postres',
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
