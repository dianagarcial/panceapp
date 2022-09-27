<template>
    <div id="contenido">
        <div id="conte-vhotel">
            <img id="foto-plan" src="https://i.ibb.co/vj3ntfd/Frame-2-1.png" alt="Frame-2" />

            <div id="conte-vhotel-text">
                <h1>Hotel Pance 1</h1>
                <h2>Un lujoso hotel en un hermoso pueblo</h2>
            </div>
        </div>
        <Servicios/>
        <h1>Imagenes</h1>
        <div id="imagenes">
            <img id="imgc" src="https://i.ibb.co/h8Wb7t5/unsplash-j-Ut4-MJXTJn0-5.png" alt="unsplash-j-Ut4-MJXTJn0-5" />
            <img id="imgc" src="https://i.ibb.co/HdMZ7R1/unsplash-j-Ut4-MJXTJn0-6.png" alt="unsplash-j-Ut4-MJXTJn0-6" />
            <img id="imgc" src="https://i.ibb.co/7rDwTZw/unsplash-j-Ut4-MJXTJn0-7.png" alt="unsplash-j-Ut4-MJXTJn0-7" />
        </div>

        <h1>Reseñas</h1>
        <h2>Opiniones de otros clientes</h2>
        <div id="conte-comentario">
            <Comentarios v-for="(comentario, key) in comentarios" :key="key" :nombre="comentario.nombre"
                :comentario="comentario.comentario" :fecha="comentario.fecha" :imagen="comentario.imagen" />
        </div>
        <Mapa imagen="https://i.ibb.co/xMQ8dpV/Frame-5.png" indicacion="Estamos ubicados en la panamericana"
            direccion="Calle 111 # 77 - 99, Km 4, Cali, Valle del Cauca, Colombia" />
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
</style>
