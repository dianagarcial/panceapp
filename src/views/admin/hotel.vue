<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion Hoteles</h1>
        <h2>Aqui puedes administrar los Hoteles en travel</h2>
        <Botonprincipal nombre="Añadir" link="hotel/add" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadminhotel v-for="(hotel, key) in hoteles"
                :key="key" :id="hotel.id" :nombre="hotel.nombre" 
                />
            </tbody>
        </table>
    </div>
</template>


<script>
import Botonprincipal from "@/components/Boton-principal.vue";
import tableadminhotel from "@/components/tableadminhotel.vue";
export default {
    name: 'hotelandmin',
    components: {
        Botonprincipal,
        tableadminhotel
    },
    data() {
        return {
            hoteles: [ ]
        }

    },
    created() {
    this.listarHoteles();
  },
  methods: {
    listarHoteles() {
      this.axios.get('/hotel/todos')
        .then((response) => {
          console.log(response.data.Hotel_)
          this.hoteles = response.data.Hotel_;
          
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