<template>
    <div id="contenido">
        <h1>Portal administrativo Travelapp</h1>
        <h1>Administracion planes</h1>
        <h2>Aqui puedes administrar los planes en travel</h2>
        <Botonprincipal nombre="Añadir" link="restaurantes" />
        <tableadmin />
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
}
</script>
<style>

</style>