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
  var scoreMax = ""
  var score = 0

  //add result button event
  validate_btn.addEventListener('click', function(){
    console.log("button pushed, mode answered = "+questionnaire.isAnswered());

    if(questionnaire.isAnswered()){
      //mémorise la réponse et affiche la correction de la question

      if(questionnaire.currentQuestion() instanceof QuestionRadio){
        var radios = document.getElementsByTagName('input');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
              questionnaire.tab_saisiesUtilisateur.push(new SaisieUtilisateur(questionnaire.currentQuestion(), questionnaire.currentReponse(i), i));
              if (questionnaire.currentReponse(i).b_valide === true) {
                score++
              }
            }
        }
      }else if(questionnaire.currentQuestion() instanceof QuestionCheck){
        var radios = document.getElementsByTagName('input');
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].type === 'checkbox' && radios[i].checked) {
            questionnaire.tab_saisiesUtilisateur.push(new SaisieUtilisateur(questionnaire.currentQuestion(), questionnaire.currentReponse(i), i));
          }
        }
        if (compareReponse(questionnaire.currentValidReponse(), questionnaire.reponsesUtilisateur())){
          console.log('if')
          score ++
        }
        //console.log(JSON.stringify(questionnaire.tab_saisiesUtilisateur))

      }else{
        questionnaire.tab_saisiesUtilisateur.push(new SaisieUtilisateur(questionnaire.currentQuestion(), questionnaire.currentReponse(1), i));
      }

      console.log(JSON.stringify(questionnaire.reponsesUtilisateur()))

      questionnaire.indexQuestionsRepondues++;
      question.innerHTML = questionnaire.contenuHTML();

      disableInput(questionnaire.currentReponseIdUtilisateur());

      validate_btn.classList.add("hide");
      next_btn.classList.remove("hide");
    }
    console.log("score = " + score)
  });



  //add next button event
  next_btn.addEventListener('click', function(){
    console.log("button pushed, mode answered = "+questionnaire.isAnswered());

    if(!questionnaire.isAnswered()){
      //affiche la question suivante
      questionnaire.indexQuestion ++;

      if(questionnaire.indexQuestion >= questionnaire.size()){
        //affiche la fin si c'est fini
        start.classList.add("hide");
        quiz.classList.add("hide");
        end.classList.remove("hide");
      }else{
        showNext();
      }
      validate_btn.classList.remove("hide");
      next_btn.classList.add("hide");
    }
  });

  //add start quizz button event
  restart.addEventListener('click', function(){
    console.log("pushed");
    start.classList.remove("hide");
    quiz.classList.add("hide");
    end.classList.add("hide");
  });

  //add start quizz button event
  quit.addEventListener('click', function(){
    window.close()
  });
});

function showNext(){
  //remove all valid and invalid class to hide result
  question.innerHTML = questionnaire.contenuHTML().replaceAll('invalid', '').replaceAll('valid', '')
  document.querySelector('.progress').innerHTML = questionnaire.indexQuestion+" / "+questionnaire.nbQuestion+" questions";

  //enable dir evt
  var divs = document.getElementsByClassName("options")
  for(var i=0;i<divs.length;i++){
    divs[i].addEventListener('click', eventDivClicked);
  }
}

function disableInput(reponsesId){
  var radios = document.getElementsByTagName('input');
  for (var i = 0; i < radios.length; i++) {
    radios[i].setAttribute('disabled', '');
  }
  for (var i = 0; i < reponsesId.length; i++) {
    radios[reponsesId[i]].setAttribute('checked', '');
  }
}

function eventDivClicked(evt){
  //TODO recup fils input et toogle le checked
  divInput = evt.target.getElementsByTagName('input');
  if(divInput.length >= 1){
    //input found
    divInput[0].toggleAttribute("checked");
  }else{
    //on text -> want brother
    divInput = evt.target;
    divInput.previousSibling.toggleAttribute("checked");
  }
}

function compareReponse(ent1, ent2){
  if (ent1.length != ent2.length){
    return false
  } 
  for (i=0; i < ent1.length; i++){
      if (ent1[i].s_intule != ent2[i].s_intule){
        return false
    } 
  }
  return true
}
