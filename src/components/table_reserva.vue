<template >
    <tr id="table">

        <td>
            {{ nombre }}
        </td>
        <td>
            {{ ingreso }}
        </td>
        <td>
            {{ salida }}
        </td>
        <td>
            {{ total }}
        </td>
    </tr>
</template>
<script>


export default {
    name: "table_reserva",
    props: {
        nombre: String,
        ingreso: Date,
        salida: Date,
        total: Number

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
    text-align: center;

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