<template>
    
    <div id="servicio">
    <h1>Servicios</h1>
        <div id="serv-column">
            <img id="ser" src="https://i.ibb.co/MS9xTFz/Wifi.png" alt="Wifi" />
            <h2 id="texser">Wifi</h2>
        </div>
        <div id="serv-column">
            <img id="ser" src="https://i.ibb.co/P6FrFP6/Emoji-food-beverage.png" alt="Emoji-food-beverage"/>
            <h2 id="texser">Desayuno</h2>
        </div>
        <div id="serv-column">
            <img id="ser" src="https://i.ibb.co/mvCQJ9C/Directions-car.png" alt="Directions-car" />
            <h2 id="texser">Parqueadero</h2>
        </div>
        <div id="serv-column">
            <img id="ser" src="https://i.ibb.co/L6JRSWc/Pool.png" alt="Pool" />
            <h2 id="texser">Piscina</h2>
        </div>
        
</div>
  
</template>




    <style>

    div#servicio{
        /* Blanco/Blanco2 */
        display: flex;
        flex-direction: row;
        background: #EEEEEE;
        /* Sombra1 */

        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        padding: 2%;
        padding-left: 5%;
        padding-right: 5%;
        justify-content: space-around;
    }
    div#serv-column{
        display: flex;
        flex-direction: column;
        width: 10%;
        align-items: center;
    }
    
    
    img#ser{
        width: 60px;
        
    }
    
    h2#texser {
        font-size: 1.5em;
    }
    </style>
