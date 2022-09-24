<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Reserva en uno de nuestros hoteles</h1>
    <h2>Alojate en uno de nuestros hoteles</h2>
    <TarjetaHotel v-for="(producto, key) in productos" 
        :key="key"
        :titulo="producto.titulo"
        :subtitulo="producto.subtitulo"
        :imagen="producto.imagen"/>
</div>
    <Footer></Footer>

</template>


<script>
    import NavBar from "@/components/NavBar.vue";
    import TarjetaHotel from "@/components/tarjetaHotel.vue";
    import Footer from "@/components/footer.vue";
    export default {
        name:'Hoteles',
        data() {
            return {
                productos: [
                    {
                        titulo: 'Hotel1',
                        subtitulo: '60.000',                    
   
                        imagen: 'https://i.ibb.co/RN6GjDD/Frame-2-14.png'

                    },
                    {
                        titulo: 'Hotel2',
                        subtitulo: '70.000',
                        imagen: 'https://i.ibb.co/zrjhKrg/Frame-2-15.png'
                       
                     
                       

                    },
                    {
                        titulo: 'Hotel 3',
                        subtitulo: '80.000',
           
                        imagen: 'https://i.ibb.co/zFkKCTK/Frame-2-17.png'
                       
                        
                    }
                ]
            }
        },
        components:{
    
    NavBar,
    TarjetaHotel,
    Footer
}
    
        }
    
    
    </script>

    <style>
        
    </style>
