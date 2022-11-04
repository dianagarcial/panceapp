<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion Restaurantes</h1>
        <h2>Aqui puedes administrar los restaurantes en travel</h2>
        <Botonprincipal nombre="Añadir" link="restaurante/add" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadmin v-for="(restaurante, key) in restaurantes" :key="key" :id="restaurante.id" :nombre="restaurante.nombre"  />
            </tbody>
        </table>
    </div>
</template>


<script>
import Botonprincipal from "@/components/Boton-principal.vue";
import tableadmin from "@/components/tableadmin.vue";
export default {
    name: 'restauranteadmin',
    components: {
        Botonprincipal,
        tableadmin
    },
    data() {
        return {
            restaurantes: []
        }
    }, 
  created() {
    this.listarRestaurante();
  },
  methods: {
    listarRestaurante() {
      this.axios.get('/restaurante/todos')
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