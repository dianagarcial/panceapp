<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Reserva en uno de nuestros hoteles</h1>
    <h2>Alojate en uno de nuestros hoteles</h2>
    <TarjetaHotel titulo="Hotel1" subtitulo="60.000" />
    <TarjetaHotel titulo="Hotel2" subtitulo="70.000"/>
    <TarjetaHotel titulo="Hotel3" subtitulo="80.000"/>
    <TarjetaHotel titulo="Hotel4" subtitulo="90.000"/>
</div>
    <Footer></Footer>

</template>


<script>
    import NavBar from "@/components/NavBar.vue";
    import TarjetaHotel from "@/components/tarjetaHotel.vue";
    import Footer from "@/components/footer.vue";
    export default {
        name:'Hoteles',
        components:{
    
    NavBar,
    TarjetaHotel,
    Footer
}
    
        }
    
    
    </script>

    <style>
        
    </style>
