<template>
    
    <div id="contenidoPlatoF" display="none">
    <h1>Platos fuertes</h1>
    <h2>Selecciona uno de los platos a continuacion</h2>
    <Pgeneral v-for="(producto, key) in productos" 
        :key="key"
        :titulo="producto.titulo"
        :subtitulo="producto.subtitulo"
        :imagen="producto.imagen"/>
</div>
  
</template>


<script>
    import Pgeneral from "@/components/platos-general.vue";
    
    export default {
        name:'Entradas',
        data() {
            return {
                productos: [
                    {
                        titulo: 'Platos Fuertes 1',
                        subtitulo: '60.000',
   
                        imagen: 'https://i.ibb.co/Q68FwnM/Frame-2-5.png'
                        
                    },
                    {
                        titulo: 'Platos Fuertes 2',
                        subtitulo: '70.000',
                        imagen: 'https://i.ibb.co/j8VMTgt/Frame-2-6.png'
                        
                    },
                    {
                        titulo: 'Platos Fuertes 3',
                        subtitulo: '80.000',
                        imagen: 'https://i.ibb.co/Jvf0nmr/Frame-2-7.png'
                        
                    }
                ]
            }
        },
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
