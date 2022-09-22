<template>
   
    <div id="suma-resta">
        
       <button  @click="resta" id="resta"><img id="resta" src="https://i.ibb.co/smCXzHq/akar-icons-minus.png" alt="resta"/></button>
       <h2 id="valor">{{valor}}</h2>
       <button @click="suma" id="suma"><img id="suma" scr="https://imgbb.com/"><img src="https://i.ibb.co/RcRxfnL/ant-design-plus-outlined.png" alt="suma"/></button>
       
     

    </div>
   
 
 </template>
 
 <script>
    export default{
       
        data(){
            return{
            valor:1}
        },
    
        methods:{
            resta(){
                if(this.valor >1){
                    this.valor --;
                }else{
                    this.valor===1;
                }
                
            },
            suma(){
                this.valor ++;
            }
        }
    
    
    }
 </script>
 <style>
    
    div#suma-resta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20%;
}
    button#suma{
        border:0;
        
    }
    button#resta{
        border:0;
        
    }
    h2#valor{
        font-family: 'Varela';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;


        align-items: center;

        /* Negro/Negro1 */

        color: #292929;
    }
   
    </style>