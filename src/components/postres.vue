<template>

    <div id="contenidoPostre" display="none">
        <h1>Postres</h1>
        <h2>Selecciona uno de los platos a continuacion</h2>
        <Pgeneral v-for="(producto, key) in productos" :key="key" :titulo="producto.titulo"
            :subtitulo="producto.subtitulo" :imagen="producto.imagen" />
    </div>

</template>


<script>
import Pgeneral from "@/components/platos-general.vue";

export default {
    name: 'Postres',
    data() {
        return {
            productos: [
                {
                    titulo: 'Postre1',
                    subtitulo: '60.000',

                    imagen: 'https://i.ibb.co/9tZ6QKC/Frame-2-8.png'

                },
                {
                    titulo: 'Postre2',
                    subtitulo: '70.000',
                    imagen: 'https://i.ibb.co/sjgT0PS/Frame-2-9.png'

                },
                {
                    titulo: 'Postre3',
                    subtitulo: '80.000',

                    imagen: 'https://i.ibb.co/vdkygNL/Frame-2-10.png'

                }
            ]
        }
    },

    components: {

        Pgeneral
    }

}


</script>

<style>
div#PlatoF {
    display: none;
}
</style>
