<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administración Platos</h1>
        <h2>Aqui puedes administrar los platos del restaurante {{nombreRes}}</h2>
        <div id="btn-principal">
        <button id="btn-principal" @click="addplato()">
            <h1>Añadir plato</h1>
        </button>
    </div>
        <table>
            <thead>
                <tr>
                    
                    <th>Nombre Plato</th>
                   
                </tr>
            </thead>
            <tbody>
                <tableadminplatos v-for="(plato, key) in platos" :key="key" :id="plato._id" :nombre="plato.nombre" />
            </tbody>
        </table>

        
        <h1>Editar Restaurante</h1>
        <h2>Aqui puedes editar la información del restaurante</h2>
        
            
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
            <button id="ir" @click="actualizar()">Editar</button>
        </div>
    </div>
</template>


<script>

import tableadminplatos from "@/components/tableadminplatos.vue";
export default {
    name: 'Editrestaurante',
    components: {
 
        tableadminplatos
    },
    data() {
        return {
            platos: [],
            nombreRes: "",
            form:{
                nombre:'',
                direccion:'',
                latitud:'',
                longitud:'',
                indicacion:'',
                imagen:''

            }
            
            
        }
        
    },
    created() {
    this.listarRestaurante();
  },
    methods:{
        cancelar() {
            this.$router.push('/admin/restaurante')
        },
        async listarRestaurante() {
        this.idResta= this.$route.params.idRestaurante
        console.log(this.idResta)
        
        await this.axios.get(`/restaurante/${this.idResta}`)
        .then((response) => {
          console.log(response.data.Restaurante_.plato)
          this.platos = response.data.Restaurante_.plato;
          


          this.nombreRes= response.data.Restaurante_.nombre
          this.form.nombre=response.data.Restaurante_.nombre
          this.form.direccion=response.data.Restaurante_.direccion
          this.form.latitud=response.data.Restaurante_.latitud;
          this.form.longitud=response.data.Restaurante_.longitud
          this.form.indicacion=response.data.Restaurante_.indicacion
          this.form.imagen=response.data.Restaurante_.imagen
          
        })
        .catch((e) => {
          console.log('error' + e);
        })
    },
    addplato(){
        this.idResta= this.$route.params.idRestaurante
        this.$router.push(`/admin/restaurante/addPlato/${this.idResta}`)
    },
    async actualizar(){
        this.id= this.$route.params.idRestaurante
        console.log(this.id)    
            this.axios.put(`/restaurante/${this.id}`, this.form)
        .then((response) => {
          console.log(response.data)
          this.$swal({
                        title: "Restaurante actualizado con exito",
                        icon: "success",
                        button: "ok!",
                    });
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