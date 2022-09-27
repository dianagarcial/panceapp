<template>

    <div id="comentario">
        <div id="comen-ti">
            <img id="ser" :src="imgSrcP" alt="Wifi" />
            <h1>{{nombre}}</h1>
        </div>
        <Estrellas />
        <h3>{{comentario}}</h3>
        <h4>{{fecha}}</h4>

    </div>



</template>
<script>
import Estrellas from './estrellas.vue';
export default {
    name: 'Comentario',
    props: {
        nombre: String,
        comentario: String,
        fecha: String,
        imagen: String

    }, data() {
        return {
            imgSrcP: this.imagen
        }
    },
    components: {
        Estrellas
    }
}

</script>




<style>
div#comentario {


    background: #EEEEEE;
    /* Sombra1 */

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 28%;
    padding: 2%;
}

div#conte-comentario {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

}

div#comen-ti {
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
}

div#comen-ti h1 {
    font-size: 2em;
    margin-left: 1%;
    margin: auto;
}

div#comentario h3 {
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 26px;

    /* Negro/Negro1 */

    color: #292929;
}

div#comentario h4 {
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 0.7em;
    line-height: 21px;

    /* Negro/Negro2 */

    color: #797979;

}
</style>
