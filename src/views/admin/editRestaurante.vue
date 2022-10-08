<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administración Platos</h1>
        <h2>Aqui puedes administrar los platos del restaurante {{nombreRes}}</h2>
        <Botonprincipal nombre="Añadir Plato" link="/admin/restaurante/addPlato" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Plato</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadmin v-for="(plato, key) in platos" :key="key" :id="plato.id" :nombre="plato.nombre" :acciones="plato.accion" :link="plato.link"/>
            </tbody>
        </table>

        
        <h1>Editar Restaurante</h1>
        <h2>Aqui puedes editar la información del restaurante</h2>
        
            
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
            <button id="ir" @click="cancelar()">Editar</button>
        </div>
    </div>
</template>


<script>
import Botonprincipal from "@/components/Boton-principal.vue";
import tableadmin from "@/components/tableadmin.vue";
export default {
    name: 'Editrestaurante',
    components: {
        Botonprincipal,
        tableadmin
    },
    data() {
        return {
            platos: [
                {
                    id: "1111",
                    nombre: "Plato1",
                    accion: 'D',
                    link: "/admin/restaurante/edit"
                },
                {
                    id: "1112",
                    nombre: "Plato2",
                    accion: 'D',
                    link: "/admin/restaurante/edit"
                }
                
            ],
            nombreRes: "Restaurante1"
        }
        
    },
    methods:{
        cancelar() {
            this.$router.push('/admin/restaurante')
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