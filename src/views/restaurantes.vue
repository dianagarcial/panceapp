<template>
    <NavBar></NavBar>
    <h1>Explora los restaurantes disponibles</h1>
    <h2>Selecciona uno de los restaurantes</h2>
    <TarjetaRestaurante/>
    <TarjetaRestaurante/>
    <TarjetaRestaurante/>
    <TarjetaRestaurante/>
    <Footer></Footer>

</template>
<script>
    import NavBar from "@/components/NavBar.vue";
    import TarjetaRestaurante from "@/components/tarjetaRestaurante.vue";
    import Footer from "@/components/footer.vue";
    export default {
        name:'Restaurantes',
        components:{
    
    NavBar,
    TarjetaRestaurante,
    Footer
}
    }

    </script>