<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Mira los platos que ofrecemos</h1>
    <h2>Antojate con los platos disponibles en el menu</h2>
    <Plato/>
    <Plato/>
    <Plato/>
    <Plato/>
    <h1>Platos fuertes</h1>
    <TarjetaPlatos/>
    </div>
    <Footer></Footer>
    
    </template>
    <script>
    import NavBar from "@/components/NavBar.vue";
    import Plato from "@/components/plato.vue";
    import TarjetaPlatos from "@/components/TarjetaPlatos.vue"
    
    import Footer from "@/components/Footer.vue";
    
    
    export default {
            name:'PFuerte',
            components:{
        
        NavBar,
        Plato,
        TarjetaPlatos,
        Footer
    }
    }
    
    </script>
    <style>
        
    </style>