<template>
    <div id="contenido">
        <h1>Ingreso</h1>
        <h2>Que bueno verte de nuevo</h2>
        <h3>Correo electronico</h3>
        <input type="email" />
        <h3>Contraseña</h3>
        <input type="password" />
        <div id="izq">
            <button id="retro" @click="ingreso">Ingresar</button>
            <button id="ir" @click="registro">Registrarse</button>

        </div>
    </div>


</template>
<script>


export default {
    name: 'Iniciosesion',
    methods: {
        ingreso() {
            this.$router.push('/admin')
        },
        registro() {
            this.$router.push('/registro')
        }

    }
}
</script>
<style>

</style>