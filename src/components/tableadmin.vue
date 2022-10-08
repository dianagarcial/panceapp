<template >
    <tr id="table">
        <td>
            {{id}}
        </td>
        <td>
            {{nombre}}
        </td>
        <td>
            <div v-if="acciones === 'R'">
                <router-link :to="lin">
                    <img src="https://i.ibb.co/wgVS11g/akar-icons-eye-open.png" alt="Ver" height="30" width="30" />
                </router-link>

            </div>
            <div v-else-if="acciones === 'E'">
                <router-link :to="lin">
                    <img src="https://i.ibb.co/X3Tc1C8/ci-edit.png" alt="Editar" height="30" width="30" />
                </router-link>
            </div>
            <div v-else-if="acciones === 'D'">
                <router-link :to="lin">
                    <img src="https://i.ibb.co/0FRPzMQ/ant-design-delete-outlined.png" alt="Eliminar" height="30"
                        width="30">
                </router-link>
            </div>
        </td>
    </tr>
</template>
<script>


export default {
    name: "tableadmin",
    props: {
        id: String,
        nombre: String,
        acciones: String,
        link: String
    },
    data() {
        return {
            lin: this.link
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
    text-align: left;
    height: auto;
}

tbody tr {
    border-bottom: 1px solid #dddddd;
    height: auto
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
</style>