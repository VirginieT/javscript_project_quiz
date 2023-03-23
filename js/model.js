class Reponse {
  constructor(s_intitule, b_valide) {
    this.s_intitule = s_intitule;
    this.b_valide = b_valide;
  }

  contenuHTML(){
    return "<p>Intitule de la reponse</p>"
  }
}

class Question {
  constructor(s_intitule, tab_tableReponse) {
    this.s_intitule = s_intitule;
    this.tab_tableReponse = tab_tableReponse;
  }

  addReponse(reponse){
    this.tab_tableReponse.append(reponse);
  }

  contenuHTML(){
    var ret = "";
    for(var i=0;i<this.tab_tableReponse.length;i++){
      ret = ret + this.tab_tableReponse[i].contenuHTML() + "<br>"
    }
    return "<p>Intitule de la question</p>"+ret;
  }
}

class QuestionCheck extends Question {
  constructor(s_intitule, tab_tableReponse) {
    super(s_intitule, tab_tableReponse);
  }
}

class QuestionRadio extends Question {
  constructor(s_intitule, tab_tableReponse) {
    super(s_intitule, tab_tableReponse);
  }

  contenuHTML(){
    var ret = "";
    for(var i=0;i<this.tab_tableReponse.length;i++){
      ret = ret +"<input type='radio'>" + this.tab_tableReponse[i].contenuHTML() + "</input><br>"
    }
    return "<p>Intitule de la question</p>"+ret;
  }
}

class Questionnaire {
  constructor(tab_questions) {
    this.tab_questions = tab_questions;
  }

  addQuestion(question){
    this.tab_questions.append(question);
  }

  contenuHTML(){
    var ret = "";
    for(var i=0;i<this.tab_questions.length;i++){
      ret = ret + this.tab_questions[i].contenuHTML() + "<br>"
    }
    return "<p>Questionnaire : </p>"+ret;
  }
}


//to test

var tabRep = [new Reponse("1",true), new Reponse("2",false)];
var questionCheck = new QuestionCheck("Quel est le nom de mon petit frère", tabRep);

var tabRep = [new Reponse("1",true), new Reponse("2",false)];
var questionRadio = new QuestionRadio("La Radio est-elle utile ?", tabRep);

var questionnaire = new Questionnaire([questionCheck, questionRadio]);

console.log("questionnaire = "+JSON.stringify(questionnaire))
console.log("contenu = "+questionnaire.contenuHTML())
