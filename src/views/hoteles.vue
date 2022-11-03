<template>
    <div id="contenido">
        <h1>Reserva en uno de nuestros hoteles</h1>
        <h2>Alojate en uno de nuestros hoteles</h2>
        <TarjetaHotel v-for="(producto, key) in productos" :key="key" :titulo="producto.nombre"
            :subtitulo="producto.precio" :imagen="producto.imagen" :idhotel="producto._id" />
            
    </div>
</template>

<script>
import TarjetaHotel from "@/components/tarjetaHotel.vue";
export default {
    name: 'Hoteles',
    data() {
        return {
            productos: []
        }
    },
    components: {
        TarjetaHotel
    },
    created() {
    this.listarHoteles();
  },
  methods: {
    listarHoteles() {
      this.axios.get('/hotel/todos')
        .then((response) => {
          console.log(response.data.Hotel_)
          this.productos = response.data.Hotel_;
          
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
