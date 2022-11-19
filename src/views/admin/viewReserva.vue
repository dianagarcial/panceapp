<template>
    <div id="contenido">
        <h1>Reserva</h1>
        
        <h2>Aqui estan los detalles de la reserva</h2>
        
        <table>
            <thead>
                <tr>

                    <th>Nombre Plato</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr id="table">

                    <td>
                        {{ nombre }}
                    </td>
                    <td id="acciones">


                        <button @click="borrar(id)" id="acciones">
                            <img src="https://i.ibb.co/0FRPzMQ/ant-design-delete-outlined.png" alt="Eliminar"
                                height="30" width="30">
                        </button>

                    </td>
                </tr>
            </tbody>
        </table>


        <h1>Editar Restaurante</h1>
        <h2>Aqui puedes editar la información del restaurante</h2>


        <h3>Nombre del Restaurante</h3>
        <input v-model="form.nombre" />



        <h3>Dirección</h3>
        <input v-model="form.direccion" />

        <h3>Dirección</h3>
        <textarea v-model="form.indicacion" />


        <div id="row-form">
            <div id="colum-form">
                <h3>Latitud</h3>
                <input v-model="form.latitud" />
            </div>
            <div id="colum-form">
                <h3>Longitud</h3>
                <input v-model="form.longitud" />
            </div>

        </div>
        <h3>Imagen</h3>
        <input v-model="form.imagen" />
        <div id="izq">

            <button id="retro" @click="cancelar()">Cancelar</button>
            <button id="ir" @click="actualizar()">Editar</button>
        </div>
    </div>
</template>


<script>


export default {
    name: 'Editrestaurante',
    
    data() {
        return {
            platos: [],
            nombreRes: "",
            form: {
                nombre: '',
                direccion: '',
                latitud: '',
                longitud: '',
                indicacion: '',
                imagen: ''

            }


        }

    },
    created() {
        this.listarRestaurante();
    },
    methods: {
        cancelar() {
            this.$router.push('/admin/restaurante')
        },
        async listarRestaurante() {
            this.idResta = this.$route.params.idRestaurante
            console.log(this.idResta)

            await this.axios.get(`/restaurante/${this.idResta}`)
                .then((response) => {
                    console.log(response.data.Restaurante_.plato)
                    this.platos = response.data.Restaurante_.plato;



                    this.nombreRes = response.data.Restaurante_.nombre
                    this.form.nombre = response.data.Restaurante_.nombre
                    this.form.direccion = response.data.Restaurante_.direccion
                    this.form.latitud = response.data.Restaurante_.latitud;
                    this.form.longitud = response.data.Restaurante_.longitud
                    this.form.indicacion = response.data.Restaurante_.indicacion
                    this.form.imagen = response.data.Restaurante_.imagen

                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        addplato() {
            this.idResta = this.$route.params.idRestaurante
            this.$router.push(`/admin/restaurante/addPlato/${this.idResta}`)
        },
        async actualizar() {
            this.id = this.$route.params.idRestaurante
            console.log(this.id)
            this.axios.put(`/restaurante/${this.id}`, this.form)
                .then((response) => {
                    console.log(response.data)
                    alert('actualizado')
                    this.$router.push(`/admin/restaurante`)
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