<template>
    <div id="contenido">
        <h1>Reservas Realizadas</h1>
        
        <h2>Aqui estan las reservas relizadas, para el detalle da click en ver reserva</h2>
        <table>
            <thead>
                <tr>

                    <th>Cliente</th>
                    <th>Fecha Ingreso</th>
                    <th>Fecha Salida</th>
                    <th>Hotel</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <table_reserva v-for="(reserva, key) in reservas" :key="key" 
                :id="reserva._id" 
                :nombre="reserva.usuario[0].nombre"
                :hotel="reserva.hotel[0].nombre" 
                :ingreso="reserva.fechaIngreso" 
                :salida="reserva.fechaSalida"/> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>

    </div>
</template>


<script>
import table_reserva from "@/components/table_reserva.vue";
export default {
    name: 'ReservaGeneral',
    components: {
        table_reserva
       
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
            this.axios.get('/reserva/todos')//Aqui falta la ruta de Reservas
                .then((response) => {
                    console.log(response.data.Reserva_)
                    this.reservas = response.data.Reserva_;
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