<template >
    <tr id="table">

        <td>
            {{ nombre }}
        </td>
        <td>
            {{ fechaFor }}
        </td>
        <td id="ver">
            
            <button @click="ver(id)" id="acciones">
                <img src="https://i.ibb.co/wgVS11g/akar-icons-eye-open.png" alt="Ver" height="30" width="30" />
            </button>
            
        </td>
        <td id="acciones">
            <button  @click="finalizar(id)" id="acciones">
                <img src="https://i.ibb.co/z24R7Cp/akar-icons-check.png" alt="Hecho" height="30" width="30">
            </button>

        </td>
    </tr>
</template>
<script>


export default {
    name: "table_pedidos",
    props: {
        id: String,
        nombre: String,
        fecha: Date,
        estado:Number

    },
    data(){
        return{
            fechaFor:(this.fecha).substr(0, 10)
            
        }

    },
    
    methods: {
        async ver(id) {
            console.log(id)
            await this.$router.push(`ordenes/view/${id}`)

        },
        async finalizar(id) {

            this.axios.put('/orden/' + id)
                .then((response) => {
                    console.log(response.data)
                    window.location.reload()
                })
                .catch((e) => {
                    console.log('error' + e);
                })

        }

    }
}
</script>


<style >
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

td,
th {
    padding: 1rem;
}



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