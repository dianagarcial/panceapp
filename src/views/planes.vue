<template>
    <NavBar></NavBar>
    <div id="contenido">
    <h1>Explora los planes disponibles</h1>
    <h2>Selecciona uno de los planes disponibles</h2>
    <TarjetaPlan titulo="Plan 1" subtitulo="$ 150.000"/>
    <TarjetaPlan titulo="Plan 2" subtitulo="$ 250.000"/>
    <TarjetaPlan titulo="Plan 3" subtitulo="$ 350.000"/>
    <TarjetaPlan titulo="Plan 4" subtitulo="$ 100.000"/>
</div>
    <Footer></Footer>
        
</template>
<script>
    import NavBar from "@/components/NavBar.vue";
    import TarjetaPlan from "@/components/tarjetaPlan.vue";
    import Footer from "@/components/footer.vue";
    export default {
        name:'Planes',
        components:{
    
    NavBar,
    TarjetaPlan,
    Footer
}
    }

    </script>