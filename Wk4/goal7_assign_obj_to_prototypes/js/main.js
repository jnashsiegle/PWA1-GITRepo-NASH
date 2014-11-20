/**
 * Jana Nash-Siegle
 * Class: PWA
 * Goal: Goal7
 * Final
 */

(function(){

    var numPeople = 3;                                  //how many people to be displayed
    var people= [];                                     //var to hold the new person to be cycled in
    var names = ["Lisa", "Kay", "John", "Tony", "Mike", "Frances", "Clyde"];  //Names for our people
    var interval;                                       // var to call the timing

    for (var i = 0; i < numPeople; i++) {               //FOR loop to cycle through names

        var personIndex = Math.floor[Math.random() + names.length];     //this is going to create our # to go no higher
                                                                        //than 7 *# of names*
        var person = new Person(names[personIndex], i + 1);    //setting up the new person object

        populateHTML(person.name, "r1", + (i + 1) + "c1");       //call to populate person's name and where on HTML
        populateHTML(person.job, "r1", + ( i + 1) + "c2");       //call to populate person's job and where on HTML

        people.push(person);
        names.splice(personIndex, 1);

        clearInterval(interval);                    //one at a time and clear it out on renew

        interval = setInterval(runUpdate, 1000/30);  //setting interval to 30; will continue to run til clear is called
                                                    //or we shut window ; ID value is for interval parameter for clear

        function populateHTML (field, data){

            var id = document.getElementById(data);
            id.innerHTML = data;

        }

        function runUpdate(){
            people.forEach(function(Person){
                //console.log(name)
                //element = the people in the array
                //.update = the prototype method in the person.js file
                Person.update();
            });
        }
    }




})();