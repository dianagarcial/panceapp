<template>
    <div id="reserva">
        <h1>Reserva ahora</h1>
        <h2>Fecha de ingreso</h2>
        <input type="date"/>
        <h2>Fecha de salida</h2>
        <input type="date"/>
        <h2>Cantidad de personas</h2>
        <input type="number"/>
        <h2>Habitaciones</h2>
        <input type="number"/>
        <div id="izq">
            <button id="ir">Calcular</button>
            <button id="retro">Reservar</button>
        </div>

    </div>
</template>
<style>
    div#reserva{
        /* AzulO */

border: 10px solid #34F6F2;
/* Sombra1 */

filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15));
border-radius: 15px;

padding: 10%;
    padding-top: 7%;

    }
</style>