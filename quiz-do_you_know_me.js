var readlineSync = require('readline-sync');

var userName = readlineSync.question('Welcome to the quiz, Whats your name?? \n')

var score=0

var highscore ={name: "dev",score: "40" }

console.log("\nHELLO " + userName.toUpperCase() +" WELCOME TO THE DO YOU KNOW DEV NASRA")
console.log("YOU WILL GET +10 FOR CORRECT AND -5 FOR WRING ANSWER\n")

function play(question,answer){
  var userAnswer = readlineSync.question(question + "\n ANSWER: ")
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("RIGHT")
    score= score +10
  }
  else{
    console.log("WRONG")
    score = score -5
  }
  console.log("---------------------------")
  console.log("YOUR CURRENT SCORE IS " + score)
  console.log("---------------------------")
}

var questions=[
    {
        question: "1. WHICH CITY DO I LIVE??", 
        answer: "AHMEDABAD",
    }, 
    {
        question: "2. WHATS MY FAVOURITE SITCOM??", 
        answer: "FRIENDS",
    }, 
    {
        question: "3. WHICH COLLEGE DO I STUDY IN??", 
        answer: "MIT MANIPAL",
    }, 
    {
        question: "4. WHICH SCHOOL WAS I IN??", 
        answer: "DPS BOPAL",
    }, 
    {
        question: "5. WHICH INSTRUMENT DO I KNOW TO PLAY??", 
        answer: "GUITAR",
    }, 
    {
        question: "6. WHICH SEASON DO I LIKE", 
        answer: "WINTERS",
    }, 
    {
        question: "7. WHICH LANGUAGE I AM CURRENTLY LEARNING", 
        answer: "JAVASCRIPT",
    }, 
    {
        question: "8. WHO IS MY MENTOR", 
        answer: "TANAY PRATAP",
    }, 
]

 for(var i=0;i<questions.length;i++){
   play(questions[i].question,questions[i].answer)
 }

if(highscore.score<score){
  console.log("YOU HAVE BEATEN THE HIGH SCORE")
  console.log("****************************")
  console.log("YOUR HIGH SCORE IS "+score)
  console.log("****************************")
}
else{
  console.log("****************************")
  console.log("YOUR TOTAL SCORE IS "+ score)
  console.log("****************************")
}

