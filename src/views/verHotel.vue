<template>
    <div id="contenido">
        <div id="conte-vhotel">
            <img id="foto-plan" :src="hotel.imagen" alt="Frame-2" />

            <div id="conte-vhotel-text">
                <h1>{{ hotel.nombre }}</h1>
                <h2>{{ hotel.descripcion }}</h2>
            </div>
        </div>
        <Servicios />
        <h1>Imagenes</h1>
        <div id="imagenes">
            <img id="imgc" :src="hotel.imagenaux1" alt="unsplash-j-Ut4-MJXTJn0-5" />
            <img id="imgc" :src="hotel.imagenaux2" alt="unsplash-j-Ut4-MJXTJn0-6" />
            <img id="imgc" :src="hotel.imagenaux3" alt="unsplash-j-Ut4-MJXTJn0-7" />
        </div>
        

        <h1>Reseñas</h1>
        <h2>Opiniones de otros clientes</h2>
        <div id="conte-comentario">
            <Comentarios v-for="(comentario, key) in comentarios" :key="key" :nombre="comentario.nombre"
                :comentario="comentario.comentario" :fecha="comentario.fecha" :imagen="comentario.imagen" />
        </div>
        
        <Mapa  :latitud="hotel.latitud" :longitud="hotel.longitud" :indicacion="hotel.indicacion"
            :direccion="hotel.direccion" />

        <Reserva />

    </div>
</template>

<script>
import Servicios from "@/components/Servicios.vue";
import Comentarios from "../components/comentario.vue";
import Mapa from "@/components/mapa.vue";
import Reserva from "../components/Reserva.vue";

export default {
    name: 'VerHoteles',
    data() {
        return {
            hotel: {},
            
            comentarios: [
                {
                    nombre: 'Eloise Beier',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempor cras justo eu eget tristique tellus volutpat. Fringilla mauris nec hac purus nulla nec. Fermentum.',
                    fecha: 'Aug 31 2022 19:00',
                    imagen: 'https://i.ibb.co/5MYt3Pp/Ellipse-1.png'
                },
                {
                    nombre: 'Brad Stokes',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempor cras justo eu eget tristique tellus volutpat. Fringilla mauris nec hac purus nulla nec. Fermentum.',
                    fecha: 'Aug 31 2022 19:00',
                    imagen: 'https://i.ibb.co/vdK0n6b/Ellipse-1-1.png'
                },
                {
                    nombre: 'Edmund Pagac',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempor cras justo eu eget tristique tellus volutpat. Fringilla mauris nec hac purus nulla nec. Fermentum.',
                    fecha: 'Aug 31 2022 19:00',
                    imagen: 'https://i.ibb.co/n3wmj7G/Ellipse-1-2.png'
                }
            ]
        }
    },
    components: {
        Servicios,
        Comentarios,
        Mapa,
        Reserva
     
    },
    created() {
        this.listarHotel();
        this.mostrar();
    },
    methods: {
        listarHotel() {
            this.hot = this.$route.params.idhotel;
            this.axios.get(`/hotel/${this.hot}`)
                .then((response) => {
                    console.log(response.data.Hotel_)
                    this.hotel = response.data.Hotel_;
                    this.lat=parseFloat((response.data.Hotel_.latitud))
                    this.long=parseFloat((response.data.Hotel_.longitud))
                    console.log(this.hotel)
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        mostrar(){
            console.log(this.hotel)
        }

    }

}


</script>
<style>
div#conte-vhotel {
    display: flex;
    flex-direction: row;
}

div#conte-vhotel-text {
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    margin-bottom: 2em;
}

h1 {
    margin-bottom: 0;
}

div#imagenes {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

img#imgc {
    width: 30%;
}

div#conte-vhotel-text h2 {
    line-height: 1.5em;
}
</style>
