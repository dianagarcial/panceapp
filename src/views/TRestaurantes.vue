<template>
    <div id="contenido">
        <h1>Explora los restaurantes disponibles</h1>
        <h2>Selecciona uno de los restaurantes disponibles, para iniciar tu orden</h2>
        <TarjetaPlan v-for="(producto, key) in productos" 
            :key="key" 
            :titulo="producto.titulo"
            :imagen="producto.imagen" />
    </div>

</template>
<script>
import TarjetaPlan from "@/components/tarjetaPlan.vue";
export default {
    name: 'TRestaurantes',
    data() {
        return {
            productos: [
                {
                    titulo: 'Restaurante 1',
                    imagen: 'https://i.ibb.co/VqZN88S/unsplash-j-Ut4-MJXTJn0-4.png'

                },
                {
                    titulo: 'Restaurante 2',
                    imagen: 'https://i.ibb.co/QCqWngB/Frame-2-18.png'





                },
                {
                    titulo: 'Restaurante 3',
                    imagen: 'https://i.ibb.co/ZGJKtws/Frame-2-19.png'


                }
            ]
        }
    },
    components: {
        TarjetaPlan
    }
}

</script>