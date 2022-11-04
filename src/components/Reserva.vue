<template>

    <div id="reserva">
        <h1>Reserva ahora</h1>
        <h2>Fecha de ingreso</h2>
        <input type="date" v-model="form.fechaIngreso" name="fechaIngreso" required/>
        <h2>Fecha de salida</h2>
        <input type="date" v-model="form.fechaSalida" name="fechaSalida" required/>
        <h2>Cantidad de personas</h2>
        <input type="number" v-model="form.cantPersonas" name="cantPersonas" required/>
        <h2>Cantidad de habitaciones</h2>
        <input type="number" v-model="form.nroHabitaciones" name="nroHabitaciones" required/>



        <div id="izq">
            <button id="ir">Calcular</button>
            <button id="retro" v-on:click='guardar()' type="submit">Reservar</button>
        </div>

    </div>

</template>
<script>

import axios from "axios";

export default {

    name: 'CrearReserva',
    data() {
        return {
            form: {
                fechaIngreso: '',
                fechaSalida: '',
                cantPersonas: '',
                nroHabitaciones: '',
                idHotel: ''

            }


        }
    },

    methods: {
        guardar() {
            if(this.form.fechaIngreso===''|| this.form.fechaSalida ==''|| this.form.cantPersonas === '' || this.form.nroHabitaciones ===''){
                this.$swal({
                        title: "Complete todos los campos",
                        icon: "warning",
                        button: "ok!",
                    });
            }
            else{

            
            this.form.idHotel = this.$route.params.idhotel
            console.log(this.form)
            axios.post("/reserva/new", this.form)
                .then((result) => {
                    console.log(result);
                    this.$swal({
                        title: "Se ha creado exitosamente la reserva!",
                        text: "El valor de su reserva es...",
                        icon: "success",
                        button: "ok!",
                    });
                });

        }
    }

    }
}
</script>
<style>
div#reserva {
    /* AzulO */

    border: 10px solid #34F6F2;
    /* Sombra1 */

    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15));
    border-radius: 15px;

    padding: 10%;
    padding-top: 7%;

}
</style>