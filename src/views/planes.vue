<template>
    <NavBar></NavBar>
    <div id="contenido">
        <h1>Explora los planes disponibles</h1>
        <h2>Selecciona uno de los planes disponibles</h2>
        <TarjetaPlan v-for="(producto, key) in productos" :key="key" :titulo="producto.titulo"
            :subtitulo="producto.subtitulo" :imagen="producto.imagen" />

    </div>
    <Footer></Footer>

</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TarjetaPlan from "@/components/tarjetaPlan.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: 'Planes',
    data() {
        return {
            productos: [
                {
                    titulo: 'Plan 1',
                    subtitulo: '60.000',

                    imagen: 'https://i.ibb.co/VqZN88S/unsplash-j-Ut4-MJXTJn0-4.png'

                },
                {
                    titulo: 'Plan 2',
                    subtitulo: '70.000',
                    imagen: 'https://i.ibb.co/QCqWngB/Frame-2-18.png'





                },
                {
                    titulo: 'Plan 3',
                    subtitulo: '80.000',

                    imagen: 'https://i.ibb.co/ZGJKtws/Frame-2-19.png'


                }
            ]
        }
    },
    components: {

        NavBar,
        TarjetaPlan,
        Footer
    }
}

</script>