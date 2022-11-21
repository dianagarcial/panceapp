<template>
    <div id="contenido">
        <h1>Pedidos Especifico</h1>
        
        <h2>Aqui esta el pedido No.{{ordenes.id}}</h2>
        <tarjetaPedido v-for="(orden, key) in platos" :key="key" :ordenes="orden" /> <!--Aqui va la tabla, entonces hay que traer la info del back-->
        <br/>
        <h1>Datos del Cliente</h1>
        <h2><b>Nombre:  </b>  {{ordenes.usuario[0].nombre}}</h2>
        <h2><b>Celular:  </b>  {{ordenes.usuario[0].celular}}</h2>
        <h2><b>Direccion:  </b>  {{ordenes.usuario[0].direccion}}</h2>

        
      
    </div>
</template>


<script>
import tarjetaPedido from "@/components/tarjetaPedidos.vue";
export default {
    name: 'OrdenEspecifica',
    components: {
        tarjetaPedido
    },

    //Aqui iria todo el cuento para traer las ordenes, maosmenos lo voy a intentar implementar
    data() {
        return {
            ordenes: [
                {
                    id:'',

                }
            ],
            platos:[]
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
                    this.ordenes = response.data.Orden_;
                    this.ordenes.id= response.data.Orden_._id
                    this.ordenes.usuario= response.data.Orden_.usuario
                    this.platos= response.data.Orden_.plato
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