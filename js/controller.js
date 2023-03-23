
var tabQuestion = [];
var indexQuestion = 0;

//after dom context was loaded
document.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector('.start');
  const title = document.querySelector('.title');
  const start_image = document.querySelector('.start_image');
  const welcome = document.querySelector('.welcome');
  const info = document.querySelector('.info');
  const start_btn = document.querySelector('.start_btn');
  const quiz = document.querySelector('.quiz');
  const progress = document.querySelector('.progress');
  const score = document.querySelector('.score');
  const question = document.querySelector('.question');
  const option = document.querySelector('.option');
  const result = document.querySelector('.result');
  const total_question = document.querySelector('.total_question');
  const next_btn = document.querySelector('.next_btn');
  const end = document.querySelector('.end');
  const end_image = document.querySelector('.end_image');
  const end_score = document.querySelector('.end_score');
  const restart = document.querySelector('.restart');
  const quit = document.querySelector('.quit');


  console.log("Hello World!");

  //add start quizz button event
  start_btn.addEventListener('click', function(){
    console.log("pushed");
    start.classList.add("hide");
    quiz.classList.remove("hide");
    end.classList.add("hide");

    indexQuestion = 0;
    tabQuestion = ["<p>Q1</p>","<p>Q2</p>","<p><b>Q3</b></p>","<p>Q4</p>"];//to upgrade with real question since samuel file

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
  question.innerHTML = tabQuestion[indexQuestion]; //to whange when samuel question are here
}
