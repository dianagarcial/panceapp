<template>
    <div id="nav-bar">
        <div id="nav-bar-logo">
            <img id="logo" src="https://i.ibb.co/XZLN2f9/LogoF.png" alt="LogoF" />
        </div>

        <div id="nav-bar-link">
        <a href="#/planes">Planes</a>
        <a href="#/restaurantes">Restaurantes</a>
        <a href="#/hoteles">Hotel</a>
        <a href="#/home">Contacto</a>
        <img id="carrito" src="https://i.ibb.co/n8N0mzz/eva-shopping-cart-fill.png" alt="carrito" />
        <img id="perfil" src="https://i.ibb.co/yV7NwRW/Account-circle.png" alt="perfil" />
        </div>
     </div>
 
 </template>
 
 
 <style>
    div#nav-bar{
        background: #78E3FD;
        overflow: hidden;
        left:0;
        position: absolute; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
        height: 15%;
    }

    img#logo{
        width: 120px;
        margin-left: 5%;
    }
    div#nav-bar{
        margin: auto;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        width: 100%;
    }
    div#nav-bar-logo{
        width: 50%;
    }
    div#nav-bar-link{
        width: 50%;
        margin-right: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
    }

    a{
        font-family: 'Varela';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;

        /* Negro/Negro1 */

        color: #292929;
        text-decoration: none;

    }



 </style>