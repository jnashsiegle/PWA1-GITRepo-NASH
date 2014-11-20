/**
 * Jana Nash-Siegle
 * Goal: Goal7
 * Final
 */
(function(){

window.Person = Person;    //Adding the person object to the global window for main.js


    var jobs = ["Fireman", "Grocer", "Programmer", "Musician"];   //creating jobs for the people
    var actions = ["Working Out", "Shopping", "Sleeping", "Eating", "Reading", "Working"];  //activities for the people

    function Person(name, row){                         //FN to create the person
        console.log("I created a person by the name of:  ", name);

        this.name = name;                   //enables HTML page positioning

        this.row = row;                     //enables HTML page positioning

        this.job = jobs[Math.floor(Math.random() * jobs.length)]; //Persons starting position

        this.action = actions[Math.floor(Math.random() * actions.length)];  //how the person will start


        var id = document.getElementById("r" + this.row + "c3");   //what are we going to begin displaying and where??
        id.innerHTML = this.action;

    }



    /* Person.prototype.update = function(){

        if(Math.floor[Math.random()] <.01){

            var i  = Math.floor[Math.random() * Person.actions.length];
            this.action = Person.actions[i];
            id.innerHTML = this.action;
        }
    }
*/











})();