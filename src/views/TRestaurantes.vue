<template>
  <div id="contenido">
    <h1>Explora los restaurantes disponibles</h1>
    <h2>Selecciona uno de los restaurantes disponibles, para iniciar tu orden</h2>
    <TarjetaPlan v-for="(restaurante, key) in restaurantes" :key="key" :titulo="restaurante.nombre"
      :imagen="restaurante.imagen" :idres="restaurante._id" />
  </div>

</template>
<script>
import TarjetaPlan from "@/components/tarjetaPlan.vue";
export default {
  name: 'TRestaurantes',
  data() {
    return {
      notas: [],
      restaurantes: []
    }
  },
  components: {
    TarjetaPlan
  }, 
  created() {
    this.listarNotas();
  },
  methods: {
    listarNotas() {
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
};

</script>