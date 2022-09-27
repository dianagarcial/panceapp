<template>
    <div id="mapa">

        <img :src="imgSrc" alt="Frame-5">
        <div id="mapa-conte">
            <h1>Llegar es muy facil</h1>
            <h2>{{indicacion}}</h2>
            <h2>{{direccion}}</h2>
            <button id="ir">Llevame</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Mapa',
    props: {
        imagen: String,
        indicacion: String,
        direccion: String

    },
    data() {
        return {
            imgSrc: this.imagen
        }
    }

}
</script>
<style>
div#mapa {
    /* Blanco/Blanco2 */

    background: #EEEEEE;
    border-radius: 15px;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
    padding: 2%;
}

img#mapa-imagen {
    width: 100%;
}

div#mapa-conte {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    align-content: center;
    margin-left: 5%;
}
</style>