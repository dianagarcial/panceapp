<template>
    <div id="contenido">
        <h1>Reserva</h1>

        <h2>Aqui estan los detalles de la reserva No. {{reservaN}}</h2>

        <table>
            <thead>
                <tr>

                    <th id="tit">Item</th>
                    <th id="tit">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr id="table">

                    <td>
                        Cliente
                    </td>
                    <td>

                        {{ form.cliente }}

                    </td>
                </tr>
                <tr id="table">

                    <td>
                        Hotel
                    </td>
                    <td >

                        {{ form.hotel }}

                    </td>
                </tr>
                <tr id="table">

                    <td>
                        Fecha de ingreso
                    </td>
                    <td >

                        {{ form.ingreso }}

                    </td>
                </tr>
                <tr id="table">

                    <td>
                        Fecha de salida
                    </td>
                    <td >

                        {{ form.salida }}

                    </td>
                </tr>
                <tr id="table">

                    <td>
                        No. de Habitaciones
                    </td>
                    <td>

                        {{ form.habitaciones }}

                    </td>
                </tr>
                <tr id="table">

                    <td>
                        No. de personas
                    </td>
                    <td >

                        {{ form.personas }}

                    </td>
                </tr>
            </tbody>
        </table>


    </div>

</template>


<script>


export default {
    name: 'Editrestaurante',

    data() {
        return {
            platos: [],
            reservaN: "",
            form: {
                cliente: '',
                hotel: '',
                ingreso: '',
                salida: '',
                habitaciones: '',
                personas: ''

            }


        }

    },
    created() {
        this.listarRestaurante();
    },
    methods: {
        cancelar() {
            this.$router.push('/admin/restaurante')
        },
        async listarRestaurante() {
            this.idResta = this.$route.params.idReserva
            console.log(this.idResta)

            await this.axios.get(`/reserva/${this.idResta}`)
                .then((response) => {
                    console.log(response.data)
                    // this.platos = response.data.Restaurante_.plato;

                    this.reservaN = response.data.Reserva_._id
                    this.form.cliente = response.data.Reserva_.usuario[0].nombre
                    this.form.hotel = response.data.Reserva_.hotel[0].nombre
                    this.form.ingreso = (response.data.Reserva_.fechaIngreso).toString().substr(0, 10)
                    this.form.salida = (response.data.Reserva_.fechaSalida).toString().substr(0, 10)
                    this.form.habitaciones = response.data.Reserva_.nroHabitaciones
                    this.form.personas = response.data.Reserva_.cantPersonas

                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        addplato() {
            this.idResta = this.$route.params.idRestaurante
            this.$router.push(`/admin/restaurante/addPlato/${this.idResta}`)
        },
        async actualizar() {
            this.id = this.$route.params.idRestaurante
            console.log(this.id)
            this.axios.put(`/restaurante/${this.id}`, this.form)
                .then((response) => {
                    console.log(response.data)
                    alert('actualizado')
                    this.$router.push(`/admin/restaurante`)
                })
                .catch((e) => {
                    console.log('error' + e);
                })

        }



    }

}
</script>
<style>
div#row-form {

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

div#colum-form {
    display: flex;
    flex-direction: column;
    width: 45%;
}

div#table {
    margin: 0 auto;
    width: 90%;
    align-self: center;
    align-items: center;
}

table {
    border-collapse: collapse;
    margin: 25px 0;

    align-self: center;
    width: 100%;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    border-radius: 15px;
    overflow: hidden;
}

/* td, th {
    padding: 1rem;
    text-align: left;
} */



thead tr {
    background-color: #78E3FD;
    color: #292929;
    text-align: center;
    height: auto;
}

tbody tr {
    border-bottom: 1px solid #dddddd;
    height: auto
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

td#acciones {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin: auto;
}
</style>