<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Agregar Hoteles</h1>
        <h2>Aqui puedes agregar Hoteles en travel</h2>
        
            
                <h3>Nombre del hotel</h3>
                <input />
            

                <h3>Descripcion</h3>
                <textarea />

        <div id="row-form">
            <div id="colum-form">
                <h3>Dirección</h3>
                <input />
            </div>
            <div id="colum-form">
                <h3>Precio/noche</h3>
                <input />
            </div>
        </div>
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
            
            <button id="retro" @click="ingreso">Cancelar</button>
            <button id="ir" @click="ingreso">Agregar</button>
        </div>
    </div>
</template>

<script>
export default {
    
    name: 'addHotel',
    methods: {
        ingreso() {
            this.$router.push('/')
        }
    
}
}
</script>

<style>
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