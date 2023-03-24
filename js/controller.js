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
  console.log(questionR.length);

  //add start quizz button event
  start_btn.addEventListener('click', function(){
    console.log("pushed");
    start.classList.add("hide");
    quiz.classList.remove("hide");
    end.classList.add("hide");

    questionnaire = new Questionnaire(questionR, 4);
    showNext();
  });

  // initialize score variable and score
  var scoreMax = questionnaire.nbQuestion
  var score = 0


  //add next button event
  next_btn.addEventListener('click', function(){
    console.log("button pushed, mode answered = "+questionnaire.isAnswered());

    if(questionnaire.isAnswered()){
      //affiche la question suivante
      questionnaire.indexQuestion ++;
      if(questionnaire.indexQuestion >= questionnaire.size()){
        //affiche la fin si c'est fini
        start.classList.add("hide");
        quiz.classList.add("hide");
        end.classList.remove("hide");
      }else{
        showNext()
      }
    }else{
      //mémorise la réponse et affiche la correction de la question

      //TODO change index reponse
      questionnaire.tab_saisiesUtilisateur.push(new SaisieUtilisateur(questionnaire.currentQuestion(), questionnaire.currentReponse(1)));
      question.innerHTML = questionnaire.contenuHTML();
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

function showNext(){
  //remove all valid and invalid class to hide result
  question.innerHTML = questionnaire.contenuHTML().replaceAll('invalid', '').replaceAll('valid', '')
}
