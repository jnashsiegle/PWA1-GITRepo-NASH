/**Jana Nash-Siegle
 * 11/5/2014**/


// self-executing function
(function() {

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
     - accept 1 parameter into the function that will be an array of unlimited numbers
     - find the average of all the numbers
     - return the average from the function
     - console.log the answer outside of the function

     2.  create a function named 'fullName'
     - accept 2 parameters into the function that are strings (firstname and lastname)
     - return the name after it has been concatenated
     - console.log the answer outside of the function

     3.  create a function named 'wordCount'
     - accept 1 parameter into the function that is a long string of text words
     - create a function that counts all the words and return the answer
     - console.log the answer outside of the function

     4.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function

     6.  create a function named 'findNum'
     - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
     - if the second parameter being passed is "false" or null then
     - create an array with all of the odd numbers from
     the array
     - else - create an array with all of the even numbers
     from the array
     - return the array
     - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function (arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;
    };

    console.log('avg number = ', avgNumbers([1, 2, 3, 4, 5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    var fullName = function (firstName, lastName) {
        return firstName.concat(lastName);
    }

    var fullName1 = function (firstName, lastName) {
        var name1;
        name1 = firstName;
        name1 = name1.concat(" ");
        name1 = name1.concat(lastName);
        return name1;
    };

    console.log(fullName1("James", "Bond"));

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

    var wordCount = function (total) {
        total = 0;
        words = ipsum.split(" ");
        console.log(words);
        for (var i = 0; i < words.length; i++) {
            if (words[i] != "");
            total += 1;
        }
        return total;
    };

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");
    var ipsum1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    var charCount = function (count) {
        count = 0;
        for (var i = 0; i < ipsum1.length; i++) {
            count = ipsum1.length;
        }
        return count;
    };


    console.log(charCount(ipsum1));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

   // var word = "JavaScript";

    var vowelsInWord = function (word) {
        count = 0;
        letters = word.toLowerCase();
        console.log(letters);
        for (var i = 0; i < letters.length; i++) {

            switch(letters[i]){

                case "a":  count += 1;
                    break;

                case "e":  count += 1;
                    break;

                case "i":   count += 1;
                    break;

                case "o":  count += 1;
                    break;

                case "u":  count += 1;
                    break;
            }

        }
        return count;

    };

    console.log(vowelsInWord('JavaScript'));


    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    var findNum = function(numbers,wantEven) {
        var even = [];
        var odd = [];

        for (var i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 === 0) {

                even.push(numbers[i]);

            } else {

                odd.push(numbers[i]);

            }

        }  // loop ends here

        if (wantEven === true) {

            return even;

        } else {

            return odd;
        }
        ;
    };

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], true));

})();


