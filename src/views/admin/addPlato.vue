<template >
    <div id="contenido">
        
        <h1>Agregar Platos</h1>
        <h2>Aqui puedes agregar platos</h2>
        
            
                <h3>Nombre del Plato</h3>
                <input />
            


                <h3>Precio</h3>
                <input />

        <div id="izq">
            
            <button id="retro" @click="cancelar()">Cancelar</button>
            <button id="ir" @click="cancelar()">Agregar</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        cancelar() {
            this.$router.push('/admin/restaurante/edit')
        }
    }
}
</script>
<style >
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
</style>