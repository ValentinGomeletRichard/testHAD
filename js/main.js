'use strict';

document.addEventListener("DOMContentLoaded", function (){
    
    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/
    
    let fireButton = document.querySelector("#firing-button");
    let billBoard = document.querySelector("#billboard");
    let countdown = billBoard.querySelector("span");
    let countNumber = 10 ;
    let i = 0; 
    
    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/
    
    function rocketLaunch(){
        console.log("success");
    }
    
    function count(timestamp){
        console.log("timestamp at the beginning of the count function : " + timestamp)
        i++;
        if(i<10){
            console.log("number of count : " + i);
        }
        
        if(Date.now() - timestamp >= 1000){
            console.log("timestamp during the count function : "+ timestamp);
            console.log("datenow : " + Date.now());
            console.log("date now  -  time stamp = "+ Date.now()-timestamp); // Y NO WORK
            countNumber--;
            timestamp = Date.now();
            console.log("countdown goes down to "+ countNumber);
        }
        if(countNumber <= 0){
            rocketLaunch();
            return;
        }
        requestAnimationFrame(count);
    }
    
    function startCountdown(){
        let now = Date.now();
        console.log("countdown Start");
        console.log(now);
        count(now);
    }
    
    /************************************************************************************/
    /* ******************************** CODE PRINCIPAL **********************************/
    /************************************************************************************/
    
    fireButton.addEventListener("click", startCountdown);
    
});
