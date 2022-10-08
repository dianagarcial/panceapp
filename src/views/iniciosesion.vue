<template>
    <div id="contenido">
        <h1>Ingreso</h1>
        <h2>Que bueno verte de nuevo</h2>
        <form @submit.prevent="Login()">
            <h3>Correo electronico</h3>
            <input type="email" id="email" name="email" v-model="email" />
            <h3>Contraseña</h3>
            <input type="password" id="password" name="password" v-model="password" />
            <div id="izq">
                <button id="retro" @click="registro()">Registrarse</button>
                <button id="ir" type="submit">Ingresar</button>
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

                if (this.email === 'administrador@gmail.com') {
                    this.router.push('/admin')
                } else {
                    this.router.push('/')
                }
                this.$swal({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#7DE36D',
                    icon: 'success',
                    title: 'Ingreso exitoso'

                });
                
            }
            catch (err) {
                this.error = err.message
                console.log(this.error)
                this.$swal({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#f27474',
                    icon: 'error',
                    title: 'Hubo un error al ingresar'

                });
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