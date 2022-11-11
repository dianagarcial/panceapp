<template>
    <div id="contenido">
        <h1>Pedidos Realizados</h1>
        
        <h2>Aqui estan los pedidos relizados, para el detalle da click en ver pedidos, y los finalizas dando click en finalizar pedido</h2>
        <table>
            <thead>
                <tr>

                    <th>Nombre Cliente</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <table_pedidos v-for="(orden, key) in ordenes" :key="key" /> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
    </div>
</template>


<script>
import table_pedidos from "@/components/table_pedidos.vue";
export default {
    name: 'OrdenesGeneral',
    components: {
        table_pedidos
    },

    //Aqui iria todo el cuento para traer las ordenes, maosmenos lo voy a intentar implementar
    data() {
        return {
            ordenes: [
                {
                    "nombre": "holi"
                }
            ]
        }
    },
    created() {
        this.listarOrdenes();
    },
    methods: {
        listarOrdenes() {
            this.axios.get('/pedido/todos')//Aqui falta la ruta de ordenes
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