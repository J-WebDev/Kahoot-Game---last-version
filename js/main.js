
var userNameDiv = document.getElementById("user-name");
var userInput = document.getElementById("user-input");

var UserNameOnTop = document.getElementById("playerName");
var UserNameMob = document.getElementById("playerNameMob");

var playBtn = document.getElementById("playBtn");
var playAgainBtn = document.getElementById("playAgainBtn");

var gameOverDiv = document.getElementById("game-over");

var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");

var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");

var progress = document.getElementById('progress');
var progressForMob = document.getElementById("progressForMob");
var timeSpan = document.getElementById('timeSpan');

var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");

var scoreNum = document.getElementById('score');

var finalScore = document.getElementById("game-over-span");

var score = 0;
var forQuestion = -1;
var questionIndex = 1;

timeSpan.value = 30;
scoreNum.innerHTML = score;

userInput.focus();

class Questions {
    constructor(question, choiceA, choiceB, choiceC, choiceD, correctAnswer) {
        this.question = question;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.correctAnswer = correctAnswer;
    }
}

var quest1 = new Questions("2 + 2 = ?", "2", "4", "1", "0", "B");
var quest2 = new Questions("12 + 12 = ?", "12", "34", "24", "11", "C");
var quest3 = new Questions("35 - 6 = ?", "29", "54", "31", "14", "A");
var quest4 = new Questions("3 * 3 = ?", "9", "27", "3", "1", "A");
var quest5 = new Questions("5 + 23 = ?", "2", "225", "31", "28", "D");
var quest6 = new Questions("45 + 12 = ?", "57", "31", "43", "12", "A");
var quest7 = new Questions("4 + 2 = ?", "2", "6", "1", "0", "B");
var quest8 = new Questions("122 + 12 = ?", "12", "34", "134", "11", "C");
var quest9 = new Questions("35 - 5 = ?", "30", "54", "31", "14", "A");
var quest10 = new Questions("3 / 3 = ?", "1", "27", "3", "2", "A");

var questionsArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];

// Enter user name and display game content
function displayGameContent() {
    var userNameVal = userInput.value;

    if(typeof userNameVal === "string" && userNameVal.length >= 2) {
        userNameDiv.style.display = "none";
        UserNameOnTop.innerHTML = userNameVal;
        UserNameMob.innerHTML = userNameVal;
        getQuestion();
    }
    
}

setInterval(makeAlert, 1000);

// Countdown function
function makeAlert(){ 
    timeSpan.style.color = "#fff";

    if(timeSpan.value >= 0 && userNameDiv.style.display == "none") {
        timeSpan.innerHTML = timeSpan.value;
        timeSpan.value--;
    }
    
    if(timeSpan.value < 0) {
        gameOverDiv.style.display = "flex";
        finalScore.innerHTML = score;
        timeSpan.style.color = "red";
    }
};

// get Questions function
function getQuestion() {
    increaseQuestionIndex();
    forQuestion++;
    var q = questionsArray[forQuestion];
    quizQuestion.innerHTML = q.question;
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
}

// increase question index if question index < 10
function increaseQuestionIndex() {
    if(forQuestion < 10) {
        progress.innerHTML = questionIndex;
        progressForMob.innerHTML = questionIndex;
        questionIndex++;
    }
}

// Check user answer
function check(answer) {
    if (forQuestion < questionsArray.length -1) {
        if (answer == questionsArray[forQuestion].correctAnswer) {
            score++;
            scoreNum.innerHTML = score;
            getQuestion();
        }else{
            getQuestion();
        }
    }else {
        if (answer == questionsArray[forQuestion].correctAnswer) {
            score++;
            scoreNum.innerHTML = score;
            gameOverDiv.style.display = "flex";
            finalScore.innerHTML = score;
        }
        gameOverDiv.style.display = "flex";
        finalScore.innerHTML = score;
    }
    questionIndex++;
    progress.innerHTML = questionIndex;
}

playBtn.addEventListener("click", displayGameContent);
playAgainBtn.addEventListener("click", location.reload);



