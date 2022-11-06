<template>
    <div id="contenido">
        <h1>Reserva Especifico</h1>
        
        <h2>Aqui esta la reserva x</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre Hotel</th>
                    <th>Ingreso</th>
                    <th>Salida</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <table_reserva v-for="(orden, key) in ordenes" :key="key" :nombre="orden.nombre" :ingreso="orden.cantidad" /> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
    </div>
</template>


<script>
import table_reserva from "@/components/table_reserva.vue";
export default {
    name: 'ReservaEspecifica',
    components: {
        table_reserva
    },

    //Aqui iria todo el cuento para traer las ordenes, maosmenos lo voy a intentar implementar
    data() {
        return {
            ordenes: [
                {
                    "nombre": "fkjsdl",
                    "ingreso": 20150325,
                    "salida": 2022-12-13,
                    "total": 40000
                }
            ]
        }
    },
    created() {
        this.listarOrdenes();
    },
    methods: {
        listarOrdenes() {
            this.axios.get('/')//Aqui falta la ruta de ordenes
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