<template>

    <div id="contenidoPlatoF" display="none">
        <h1>Platos fuertes</h1>
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
        this.listarPFuerte();
    },
    methods: {
        listarPFuerte() {
            this.resta = this.$route.params.idrestaurante;
            this.axios.get(`/restaurante/${this.resta}/2`)
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
div#PlatoF {
    display: none;
}
</style>
