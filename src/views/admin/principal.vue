
<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion servicios</h1>
        <h2>Aqui puedes administrar los servicios en travel</h2>
        <Botonprincipal nombre="Restaurantes" link="/admin/restaurante" />
        <Botonprincipal nombre="Hoteles" link="/admin/hotel" />
        <Botonprincipal nombre="Planes Vacacionales" link="admin/planes" />
        <h1>Administracion usuarios</h1>
        <h2>Aqui puedes administrar los usuarios en travel</h2>
        <Botonprincipal nombre="Administrar usuarios" link="/" />
    </div>
</template>
<script>
import Botonprincipal from "@/components/Boton-principal.vue";
export default {
    name: 'adminprincipal',
    components: {
        Botonprincipal,
    },
    data() {
        return {
            admins: [
                {
                    id: "1111",
                    nombre: "Hotel1"
                },
                {
                    id: "1112",
                    nombre: "Hotel2"
                }
            ]
        }

    }
}
</script>
<style>

</style>