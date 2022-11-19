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
                <table_reserva v-for="(reserva, key) in reservas" :key="key" :idReserva="reserva._id"
                    :nombre="usuariosnom[key]" :hotel="hotelnom[key]" :ingreso="reserva.fechaIngreso"
                    :salida="reserva.fechaSalida" />
                <!--Aqui va la tabla, entonces hay que traer la info del back-->
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
            reservas: [],
            usuariosnom: [],
            hotelnom:[]
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


                    this.reservas.map(reserva => {
                        this.resus = (reserva.usuario)
                        this.resus.map(user => {
                            this.usuariosnom.push(user.nombre)



                        })

                        this.resho = (reserva.hotel)
                        this.resho.map(hote => {
                            this.hotelnom.push(hote.nombre)



                        })



                    })
                    console.log(this.usuariosnom)

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