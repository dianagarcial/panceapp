<template>

    <div id="contenidoBebidas" display="none">
        <h1>Bebidas</h1>
        <h2>Selecciona uno de los platos a continuacion</h2>
        <Pgeneral v-for="(producto, key) in productos" :key="key" :productoA="producto" />
    </div>

</template>


<script>
import Pgeneral from "@/components/platos-general.vue";

export default {
    name: 'Bebidas',
    data() {
        return {
            productos: []
        }
    },
    components: {

        Pgeneral
    },
    created() {
        this.listarBebida();
    },
    methods: {
        
        listarBebida() {
            this.resta = this.$route.params.idrestaurante;
            this.axios.get(`/restaurante/${this.resta}/4`)
                .then((response) => {
                    console.log(response.data.platoTipo)
                    this.productos = response.data.platoTipo;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }

    }

}


</script>

<style>
div#contenidoBebidas {
    display: none;
}
</style>
