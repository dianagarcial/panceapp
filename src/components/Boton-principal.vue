<template>

    <div id="btn-principal">
        <button id="btn-principal" @click="entrar">
            <h1>{{nombre}}</h1>
        </button>
    </div>


</template>
<script>
export default {
    props: {
        nombre: String,
        link: String
    },
    methods: {
        entrar() {
            this.$router.push(this.link)
        }
    }

}

</script>
 
<style>
button#btn-principal {
    background: #EEEEEE;
    box-shadow: 4px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 15px;
    width: 90%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 0;
    cursor: pointer;
}

div#btn-principal {
    width: -webkit-fill-available;
}
</style>