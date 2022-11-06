<template>
    <div id="contenido">
        <h1>Reservas Realizadas</h1>
        
        <h2>Aqui estan las reservas relizadas, para el detalle da click en ver reserva</h2>
        <table>
            <thead>
                <tr>

                    <th>Nombre Cliente</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <table_reserva v-for="(reserva, key) in reservas" :key="key" /> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
        <mapa_api />
    </div>
</template>


<script>
import table_reserva from "@/components/table_reserva.vue";
import mapa_api from "@/components/mapa_api.vue";
export default {
    name: 'ReservaGeneral',
    components: {
        table_reserva,
        mapa_api
    },

    //Aqui iria todo el cuento para traer las reservas, masomenos lo voy a intentar implementar
    data() {
        return {
            reservas: []
        }
    },
    created() {
        this.listarReservas();
    },
    methods: {
        listarReservas() {
            this.axios.get('/')//Aqui falta la ruta de Reservas
                .then((response) => {
                    console.log(response.data.Restaurante_)
                    this.restaurantes = response.data.Restaurante_;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }

    }
}
</script>
<style>

</style>