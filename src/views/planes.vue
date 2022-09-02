<template>
    <NavBar></NavBar>
    <h1>Explora los planes disponibles</h1>
    <h2>Selecciona uno de los planes disponibles</h2>
    <TarjetaPlan/>
    <TarjetaPlan/>
    <TarjetaPlan/>
    <TarjetaPlan/>
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