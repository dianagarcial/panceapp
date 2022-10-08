<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion Hoteles</h1>
        <h2>Aqui puedes administrar los Hoteles en travel</h2>
        <Botonprincipal nombre="Añadir" link="hotel/add" />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tableadmin v-for="(hotel, key) in hoteles"
                :key="key" :id="hotel.id" :nombre="hotel.nombre" :acciones="hotel.accion" :link="hotel.link"
                />
            </tbody>
        </table>
    </div>
</template>


<script>
import Botonprincipal from "@/components/Boton-principal.vue";
import tableadmin from "@/components/tableadmin.vue";
export default {
    name: 'hotelandmin',
    components: {
        Botonprincipal,
        tableadmin
    },
    data() {
        return {
            hoteles: [
                {
                    id: "1111",
                    nombre: "Hotel1",
                    accion: 'R',
                    link: "/admin"
                },
                {
                    id: "1112",
                    nombre: "Hotel2",
                    accion: 'E',
                    link: "/admin"
                }
            ]
        }

    }
}
</script>
<style>

</style>