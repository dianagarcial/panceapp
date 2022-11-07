<template>
    <GMapMap :center="center" :zoom="90" map-type-id="terrain" style="width: 400px; height: 500px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template>
<script>
export default {
    name: 'mapa_api',
    props:{
        latitud:Number,
        longitud:Number
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
            this.lat = this.latitud
            this.lng= this.longitud

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