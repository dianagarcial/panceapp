<template>
    <div id="contenido">
        <h1>Mira los platos que ofrecemos</h1>
        <h2>Antojate con los platos disponibles en el menu</h2>
        <Plato />
        <Plato />
        <Plato />
        <Plato />

    </div>
</template>
<script>
import Plato from "@/components/plato.vue";
export default {
    name: 'Platos',
    components: {
        Plato
    }
}

</script>
<style>

</style>