<template>

    <div id="contenidoEntrada" display="none">
        <h1>Entradas</h1>
        <h2>Selecciona uno de los platos a continuacion</h2>
        <Pgeneral v-for="(producto, key) in productos" :key="key" :titulo="producto.titulo"
            :subtitulo="producto.subtitulo" :imagen="producto.imagen" />
    </div>

</template>


<script>
import Pgeneral from "@/components/platos-general.vue";

export default {
    name: 'Entradas',
    data() {
        return {
            productos: [
                {
                    titulo: 'Entrada1',
                    subtitulo: '60.000',

                    imagen: 'https://i.ibb.co/NxmgbhK/Frame-2-3.png'
                },
                {
                    titulo: 'Entrada2',
                    subtitulo: '70.000',
                    imagen: 'https://i.ibb.co/qBYyw37/Frame-2-2.png'
                },
                {
                    titulo: 'Entrada3',
                    subtitulo: '80.000',

                    imagen: 'https://i.ibb.co/0t1bQdT/Frame-2-4.png'
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
div#contenidoEntradas {
    display: none;
}
</style>
