//import questionR from "./questionnaire.js";
//let modQuestionR = await import('./questionnaire.js');
// import("./questionnaire.js").then((moduleT) => {
//     console.log(moduleT.questionR);
// });
// import {keyValue} from './questionnaire.js';
// console.log(keyValue);

// let module = await import('./questionnaire.js');
// console.log(module.keyValue)

let start = title = start_image = welcome = info = start_btn = quiz = progress = score = question = option = result = total_question = next_btn = end = end_image = end_score = restart = quit = null;


var tabQuestion = [];
var indexQuestion = 0;

//after dom context was loaded
document.addEventListener("DOMContentLoaded", () => {
  start = document.querySelector('.start');
  title = document.querySelector('.title');
  start_image = document.querySelector('.start_image');
  welcome = document.querySelector('.welcome');
  info = document.querySelector('.info');
  start_btn = document.querySelector('.start_btn');
  quiz = document.querySelector('.quiz');
  score = document.querySelector('.score');
  question = document.querySelector('.question');
  option = document.querySelector('.option');
  result = document.querySelector('.result');
  progress = document.querySelector('.progress');
  validate_btn = document.querySelector('.validate_btn');
  next_btn = document.querySelector('.next_btn');
  end = document.querySelector('.end');
  end_image = document.querySelector('.end_image');
  end_score = document.querySelector('.end_score');
  restart = document.querySelector('.restart');
  quit = document.querySelector('.quit');


  console.log("Hello World!");
  //console.log(JSON.stringify(modQuestionR.questionR));
  console.log(questionR);

  //add start quizz button event
  start_btn.addEventListener('click', function(){
    console.log("pushed");
    start.classList.add("hide");
    quiz.classList.remove("hide");
    end.classList.add("hide");

    indexQuestion = 0;
    // tabQuestion = ["<p>Q1</p>","<p>Q2</p>","<p><b>Q3</b></p>","<p>Q4</p>"];//to upgrade with real question since samuel file
    tabQuestion = [questionR[2], questionR[14], questionR[8],questionR[19]]

    showQuestion();
  });

  //add next button event
  next_btn.addEventListener('click', function(){
    console.log("pushed");
    indexQuestion ++;
    if(indexQuestion >= tabQuestion.length){
      start.classList.add("hide");
      quiz.classList.add("hide");
      end.classList.remove("hide");
    }else{
      showQuestion();
    }
  });

  //add start quizz button event
  restart.addEventListener('click', function(){
    console.log("pushed");
    start.classList.remove("hide");
    quiz.classList.add("hide");
    end.classList.add("hide");
  });
});

function showQuestion() {
  console.log("show question "+indexQuestion);
  question.innerHTML = tabQuestion[indexQuestion].contenuHTML(); //to whange when samuel question are here
}
