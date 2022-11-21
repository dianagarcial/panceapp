<template>
    <div id="contenido">
        <h1>Pedidos Pendientes</h1>
        
        <h2>Aqui estan los pedidos pendientes, para el detalle da click en ver pedidos, y los finalizas dando click en finalizar pedido</h2>
        <table>
            <thead>
                <tr>

                    <th>Nombre Cliente</th>
                    <th>Fecha</th>
                    <th>Ver pedido</th>
                    <th>Finalizar</th>
                </tr>
            </thead>
            <tbody>
                <table_pedidos v-for="(orden, key) in ordenes" :key="key" :id="orden._id" :nombre="orden.usuario[0].nombre" :fecha="orden.fecha"  :estado="orden.estado"/> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
        <h1>Pedidos Entregados</h1>
        <h2>Aqui estan los pedidos entregados, para el detalle da click en ver pedidos</h2>
        <table>
            <thead>
                <tr>

                    <th>Nombre Cliente</th>
                    <th>Fecha</th>
                    <th>Ver pedido</th>
                    
                </tr>
            </thead>
            <tbody>
                <table_pedidosFinalizados v-for="(orden, key) in ordenesF" :key="key" :id="orden._id" :nombre="orden.usuario[0].nombre" :fecha="orden.fecha"  :estado="orden.estado"/> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
    </div>
</template>


<script>
import table_pedidos from "@/components/table_pedidos.vue";
import table_pedidosFinalizados from "@/components/table_pedidosFinalizados.vue";
export default {
    name: 'OrdenesGeneral',
    components: {
        table_pedidos,
        table_pedidosFinalizados
    },

    //Aqui iria todo el cuento para traer las ordenes, maosmenos lo voy a intentar implementar
    data() {
        return {
            ordenes: [],
            ordenesF:[]
            
        }
    },
    created() {
        this.listarOrdenes();
        this.listarOrdenesFinalizadas();
    },
    methods: {
        listarOrdenes() {
            this.axios.get('/orden/pendientes')//Aqui falta la ruta de ordenes
                .then((response) => {
                    console.log(response.data)
                    this.ordenes = response.data.ordenPendiente;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarOrdenesFinalizadas() {
            this.axios.get('/orden/finalizados')//Aqui falta la ruta de ordenes
                .then((response) => {
                    console.log(response.data.ordenFinalizado)
                    this.ordenesF = response.data.ordenFinalizado;
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