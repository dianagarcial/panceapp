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
        

       
        
        <Mapa  :latitud="hotel.latitud" :longitud="hotel.longitud" :indicacion="hotel.indicacion"
            :direccion="hotel.direccion" />

        <Reserva />

    </div>
</template>

<script>
import Servicios from "@/components/Servicios.vue";

import Mapa from "@/components/mapa.vue";
import Reserva from "../components/Reserva.vue";

export default {
    name: 'VerHoteles',
    data() {
        return {
            hotel: {},
            
        }
    },
    components: {
        Servicios,
        
        Mapa,
        Reserva
     
    },
    created() {
        this.listarHotel();
        this.mostrar();
    },
    methods: {
        async listarHotel() {
            this.hot = this.$route.params.idhotel;
            await this.axios.get(`/hotel/${this.hot}`)
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
