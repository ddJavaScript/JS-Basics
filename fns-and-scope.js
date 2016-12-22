//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name) {
    if (name === 'Tyler') {
      return true;
    }
      return false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

  function getName() {
    var name = prompt("What is your name?");
    return name;
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function welcome() {
    var userName = getName();
    alert("Welcome, " + userName);
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between parameters and arguments?

  //Answer Here

  // Parameters and used as placeholders usually at the declaration of a function. They don't hold value and are mutable.
  // Arguments and actual values that are passed into a function in place of parameters (placeholders). They are passed into a function at a function invocation.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

  // false              var highScore = false;                The Boolean false
  // 0                  var highScore = 0;                    The number 0
  // ''                 var highScore = '';                   An empty string
  // NaN                var highScore = 10/'score';           Not a number
  // undefined          var highScore;                        A variable with no value


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here



//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
