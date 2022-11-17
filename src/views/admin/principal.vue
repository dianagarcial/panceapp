
<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administración servicios</h1>
        <h2>Aqui puedes administrar los servicios en travel</h2>
        <Botonprincipal nombre="Restaurantes" link="/admin/restaurante" />
        <Botonprincipal nombre="Hoteles" link="/admin/hotel" />
        <h1>Administración pedidos</h1>
        <h2>Aqui puedes administrar los servicios solicitados en travel</h2>
        <Botonprincipal nombre="Pedidos restaurantes" link="/admin/ordenes" />
        <Botonprincipal nombre="Reservas hoteles" link="/admin/reservas" />

    </div>
</template>
<script>
//window.location.reload()
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

    },
    
}
</script>
<style>

</style>