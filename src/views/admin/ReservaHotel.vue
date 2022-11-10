<template>
    <div id="contenido">
        <h1>Reservas Realizadas</h1>
        
        <h2>Aqui estan las reservas relizadas, para el detalle da click en ver reserva</h2>
        <table>
            <thead>
                <tr>
                  
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadminhotel v-for="(hotel, key) in hoteles"
                :key="key" :id="hotel._id" :nombre="hotel.nombre" 
                />
            </tbody>
        </table>
    </div>
</template>


<script>

import tableadminhotel from "@/components/tableadminhotelres.vue";
export default {
    name: 'hotelandmin',
    components: {

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