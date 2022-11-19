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



        <div id="izq-reser">
            
            <button id="ir" v-on:click='guardar()' type="submit">Reservar</button>
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
                idHotel: '',
                ids:''

            }


        }
    },

    methods: {
        async guardar() {
            if(this.form.fechaIngreso===''|| this.form.fechaSalida ==''|| this.form.cantPersonas === '' || this.form.nroHabitaciones ===''){
                this.$swal({
                        title: "Complete todos los campos",
                        icon: "warning",
                        button: "ok!",
                    });
            }
            else{

            
            this.form.idHotel = this.$route.params.idhotel
            this.form.ids=localStorage.getItem('ids')
            console.log(this.form.ids)
            await axios.post("/reserva/new", this.form)
                .then((result) => {
                    console.log(result);
                    this.$swal({
                        title: "Se ha creado exitosamente la reserva!",
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
div#izq-reser {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 3%;
    margin-right: 3%;
}
</style>