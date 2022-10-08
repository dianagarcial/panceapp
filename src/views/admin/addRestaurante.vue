<template >
    <div id="contenido">
        
        <h1>Agregar Restaurante</h1>
        <h2>Aqui puedes agregar restaurantes</h2>
        
            
                <h3>Nombre del Restaurante</h3>
                <input />
            


                <h3>Dirección</h3>
                <input />


        <div id="row-form">
            <div id="colum-form">
                <h3>Latitud</h3>
                <input />
            </div>
            <div id="colum-form">
                <h3>Longitud</h3>
                <input />
            </div>
        </div>
        <div id="izq">
            
            <button id="retro" @click="cancelar()">Cancelar</button>
            <button id="ir" @click="cancelar()">Agregar</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        cancelar() {
            this.$router.push('/admin/restaurante')
        }
    }
}
</script>
<style >
    div#row-form {

display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
}

div#colum-form {
display: flex;
flex-direction: column;
width: 45%;
}
</style>