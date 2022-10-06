<template>
    <div id="contenido">
        <h1>Ingreso</h1>
        <h2>Que bueno verte de nuevo</h2>
        <form @submit.prevent="Login()">
            <h3>Correo electronico</h3>
            <input type="email" id="email" name="email" />
            <h3>Contraseña</h3>
            <input type="password" id="pass" name="pass" />
            <div id="izq">
                <button id="retro" type="submit">Ingresar</button>
                <button id="ir" @click="registro">Registrarse</button>

            </div>

        </form>
    </div>


</template>
<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {


    name: 'Iniciosesion',
    data() {
        return {
            email: '',
            password: '',
            error: null,
            store: useStore(),
            router: useRouter(),
        }
    },
    methods: {
        async Login() {
            try {
                await this.store.dispatch('user/logIn', {
                    email: this.email,
                    password: this.password
                })
                this.router.push('/registro')
            }
            catch (err) {
                this.error=err.message
            }
        },
        registro() {
            this.router.push('/registro')
        }

    }
}
</script>
<style>

</style>