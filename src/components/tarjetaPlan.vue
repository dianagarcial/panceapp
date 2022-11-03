<template>

    <div id="tarjeta-plan">
        <img id="foto-plan" :src="imgSrc" alt="Frame-2" />
        <div id="conte-tarjeta-plan">
            <h3 id="tarj3">{{titulo}}</h3>
            <Estrellas></Estrellas>
        </div>


        <div id="btn-ent">
            <button id="btn-ent" @click="entrar(idres)">Ver</button>

        </div>


    </div>


</template>
 
<script>
import Estrellas from "@/components/estrellas.vue";
export default {
    name: 'tarjetaPlan',
    props: {
        titulo: String,
        subtitulo: String,
        imagen: String,
        idres:String

    },
    data() {
        return {
            imgSrc: this.imagen,
            
        }
    },
    components: {
        Estrellas
    }, methods: {
        async entrar(idres) {
            
            await this.$router.push(`restaurante/${idres}`)
        }
    }

}
</script>
<style>
div#tarjeta-plan {
    /* Blanco/Blanco2 */

    background: #EEEEEE;
    /* Sombra1 */

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin-bottom: 2%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
}

div#conte-tarjeta-plan {
    display: flex;
    flex-direction: column;
    margin: 2%;
    width: 65%;
    justify-content: center;
}

img#foto-plan {
    margin: 3%;
    height: 10%;
}

h3#tarj3 {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;

    display: flex;
    align-items: center;
    margin-bottom: 0;

    /* Negro/Negro1 */

    color: #292929;
}

h4#tarj4 {
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    display: flex;
    align-items: center;
    margin-top: 1%;

    /* Negro/Negro1 */

    color: #292929;

}

button#btn-ent {
    background: #78E3FD;
    box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 10px;
    border: 0;
    height: 25%;
    margin-right: 5%;
    padding: 10px;
    width: 200%;
    text-align: center;
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    align-items: center;
    text-align: center;
}

div#btn-ent {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 3%;
    margin-right: 5%;
    width: 10%;
}
</style>