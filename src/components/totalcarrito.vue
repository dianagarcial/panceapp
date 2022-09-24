<template>
    <div id="total">
        <h2>Total a pagar</h2>
        <h3>{{total}}</h3>
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
        div#total {
    background: #EEEEEE;
    box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 15px;
    width: 50%;
    display: flex;
    right: 0;
    flex-direction: row;
    margin-left: 50%;
    justify-content: space-around;
}
    </style>