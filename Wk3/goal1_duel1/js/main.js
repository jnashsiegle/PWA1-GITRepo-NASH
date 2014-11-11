/**
 * Created by Jana Nash-Siegle on 11/4/14.
 * updated 11/10/2014
 * Duel #1
 * PWA-1
 *
 */



//self executing function
window.onload = (function() {

    console.log("FIGHT!!");                                             //shows function is working


    /*Redefining players and making arrays
    var playerMac = ["Mac",20,100];                                    //first player name
    var playerWindows = ["Windows",20,100];                                       //second player name*/

    var playerMac_txt = document.querySelector("#mac").querySelector("p");
    var playerWindows_txt = document.querySelector("#windows").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");
    //console.log(playerMac_txt, playerWindows_txt, round_txt);

    //Setting up click event
    button.addEventListener("click", fight, false);

    //Object Array
    var fighters = [
        {
            name:"Mac",
            damage:20,
            health:100
        },
        {
            name:"Windows",
            damage:20,
            health:100
        }];


    var round = 0;

    //Initialize DOM's innerHTML text for top of page

    round_txt.innerHTML = "Click Fight Button to Start!";
    playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;
console.log(playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health, playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health, "both should be at 100");

    function fight() {                                                  //need a function calculating the fight
        //console.log("In the fight function");                           //prints to console that the fight FN is
        //printing off
        //alert(fighters[0].name + ":" + fighters[0].health + " *START* " + fighters[1].name + ":" + fighters[1].health);


        playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
        playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;
        console.log("fight starts, what is the health?" + fighters[0].name + ":  " + fighters[0].health, fighters[1].name + ":  " + fighters[1].health);

        /*//reconfigured alert reflecting array
         //alert for player to start of game
         //for (var i = 0; i < 10; i++) {                                      //formula for random number damage to hit player
         //Random formula is - Math.floor(random() * (max - min) + min);

         var minDamage1 = fighters[0] * .5;                    //minimal dmg to player one / reconfigured for array
         var minDamage2 = fighters[1] * .5;                //minimal dmg to player two / reconfigured for array*/


        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);  //dmg formula to players
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);  //each players health


        //reconfigured to reflect array
        //console.log(f1);
        //console.log(f2);

        //inflict Damage
        fighters[0].health -= f1;                //deducts the damage from players health / reconfigured to reflect array
        fighters[1].health -= f2;        //deducts the damage from the players health / reconfigured to reflect array

        console.log(fighters[0].name + ":" + fighters[0].health + " " + fighters[1].name + ":" + fighters[1].health);
        //this will print out to console the player's
        //name and health with each round / //reconfigured to reflect array

        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "Round #" + round + " Results:";
        round++;
        if (result === "no winner") {
            playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

        } else {
            playerMac_txt.innerHTML = result;
            playerWindows_txt.innerHTML = "";

            //turn off the button
            button.removeEventListener("click", fight, false);

            document.querySelector(".buttonblue").innerHTML = "DONE!!!";
        }
    }



        function winnerCheck() {
            console.log("are we getting to the winner check?");
            var result = "no winner";
            if (fighters[0].health < 0 && fighters[1].health < 0) {
                result = "You Both Die - GAME OVER";
            } else if (fighters[0].health < 1) {
                result = fighters[1].name + "WINS!!";
            } else if (fighters[1].health < 1) {
                result = fighters[0].name + "WINS!!";
            }
            return result;

        }
    /**This is where the program starts to run**/                   //Start of program
    console.log("Program Starts");                                   //prints showing program starts

    fight();                                                            //calling or invoking the fight FN


})();                                                                  //end of program


