//when DOM is ready, start execution
$(document).ready(function() {
 
//function to generate an array with a given range    
  function getArrayWithRange(min, max) {
    var arr = [];
    for (var k = min; k <= max; k++) {
      arr.push(k);
    }
    return arr;
  }

// function to generate a Random number using math.random 
  function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }
// function to reset game stats 
  function updateRandomNumber() {
    score = 0;
    randomTotal = getRandomNumber(computerArray);


//display computer random total and user score
    $(".randomTotal").html(randomTotal);
    $("#score").html(score);

// set null value for data attribute in each balloon, so that we get the same value on clicking a particular balloon during a game
      $(this).attr("data", null);
  }
  

//function to update win and loss each time
  function updateWinLoss() {
    $("#win").html(win);
    $("#loss").html(loss);
  }
  
// variable declarations

  var computerArray = getArrayWithRange(19, 120); // function call to generate an array with given range - for computer 
  var userArray = getArrayWithRange(1, 20); // function call to generate an array with given range - for user
  var score = 0;
  var win = 0;
  var loss = 0;
  var randomTotal = 0;

  //call the functions to update the random number and update win and loss counters
  updateRandomNumber();
  updateWinLoss();
 //function for on click event  
  $(".row-Balloons").on("click", function(event) {

    //console.log($(event.target).attr("data"));

//if data exists in data attribute of balloons, after player has clicked on a value once, 
//convert the same string to integer value and update score
    if ($(event.target).attr("data")) {
      var tempScore = parseInt($(event.target).attr("data"));
      score = score + tempScore;
    } //else get a new random number and update the score with that number
    else {
      var temp = getRandomNumber(userArray);
      score = score + temp;
      $(event.target).attr("data", temp);
    }
//update score  
    $("#score").html(score);

// update win and loss counters
    if (score === randomTotal) {
      win++;
    } else if (score > randomTotal) {
      updateRandomNumber();
      loss++;
    }
    updateWinLoss();
  });
});
