/**
 * Created by Jana Nash-Siegle on 11/4/14.
 * Duel #1
 * PWA-1
 * *Follow Along Video
 */

//self executing function
(function() {

    console.log("FIGHT!!");                                             //shows function is working


    //Redefining players and making arrays

    var playerMac = ["Mac",20,100];                                    //first player name
    var playerWindows = ["Windows",20,100];                                       //second player name

    // Original player damage

    //var playerOneDmg = 20;                                              //first player damage
   // var playerTwoDmg = 20;                                              //second player damage

    // Original player health

    //var playerOneHealth = 100;                                          //first player health max
   // var playerTwoHealth = 100;                                          //second player health max

    //Game Round to track progress of game

    var round = 0;                                                      //variable for game rounds

    function fight() {                                                  //need a function calculating the fight
        console.log("In the fight function");                           //prints to console that the fight FN is
                                                                        //printing off
        alert(playerMac[0] + ":" + playerMac[2] + " *START* " + playerWindows[0] + ":" + playerWindows[2]);
                                                                    //reconfigured alert reflecting array
                                                                        //alert for player to start of game
    for (var i = 0; i < 10; i++) {                                      //formula for random number damage to hit player
            //Random formula is - Math.floor(random() * (max - min) + min);

            var minDamage1 = playerMac[1] * .5;                    //minimal dmg to player one / reconfigured for array
            var minDamage2 = playerWindows[1] * .5;                //minimal dmg to player two / reconfigured for array
            var f1 = Math.floor(Math.random() * (playerMac[1] - minDamage1) + minDamage1);  //dmg formula to players
            var f2 = Math.floor(Math.random() * (playerWindows[1] - minDamage2) + minDamage2);  //each players health
                                                                    //reconfigured to reflect array
            //console.log(f1);
            //console.log(f2);

            //inflict Damage
            playerMac[2] -= f1;                //deducts the damage from players health / reconfigured to reflect array
            playerWindows[2] -= f2;        //deducts the damage from the players health / reconfigured to reflect array

            // console.log(playerOneHealth);
            // console.log(playerTwoHealth);

            console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
                                                                        //this will print out to console the player's
                                                                        //name and health with each round
            var results = winnerCheck();                                //checking to see if we have a winner yet
            console.log(results);                                       //printing to console results of winner check
                                                                        //calling winnerCheck FN
            if (results === "no winner"){                               //if no winner alerting user to number of round
                                                                        //players health/name
                round++;                                                //adds 1 to each sequential round
                alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
                                                                        //formats the alert for the user
            }else{                                                      //offers a conditional
                alert(results);                                         //alert with the winning results
                break;                                                  //ends the game.
            }

        }

    }

    function winnerCheck() {                                            //body of the winner check function
        console.log("in winnerCheck function");                         //this prints to console showing fn is inputting


        var result = "no winner";                                       //if no one has gone beneath 0, no winner, this
                                                                        //is the result
        if (playerOneHealth < 1 && playerTwoHealth < 1) {               //calculates if both players go below 0, they
            result = "You Both Die";                                    //both die, no winner of game
    } else if (playerOneHealth < 1) {                                   //calculates how player 2 would win when 1 goes
            result = playerTwoName + " " + "WINS!!!";                   //beneath 0, else player 1 would win when
        } else if (playerTwoHealth < 1) {                               //player 2 goes beneath 0
            result = playerOneName + " " +  "WINS!!!";                   //resulting in player 1 win
        }

        return result;                                                  //this is where the result var is returned to
    }                                                                   //winner check




        /**This is where the program starts to run**/                   //Start of program
        console.log("Program Starts");                                   //prints showing program starts

    fight();                                                            //calling or invoking the fight FN







})();                                                                       //end of program
