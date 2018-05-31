/*Timer function coding logic from Slack channels and
https://stackoverflow.com/questions/32141035/countdown-timer-using-moment-js-mmss-format
  Thanks to Yahya Elharony  for the walkthrough tutorial
  https://www.youtube.com/watch?v=G8J13lmApkQ
  for helping to draw ideas and logic that I used in this project.*/

//Create a list that holds all of your cards



let cardSymbols = [
  "fa fa-paper-plane-o",
  "fa fa-diamond", "fa fa-anchor",
  "fa fa-cube","fa fa-leaf",
  "fa fa-bicycle", "fa fa-bolt",
  "fa fa-bomb"
];
var minutess;
var secondss;
cardSymbols = cardSymbols.concat(cardSymbols);
var time;
var minutess=0;
var timerCount=false;
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let gameTime=document.querySelector(".time");
let tSeconds=0;
let ratingsContainer = document.querySelector(".stars");
let movesContainer = document.querySelector(".moves");
let noOfClicks = 0;
let noOfMoves = 0;
let openCardArray = [];
let matchedCards = 0;
let cardClass = document.querySelectorAll(".card");
let cardDeck = document.querySelector(".deck");

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffleCards() {
      var currentIndex = cardSymbols.length,
      temporaryValue, randomIndex;
      while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cardSymbols[currentIndex];
      cardSymbols[currentIndex] = cardSymbols[randomIndex];
      cardSymbols[randomIndex] = temporaryValue;
  }
    return cardSymbols;
}
// Function to make cards using the array returned from shuffleCards()
function makeCard() {
  shuffleCards();
  for (let i = 0; i < cardSymbols.length; i++)
  {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${cardSymbols[i]}"></i>`;
    cardDeck.appendChild(card);
    clickCard(card);
  }
}
//To check if the user has matched all the cards Successfully
function isGameOver() {
  if (matchedCards === cardSymbols.length)
   {
     clearInterval(time);
     displayResults();
   }
}


function displayResults()
{
alert("Congratulations!! you won!!Your scores,time,and ratings are in the screen.Do you want to play again?Click restart button to continue");
minutess=minutes.innerHTML;
minutes.innerHTML= minutess +"and";
seconds.innerHTML=tSecondss;
}


function countTime(){
timerCount=true;
time=setInterval(function(){
tSeconds++;
seconds.innerHTML=formatTime(tSeconds%60)+"secs";
minutes.innerHTML=formatTime(parseInt(tSeconds/60))+"mins:";
},1000);
}
/*formatting time code logic from
https://stackoverflow.com/questions/32141035/countdown-timer-using-moment-js-mmss-format
*/

function formatTime(secs)
{
  var timeString=secs+" ";
  if(timeString<10)
  {
    return "0" + timeString;
  }
  else {
    return timeString;
       }
}

function resetTime()
{
  clearInterval(time);
  tSeconds=0;
  minutess=0;
  seconds.innerHTML=tSeconds;
  minutes.innerHTML=minutess;
  timerCount=false;
}
/* function to click cards*/
function clickCard(card)
{
    card.addEventListener("click", function(e) {
    if (noOfClicks === 0)
    {
      card.classList.add("open", "show", "disable");
      openCardArray[0] = this;
      noOfClicks++;
    }
    else if (noOfClicks === 1)
    {
      card.classList.add("open", "show", "disable");
      openCardArray[1] = this;
      noOfClicks++;
      compareCards(openCardArray[0], openCardArray[1]);
    }
  });
}
/* function to compare cards for a match*/
function compareCards(openCardArray1, openCardArray2) {
  if (openCardArray1.innerHTML === openCardArray2.innerHTML)
  {
    openCardArray1.classList.add("match");
    openCardArray2.classList.add("match");
    matchedCards = matchedCards + 2;
    openCardArray = [];
    noOfClicks--;
    noOfClicks--;
    isGameOver();
  }
  else
  {
    setTimeout(function() {
    openCardArray1.classList.remove("open", "show", "disable");
    openCardArray2.classList.remove("open", "show", "disable");
   }, 500);
    openCardArray = [];
    noOfClicks--;
    noOfClicks--;
    noOfMoves = noOfMoves + 1;
    movesContainer.innerHTML = "wrong Moves:  "+noOfMoves;
    /* This part of the code increases or decreases the rating based on
    the number of wrong moves*/

    switch (noOfMoves) {
      case 4:
        ratingsContainer.innerHTML ="Star Ratings: "+
        `<li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>`;
        break;
      case 6:
        ratingsContainer.innerHTML ="Star Ratings: "+
        `<li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>`
        break;
      case 8:
        ratingsContainer.innerHTML =
          "Star Ratings:  " + `<li><i class="fa fa-star"></i></li>`;
        break;
    }
  }
}

  var restartButton = document.querySelector(".restart");

/*This is the restart function code*/

    restartButton.addEventListener("click", function() {
    cardDeck.innerHTML = " ";
    makeCard();
    matchedCards = 0;
    resetTime();
    countTime();
    noOfMoves=0;
    noOfClicks=0;
    timerCount=false;
    openCardArray=[];
    movesContainer.innerHTML ="wrong Moves "+noOfMoves;
    ratingsContainer.innerHTML ="Star Ratings: "+
    `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
  });

while(timerCount===false)
{
    countTime();
}
makeCard();
