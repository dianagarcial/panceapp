<template >
    <div id="table">
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1111
                    </td>
                    <td>
                        hotel1
                    </td>
                    <td>
                        accion1
                        accion2
                    </td>
                </tr>
                <tr>
                    <td>
                        1111
                    </td>
                    <td>
                        hotel1
                    </td>
                    <td>
                        accion1
                        accion2
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'tableadmin'
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

td, th {
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