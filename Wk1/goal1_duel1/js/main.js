/**
 * Created by Jana Nash-Siegle on 10/31/14.
 * Duel #1
 * PWA-1
 */

//self executing function
(function() {

    console.log("FIGHT!!");


    //player names

    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    // player damage

    var playerOneDmg = 20;
    var playerTwoDmg = 20;

    // player health

    var playerOneHlth = 100;
    var playerTwoHlth = 100;

    //Game Round to track progress of game

    var round = 0;

    function fight() {
        console.log("In the fight function");

        alert(playerOneName + ":" + playerOneHlth + " *START* " + playerTwoName + ":" + playerTwoHlth);

        for (var i = 0; i < 10; i++) {
            //Random formula is - Math.floor(random() * (max - min) + min);

            var minDamage1 = playerOneDmg * .5;
            var minDamage2 = playerTwoDmg * .5;
            var f1 = Math.floor(Math.random() * (playerOneDmg - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwoDmg - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict Damage
            playerOneHlth -= f1;
            playerTwoHlth -= f2;

            // console.log(playerOneHlth);
            // console.log(playerTwoHlth);

            console.log(playerOneName + ":" + playerOneHlth + " " + playerTwoName + ":" + playerTwoHlth);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName + ":" + playerOneHlth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHlth);
            }else{
                alert(results);
                break;
            }

        }

    }

    function winnerCheck() {
        console.log("in winnerCheck function");


        var result = "no winner";

        if (playerOneHlth < 1 && playerTwoHlth < 1) {
            result = "You Both Die";
        } else if (playerOneHlth < 1) {
            result = playerTwoName + " " + "WINS!!!";
        } else if (playerTwoHlth < 1) {
            result = playerOneName + " " +  "WINS!!!";
        }

        return result;
    }




        /**This is where the program starts to run**/
        console.log("Program Starts");

    fight();







})();
