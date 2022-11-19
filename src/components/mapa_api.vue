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
            lat:'3.3686094765940613',
            lng:'-76.52923721786082',
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

            console.log(this.lat)

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