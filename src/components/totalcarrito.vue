<template>
    <div id="total">
        <h1>Total a pagar</h1>
        <h2>{{total}}</h2>
    </div>
</template>
<script>
    
    export default {
    name:'Totalplan',
    props:{
        total: String
        

    }
}
    </script>
    <style>
        div#total{
            /* Blanco/Blanco2 */

            background: #EEEEEE;
            /* Sombra1 */

            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            width: 50%;
    
    display: flex;
    right: 0;
    flex-direction: row;

        }
    </style>