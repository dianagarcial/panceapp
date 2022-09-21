<template>
   
    <footer>
        <div id="footer-div">
            <div id="footer-izq">
                
        <img id="logo-footer" src="https://i.ibb.co/wWCg84f/Logo-F-2.png" alt="Logo"/>
                <h3 id="footer">Travel. By Diana & David.</h3>
                <h3 id="footer">Desarrollo Web © 2022.</h3>
            </div>
            <div id="footer-der">

            </div>
        </div>
    </footer>
   
 
 </template>
 
 
 <style>
    
    footer{
        background: #797979;
        overflow: hidden;
        left:0;
        position: relative;
  left: 0;
  bottom: 0;
        bottom: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
        height: 10em;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }

    img#logo-footer{
        width: 120px;
        
    }
    div#footer-div {
    display: flex;
    flex-direction: row;
    }
    div#footer-izq {
        /* margin: auto; */
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        margin-left: 5%;
        margin-top: 2%;
    }
    h3#footer{
        font-family: 'Varela';
        font-style: normal;
        font-weight: 400;
        font-size: 1em;
        margin-bottom: 0;
        display: flex;
        align-items: center;

        /* Blanco/Blanco3 */

        color: #FAFAFA;

    }



 </style>