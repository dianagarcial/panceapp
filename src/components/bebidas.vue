<template>
    
    <div id="contenidoBebidas" display="none">
    <h1>Bebidas</h1>
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
        name:'Bebidas',
        data() {
            return {
                productos: [
                    {
                        titulo: 'Bebida1',
                        subtitulo: '60.000',
   
                        imagen: 'https://i.ibb.co/hmMkwN9/Frame-2-11.png'

                    },
                    {
                        titulo: 'Bebida2',
                        subtitulo: '70.000',
                        imagen: 'https://i.ibb.co/MCWSKhv/Frame-2-12.png'
                       

                    },
                    {
                        titulo: 'Bebida3',
                        subtitulo: '80.000',
           
                        imagen: 'https://i.ibb.co/RBPQ0Xt/Frame-2-13.png'
                        
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

        div#contenidoBebidas{
            display: none;
        }
        
    </style>
