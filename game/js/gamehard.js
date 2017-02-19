var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var colors = ["RED", "GREEN", "SALMON", "YELLOW","ORANGE","PINK","PURPLE","BROWN","VIOLET","INDIGO"];
var currentColor = 0;
var index = [];
var timer = 1000;
var colorVault = [];
var iterations = 9;


//Global varible for randomChoices

var choice = ["",""];
var vault = [];
var answera = document.getElementById("answera");
var answerb = document.getElementById("answerb");
var answerc = document.getElementById("answerc");
var answerd = document.getElementById("answerd");

var frontBackSelector = 1;
 $('#card').flip({trigger:'manual'});
var randomCard = Math.round(Math.random()*4);

function switchColor() {    
            
            var randomColorIndex =  Math.round(Math.random() * 4);
        
            index.push(randomColorIndex);
            randomColorIndex = checkerFunction(randomColorIndex);
            var randomColor = colors[randomColorIndex];
    
            var flipx = {
              axis: 'x',
            };
            var flipy = {
              axis: 'y',
            };
            var flipz = {
              axis: '',
            };
            var fliprevx = {
              flip: 'x',
              reverse:true
            };
            var fliprevy= {
              axis: 'y',
              reverse:true    
            };
            var sequence = [flipx,flipy,flipz,fliprevx,fliprevy] ;
    
            
            
            $('#card').flip(sequence[randomCard]);
                
                if( frontBackSelector == 1){
                    
                    $('#front').css('background-color', randomColor)
                    frontBackSelector += 1;
                    
                } else if(frontBackSelector !== 1){
                    
                    $('#back').css('background-color', randomColor)
                    frontBackSelector -= 1;
                }
                
            
            colorVault.push(randomColor);
            
    }

switchColor(); //Running Switch Color 
randomChoices();


function checkerFunction(random){
            
            var value = 0;
            if(index.length == 2) { 
                
                if (index[0] == index[1])
                     {
                        value = Math.round(Math.random() * iterations);
                        index = [random];
                        index.push(value);
                        value = checkerFunction(value);
                        index = []; //clearing
                     }
                else {
                        value = random; //if it is not similar, return the correct value
                        index = [];
                     }
             }
            else { value = random }
            return value;
        }
 


//---------------------------------Random Answer Choice--------------------------------------//

    
    
function randomChoices(){
    
            answera.innerHTML = "";
            answerb.innerHTML = "";
            answerc.innerHTML = "";
            answerd.innerHTML = "";
    
            var random1 = Math.round(Math.random()*iterations);
            var random2 = Math.ceil(Math.random()*iterations);
            var random3 = Math.round(Math.random()*iterations);
            var random4 = Math.ceil(Math.random()*iterations);
    
            if (random1 == random2 | random1 == random3 | random1 == random4 | random2 == random4 | random2 == random3 | random3 == random4)
                {
                
                    randomChoices();
                }
            else
                {
                
                    if( colorVault[colorVault.length - 1] == colors[random1] | colorVault[colorVault.length - 1] == colors[random2] | colorVault[colorVault.length - 1] == colors[random4] | colorVault[colorVault.length - 1] == colors[random3])
                         {
                
                            answera.innerHTML = colors[random1];
                            answerb.innerHTML = colors[random2];
                            answerc.innerHTML = colors[random3];
                            answerd.innerHTML = colors[random4];    
            
                         } 
                    else {
                
                            randomChoices();
                
                         }
                }   
}

// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------- Alert ---------------------------------------------------
  var close= document.getElementById('myClose');

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("closeReturn")[0];

                var play = document.getElementById("playButton");

               /*Stop The Game */

                function stopTheGame(){
                    document.getElementById("answera").disabled = true;
                    document.getElementById("answerb").disabled = true;
                    document.getElementById("answerc").disabled = true;
                    document.getElementById("answerd").disabled = true;
                 
                    close.style.display = "block";
                    
                    var yourScore = document.getElementById("yourScore");
                    var highScore = document.getElementById("yourHighscore");
                
                    var tulis =  score ;
                    var tulis2 = highscorePan;

                    yourScore.innerHTML = tulis;
                    highScore.innerHTML = tulis2;
                }

            
// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------- Timer CountDown ------------------------------------------------------//
var TotalSeconds    = 5;
var timeElement = document.getElementById('time');
timeElement.innerHTML = TotalSeconds;
var anjay = 0;
var amboy = 0;

timeInterval();

function timeInterval(){
    anjay = setInterval(timerCountdown,1000);
    amboy = setTimeout(anjay,1000);
    
}


var documentWidth  = $(bar).width();

function timerCountdown(){
    
    var currentValue = parseInt(timeElement.innerHTML);
    if (currentValue == 0){
        
        var total = currentValue + 0;
        
    }
    else if (currentValue <= -1){
        
        var total = currentValue + 1;
    }
    
    else{
        
        var total = currentValue - 1;
    }
    
      if (parseInt(timeElement.innerHTML) <= 0){
          
        timeElement.innerHTML = total;
        saveHighscore();
        stopTheGame();  
    }
    
    else{
        
         timeElement.innerHTML = total;
    }
    
    var seconds = parseInt(timeElement.innerHTML);
    if (seconds > TotalSeconds){
        seconds = TotalSeconds;
    }
    var progresBarWidth = (seconds * documentWidth / TotalSeconds);

    $('#progress').animate({
            width: progresBarWidth + 'px'
    }, 1000);
    
}





//-------------------------------------------------- CORRECT OR NOT! -----------------------------------------------------//

var score = 0;
var answer = document.getElementById('score');
answer.innerHTML = score;

var storage = [];

function scoreCalculator(i){
    
    
    storage.push(colorVault[colorVault.length - 1]);
    
    if ( i == "a")
        {
            storage.push(answera.innerHTML);
        }
    else if (i == "b"){
            storage.push(answerb.innerHTML);
        }
    else if ( i == "c")
        {
            storage.push(answerc.innerHTML);
        }
    else if (i == "d"){
            storage.push(answerd.innerHTML);
        }
    
    if (storage[0] !== storage[1])
    {
        wrongAnswer();
    }
        else if (storage[0] == storage[1] )
    {
        correctAnswer();
    }
    storage = [];
 
    switchColor();
    $('#card').flip('toggle');
    randomChoices();
    
     if (parseInt(timeElement.innerHTML) <= 0){
        
            saveHighscore();
            stopTheGame();
    }
}


function correctAnswer(){
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue + 1;

    timeElement.innerHTML = total;
    
    score += 1;
    answer.innerHTML = score;
    
}

function wrongAnswer(){
        
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue - 2;
    
     if(currentValue == 0){total = 0;} else if(currentValue == 1){total = 0}; 
    
    timeElement.innerHTML = total;
    
}


/* Storing the HighScore */
var highscorePan = 0;

var highscoreObject= {
    current: 0,
    highest: 0,
};

var highscore = document.getElementById("highscore");
highscore.innerHTML = 0;


var STORAGE_KEY = "score";

function saveHighscore(){
    
    // Code to save person object to Local Storage
   
    var scoreStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    scoreStorage.current = score;
   
    highscoreCondition(scoreStorage);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scoreStorage));
    
    if (scoreStorage.current == scoreStorage.highest && scoreStorage.current !== 0){
        
        highscorePan = scoreStorage.highest + " <font color='red'>NEW!</font>";
    }
    else{
        
        highscorePan = scoreStorage.highest;
        
    }
    
    
}
// Code to restore polygon from Local Storage



function highscoreCondition(object){
    
     if (object.current > object.highest)
            {
                object.highest = object.current;
            }
        else{
            
                object.current = object.current;
        }    
}

    var scoreJSON = localStorage.getItem(STORAGE_KEY);
    if (scoreJSON)
    {
        var scoreStorage = JSON.parse(scoreJSON);
        
        highscoreCondition(scoreStorage);
        
        highscore.innerHTML = scoreStorage.highest;
    }
    else
    {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(highscoreObject));
    }

    


