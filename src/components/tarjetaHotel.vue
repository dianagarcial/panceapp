<template>

    <div id="tarjeta-plan">

        <img id="foto-plan" :src="imgSrcP" alt="Frame-2" />
        <div id="conte-tarjeta-hotel">
            <h3 id="tarj3">{{titulo}}</h3>
            <h4 id="tarj4">${{subtitulo}}/Noche</h4>
            
        </div>

        <div id="btn-ent">
            <button id="btn-ent" @click="entrar(idhotel)">Reservar</button>

        </div>



    </div>


</template>
 
<script>

export default {
    name: 'tarjetaPlan',
    props: {
        titulo: String,
        subtitulo: String,
        imagen: String,
        idhotel:String

    }, data() {
        return {
            imgSrcP: this.imagen
        }
    },
     methods: {
        async entrar(idhotel) {
            console.log(idhotel)
            await this.$router.push(`/verHotel/${idhotel}`)
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

div#conte-tarjeta-hotel {
    display: flex;
    flex-direction: column;
    margin: 2%;
    width: 50%;
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

h5#tarj5 {
    font-family: 'Varela';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;

    align-items: center;



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