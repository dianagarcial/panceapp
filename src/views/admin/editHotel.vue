<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>


        <h1>Editar Restaurante</h1>
        <h2>Aqui puedes editar Hoteles en travel</h2>


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
        <input type="text" v-model='form.imagen' />


        <h3>Imagen auxiliar 1</h3>
        <input type="text" v-model='form.imagenaux1' />
        <h3>Imagen auxiliar 2</h3>
        <input type="text" v-model='form.imagenaux2' />
        <h3>Imagen auxiliar 3</h3>
        <input type="text" v-model='form.imagenaux3' />
        <div id="izq">

            <button id="retro" @click="cancelar">Cancelar</button>
            <button id="ir" @click="actualizar">Editar</button>
        </div>
    </div>
</template>


<script>


export default {
    name: 'Edithotel',
    
    data() {
        return {
            platos: [],
            nombreRes: "",
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
    created() {
        this.listarRestaurante();
    },
    methods: {
        cancelar() {
            this.$router.push('/admin/hotel')
        },
        async listarRestaurante() {
            this.idHot = this.$route.params.idHotel
            console.log(this.idHot)

            await this.axios.get(`/hotel/${this.idHot}`)
                .then((response) => {
                    console.log(response.data.Hotel_)
                    this.form.nombre=response.data.Hotel_.nombre
                    this.form.descripcion=response.data.Hotel_.descripcion
                   this.form.direccion=response.data.Hotel_.direccion
                   this.form.precio=response.data.Hotel_.precio
                   this.form.latitud=response.data.Hotel_.latitud
                   this.form.longitud=response.data.Hotel_.longitud
                   this.form.imagen=response.data.Hotel_.imagen
                   this.form.imagenaux1=response.data.Hotel_.imagenaux1
                   this.form.imagenaux2=response.data.Hotel_.imagenaux2
                   this.form.imagenaux3=response.data.Hotel_.imagenaux3
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        
        async actualizar() {
            this.idHot = this.$route.params.idHotel
            console.log(this.idHot)

            this.axios.put(`/hotel/${this.idHot}`, this.form)
                .then((response) => {
                    console.log(response.data)
                    this.$swal({
                        title: "Hotel actualizado",
                        icon: "success",
                        button: "ok!",
                    });
                    this.$router.push(`/admin/hotel`)
                })
                .catch((e) => {
                    console.log('error' + e);
                })

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