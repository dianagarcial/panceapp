<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion Restaurantes</h1>
        <h2>Aqui puedes administrar los restaurantes en travel</h2>
        <Botonprincipal nombre="Añadir" link="restaurante/add" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadmin v-for="(restaurante, key) in restaurantes" :key="key" :id="restaurante.id" :nombre="restaurante.nombre" :acciones="restaurante.accion" :link="restaurante.link" />
            </tbody>
        </table>
    </div>
</template>


<script>
import Botonprincipal from "@/components/Boton-principal.vue";
import tableadmin from "@/components/tableadmin.vue";
export default {
    name: 'restauranteadmin',
    components: {
        Botonprincipal,
        tableadmin
    },
    data() {
        return {
            restaurantes: [
                {
                    id: "1111",
                    nombre: "Restaurante1",
                    accion: 'R',
                    link: "/admin/restaurante/edit"
                },
                {
                    id: "1112",
                    nombre: "Restaurante2",
                    accion: 'R',
                    link: "/admin/restaurante/edit"
                }
            ]
        }
    }
}
</script>
<style>

</style>