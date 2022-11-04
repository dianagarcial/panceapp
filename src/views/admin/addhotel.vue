<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Agregar Hoteles</h1>
        <h2>Aqui puedes agregar Hoteles en travel</h2>


        <h3>Nombre del hotel</h3>
        <input type="text" v-model="form.nombre" />


        <h3>Descripcion</h3>
        <textarea v-model="form.descripcion" />

        <div id="row-form">
            <div id="colum-form">
                <h3>Dirección</h3>
                <input v-model="form.direccion" />
            </div>
            <div id="colum-form">
                <h3>Precio/noche</h3>
                <input v-model="form.precio" />
            </div>
        </div>
        <div id="row-form">
            <div id="colum-form">
                <h3>Latitud</h3>
                <input v-model='form.latitud' />
            </div>
            <div id="colum-form">
                <h3>Longitud</h3>
                <input v-model='form.longitud' />
            </div>
        </div>
        <h3>Imagen de presentacion</h3>
        <input type="file"  />


        <h3>Imagen auxiliar 1</h3>
        <input type="file" />
        <h3>Imagen auxiliar 2</h3>
        <input type="file"  />
        <h3>Imagen auxiliar 3</h3>
        <input type="file" />
        <div id="izq">

            <button id="retro" @click="regresar">Cancelar</button>
            <button id="ir" @click="ingreso">Agregar</button>
        </div>
    </div>
</template>

<script>
export default {

    name: 'addHotel',
    data() {
        return {
            form: {
                nombre: '',
                descripcion: '',
                direccion: '',
                precio: '',
                nroHabitaciones: '',
                latitud: '',
                longitud: '',
                imagen: '',
                imagenaux1: '',
                imagenaux2: '',
                imagenaux3: '',
                indicacion: ''


            }


        }
    },

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