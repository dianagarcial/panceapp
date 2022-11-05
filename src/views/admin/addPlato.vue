<template >
    <div id="contenido">
        
        <h1>Agregar Platos</h1>
        <h2>Aqui puedes agregar platos</h2>
        
            
                <h3>Nombre del Plato</h3>
                <input type="text" v-model="form.nombre"/>
            


                <h3>Precio</h3>
                <input type="number" v-model="form.precio"/>

                <h3>Categoria</h3>
                <select v-model="form.tipo">
                    <option value="1">Entrada</option>
                    <option value="2">Plato fuerte</option>
                    <option value="3">Postre</option>
                    <option value="4">Bebida</option>
                </select>

                <h3>Imagen del plato</h3>
                <input type="text" v-model='form.imagen' />




        <div id="izq">
            
            <button id="retro" @click="cancelar()">Cancelar</button>
            <button id="ir" @click="guardar()">Agregar</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: 'addPlato',
    data() {
        return {
            form: {
                nombre: '',
                precio: '',
                tipo: '',
                imagen: '',
                idRestaurante:''
           
            }


        }
    },
    methods:{
        async guardar(){
            if(this.form.nombre===''||this.form.precio===''|| this.form.tipo ==''|| this.form.imagen === ''){
                this.$swal({
                        title: "Complete todos los campos",
                        icon: "warning",
                        button: "ok!",
                    });
            }
            else{
                
            console.log(this.form)
            this.form.idRestaurante=this.$route.params.idRestaurante
            await axios.post("/plato/new", this.form)
                .then((result) => {
                    console.log(result);
                    this.$swal({
                        title: "Se ha creado exitosamente el plato!",
                        icon: "success",
                        button: "ok!",
                    });
                    this.$router.push('/admin/restaurante/edit/'+ this.form.idRestaurante)

                });

        }
    },
        cancelar() {
            this.$router.push('/admin/restaurante/edit')
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