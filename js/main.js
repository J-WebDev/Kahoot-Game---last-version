
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

var questions = [{
    question: "2+2?",
    choiceA: "2",
    choiceB: "4",
    choiceC: "1",
    choiceD: "0",
    correctAnswer: "B"
}, {
    question: "12+12?",
    choiceA: "12",
    choiceB: "34",
    choiceC: "24",
    choiceD: "11",
    correctAnswer: "C"
}, {
    question: "35-6?",
    choiceA: "29",
    choiceB: "54",
    choiceC: "31",
    choiceD: "14",
    correctAnswer: "A"
}, {
    question: "3*3?",
    choiceA: "9",
    choiceB: "27",
    choiceC: "3",
    choiceD: "1",
    correctAnswer: "A"
}, {
    question: "5+23?",
    choiceA: "2",
    choiceB: "225",
    choiceC: "31",
    choiceD: "28",
    correctAnswer: "D"
}, {
    question: "45+12?",
    choiceA: "57",
    choiceB: "31",
    choiceC: "43",
    choiceD: "12",
    correctAnswer: "A"
},{
    question: "4+2?",
    choiceA: "2",
    choiceB: "6",
    choiceC: "1",
    choiceD: "0",
    correctAnswer: "B"
}, {
    question: "122+12?",
    choiceA: "12",
    choiceB: "34",
    choiceC: "134",
    choiceD: "11",
    correctAnswer: "C"
}, {
    question: "35-5?",
    choiceA: "30",
    choiceB: "54",
    choiceC: "31",
    choiceD: "14",
    correctAnswer: "A"
}, {
    question: "3/3?",
    choiceA: "1",
    choiceB: "27",
    choiceC: "3",
    choiceD: "2",
    correctAnswer: "A"
}];

// User Name
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
    var q = questions[forQuestion];
    quizQuestion.innerHTML = q.question;
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choiceResponse.style.display = "none";
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
    if (forQuestion < questions.length -1) {
        if (answer == questions[forQuestion].correctAnswer) {
            score++;
            scoreNum.innerHTML = score;
            getQuestion();
        }else{
            getQuestion();
        }
    }else {
        if (answer == questions[forQuestion].correctAnswer) {
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



