<template >
    <div id="contenido">
        
        <h1>Agregar Restaurante</h1>
        <h2>Aqui puedes agregar restaurantes</h2>
        
            
                <h3>Nombre del Restaurante</h3>
                <input v-model="form.nombre"/>
            


                <h3>Dirección</h3>
                <input v-model="form.direccion"/>

                <h3>Dirección</h3>
                <textarea v-model="form.indicacion"/>


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
                <input v-model="form.imagen"/>
        <div id="izq">
            
            <button id="retro" @click="cancelar()">Cancelar</button>
            <button id="ir" @click="guardar()">Agregar</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'CrearRestaurante',
    data() {
        return {
            form: {
                nombre: '',
                direccion: '',
                latitud: '',
                longitud: '',
                imagen: '',
                indicacion:''

            }


        }
    },
    methods:{
        async guardar(){
            if(this.form.nombre===''||this.form.direccion===''|| this.form.imagen ==''|| this.form.latitud === '' || this.form.longitud ==='' || this.form.indicacion ===''){
                this.$swal({
                        title: "Complete todos los campos",
                        icon: "warning",
                        button: "ok!",
                    });
            }
            else{
                
            console.log(this.form)
            await axios.post("/restaurante/new", this.form)
                .then((result) => {
                    console.log(result);
                    this.$swal({
                        title: "Se ha creado exitosamente la reserva!",
                        text: "El valor de su reserva es...",
                        icon: "success",
                        button: "ok!",
                    });
                });

            }


        },
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