<template>
    <div id="mapa">

        <GMapMap :center="center" :zoom="90" map-type-id="terrain" style="width: 400px; height: 500px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
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

        indicacion: String,
        direccion: String,
        latitud:String,
        longitud:String 
                },

    data() {
        return {
            
            lat:'',
            lng:'',
            center:{},
            markers:[]


        }
    },
    created() { 
        this.mostrar();
    },
    methods: {
        mostrar(){
            
            this.lat = parseFloat(this.latitud)
            this.lng= parseFloat(this.longitud)

            this.center= { lat:this.lat,lng:this.lng},
            this.markers= [
                {
                    position: {
                        lat:this.lat,lng:this.lng
                    },
                }
               
            ]
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