let start = title = start_image = welcome = info = start_btn = quiz = progress = score = question = option = result = total_question = next_btn = end = end_image = end_score = restart = quit = null;

var questionnaire = null;

//after dom context was loaded
document.addEventListener("DOMContentLoaded", () => {
  start = document.querySelector('.start');
  title = document.querySelector('.title');
  start_image = document.querySelector('.start_image');
  welcome = document.querySelector('.welcome');
  info = document.querySelector('.info');
  start_btn = document.querySelector('.start_btn');
  quiz = document.querySelector('.quiz');
  progress = document.querySelector('.progress');
  score = document.querySelector('.score');
  question = document.querySelector('.question');
  option = document.querySelector('.option');
  result = document.querySelector('.result');
  total_question = document.querySelector('.total_question');
  next_btn = document.querySelector('.next_btn');
  end = document.querySelector('.end');
  end_image = document.querySelector('.end_image');
  end_score = document.querySelector('.end_score');
  restart = document.querySelector('.restart');
  quit = document.querySelector('.quit');


  console.log("Hello World!");
  console.log(questionR.length);

  //add start quizz button event
  start_btn.addEventListener('click', function(){
    console.log("pushed");
    start.classList.add("hide");
    quiz.classList.remove("hide");
    end.classList.add("hide");

    questionnaire = new Questionnaire(questionR, 4);
    question.innerHTML = questionnaire.contenuHTML()
  });

  //add next button event
  next_btn.addEventListener('click', function(){
    console.log("pushed");
    questionnaire.indexQuestion ++;
    if(questionnaire.indexQuestion >= questionnaire.size()){
      start.classList.add("hide");
      quiz.classList.add("hide");
      end.classList.remove("hide");
    }else{
      question.innerHTML = questionnaire.contenuHTML()
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
