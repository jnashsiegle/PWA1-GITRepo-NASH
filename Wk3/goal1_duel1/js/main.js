/**
 * Created by Jana Nash-Siegle on 11/4/14.
 * updated 11/11/2014
 * Duel #1
 * PWA-1
 *
 */



//self executing function
window.onload = (function() {                                           //function begins to run when window loads

    console.log("FIGHT!!");                                             //check to show function is working


    var playerMac_txt = document.querySelector("#mac").querySelector("p");  //var object utilizing elements from html
    var playerWindows_txt = document.querySelector("#windows").querySelector("p"); //var object utilizing elements from html
    var round_txt = document.querySelector("h5");                                  //var object utilizing elements from html
    var button = document.getElementById("fight_btn");                            ///var object utilizing elements from html
    //console.log(playerMac_txt, playerWindows_txt, round_txt);              check used in debugging

    //Setting up click event
    button.addEventListener("click", fight, false);

    //Object Array
    var fighters = [                                                        //var name for our fighters array of info
        {
            name:"Mac",                                                     //fighter info
            damage:20,                                                      //fighter info
            health:100                                                      //fighter info
        },                                                                  //end first fighter
        {
            name:"Windows",                                                 //fighter info
            damage:20,                                                      //fighter info
            health:100                                                      //fighter info
        }];                                                                 //end second fighter and end of array


    var round = 1;                                                          //var used for round tracking

    //Initialize DOM's innerHTML text for top of page

    round_txt.innerHTML = "Click Fight Button to Start!";                          //var prepared for html insertion
    playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;       //var prepared for html insertion
    playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;   //var prepared for html insertion
	 
	 
		 
	//below was used in debugging during week 3
    //console.log(playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health, playerMac_txt.innerHTML =
     //   fighters[0].name + ":  " + fighters[0].health, "both should be at 100");




    function fight() {                                                  //need a function calculating the fight

        playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;    //page fighter info
        playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health; //page fighter info
		
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);  //dmg formula to players
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);  //each players health

        //inflict Damage
        fighters[0].health -= f1;                //deducts the damage from players health / reconfigured to reflect array
        fighters[1].health -= f2;        //deducts the damage from the players health / reconfigured to reflect array

        var result = winnerCheck();     //puts the value of winnerCheck() into result

        round_txt.innerHTML = "Round #" + round + " Results:";      //updates round_txt
        round++;                                                    //increases the round count
        if (result === "no winner") {                               //if statement for  winner text placement
            playerMac_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health; //configuration of text
            playerWindows_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health; //configuration of text

        } else {                                                //end of if & else statement for result
            playerMac_txt.innerHTML = result;                   //first player result else possibility
            playerWindows_txt.innerHTML = "";                   //second player result else possibility

            //turn off the button
            button.removeEventListener("click", fight, false);

            document.querySelector(".buttonblue").innerHTML = "DONE!!!";    //displays on fight button when complete
        }
    }



        function winnerCheck() {                                    //function for checking for a winner
            //console.log("are we getting to the winner check?");
            var result = "no winner";                               //var result of no winner
            if (fighters[0].health < 0 && fighters[1].health < 0) {  //how to figure no winner
                result = "You Both Die - GAME OVER";                //display if no winner
            } else if (fighters[0].health < 1) {                    //else computation for winner
                result = fighters[1].name + " WINS!!";              //display fighter[1] winner
            } else if (fighters[1].health < 1) {                    //else computation for winner
                result = fighters[0].name + " WINS!!";              //display fighter[0] winner
            }                                                       //end else
            return result;                                          //returns result variable up to winnerCheck

        }
    /**This is where the program starts to run**/                   //Start of program
    console.log("Program Starts");                                   //prints showing program starts

   // fight();                   //calling or invoking the fight FN turned off to prevent auto running of program


})();                                                                  //end of program
console.log("I ran with no errors!!  woohoo!!");

