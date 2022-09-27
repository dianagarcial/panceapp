<template>
    <div id="contenido">
        <h1>Mira los platos que ofrecemos</h1>
        <h2>Antojate con los platos disponibles en el menu</h2>
        <Plato />
        <Plato />
        <Plato />
        <Plato />
        <h1>Bebidas</h1>
        <TarjetaPlatos />
    </div>
</template>

<script>
import Plato from "@/components/plato.vue";
import TarjetaPlatos from "@/components/TarjetaPlatos.vue"

export default {
    name: 'Bebidas',
    components: {
        Plato,
        TarjetaPlatos
    }
}

</script>
<style>

</style>