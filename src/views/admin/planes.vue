<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion planes</h1>
        <h2>Aqui puedes administrar los planes en travel</h2>
        <Botonprincipal nombre="Añadir" link="restaurantes" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadmin v-for="(plan, key) in planes"
                :key="key" :id="plan.id" :nombre="plan.nombre"
                />
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
            planes: [
                {
                    id: "1111",
                    nombre: "Plan1"

                },
                {
                    id: "1112",
                    nombre: "Plan2"
                }
            ]
        }
    }
}
</script>
<style>

</style>