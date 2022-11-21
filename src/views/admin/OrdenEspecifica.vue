<template>
    <div id="contenido">
        <h1>Pedidos Especifico</h1>
        
        <h2>Aqui esta el pedido x</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre plato</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <table_orden v-for="(orden, key) in ordenes" :key="key" :nombre="orden.nombre" :cantidad="orden.cantidad" /> <!--Aqui va la tabla, entonces hay que traer la info del back-->
            </tbody>
        </table>
    </div>
</template>


<script>
import table_orden from "@/components/table_orden.vue";
export default {
    name: 'OrdenEspecifica',
    components: {
        table_orden
    },

    //Aqui iria todo el cuento para traer las ordenes, maosmenos lo voy a intentar implementar
    data() {
        return {
            ordenes: [
                {
                    "nombre": "holi",
                    "cantidad": 2,
                    "precio": 20000,
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
            this.idOrden = this.$route.params.id
            console.log(this.idOrden)
            this.axios.get('/orden/'+ this.idOrden)//Aqui falta la ruta de ordenes
                .then((response) => {
                    console.log(response.data.Orden_)
                    this.restaurantes = response.data.Orden_;
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