<template>

    <div id="contenidoEntrada" display="none">
        <h1>Entradas</h1>
        <h2>Selecciona uno de los platos a continuacion</h2>
        <Pgeneral v-for="(producto, key) in productos" :key="key" :productoA="producto" />
    </div>

</template>


<script>
import Pgeneral from "@/components/platos-general.vue";

export default {
    name: 'Entradas',
    data() {
        return {
            productos: []
            
        }
    },
    components: {

        Pgeneral
    },
    created() {
        this.listarEntrada();
    },
    methods: {
        listarEntrada() {
            this.resta = this.$route.params.idrestaurante;
            this.axios.get(`/restaurante/${this.resta}/1`)
                .then((response) => {
                    console.log(response.data.platoTipo)
                    this.productos = response.data.platoTipo;
                    console.log("holi2")
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }

    }

}


</script>

<style>
div#contenidoEntradas {
    display: none;
}
</style>
