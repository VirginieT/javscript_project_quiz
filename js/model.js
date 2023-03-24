class Reponse {
  constructor(s_intitule, b_valide) {
    this.s_intitule = s_intitule;
    this.b_valide = b_valide;
  }

  contenuHTML(){
    return "<div class='options "+(this.b_valide ? "valid" : "invalid")+"'>"+this.s_intitule+"</div>"
  }

  clone(){
    return new Reponse(this.s_intitule, this.b_valide)
  }
}

class SaisieUtilisateur {
  constructor(o_question, o_reponseSelected) {
    this.o_question = o_question;
    this.o_reponseSelected = o_reponseSelected;
  }

  contenuHTML(){
    return "<p>Question : "+o_question.s_intitule+" réponse : "+o_reponseSelected.s_intitule+"</p>"
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
    return "<p>--"+this.s_intitule+"--</p><br>"+ret;
  }

  clone(){
    var tabReponses = []
    for(var i=0;i<this.tab_tableReponse.length;i++){
      tabReponses.push(this.tab_tableReponse[i].clone());
    }
    return new Question(this.s_intitule,tabReponses)
  }
}

class QuestionCheck extends Question {
  constructor(s_intitule, tab_tableReponse) {
    super(s_intitule, tab_tableReponse);
  }

  contenuHTML(){
    var ret = "";
    for(var i=0;i<this.tab_tableReponse.length;i++){
      ret = ret +"<input type='checkbox'>" + this.tab_tableReponse[i].contenuHTML() + "</input><br>"
    }
    return "<p>--"+this.s_intitule+"--</p><br>"+ret;
  }

  clone(){
    var tabReponses = []
    for(var i=0;i<this.tab_tableReponse.length;i++){
      tabReponses.push(this.tab_tableReponse[i].clone());
    }
    return new QuestionCheck(this.s_intitule,tabReponses)
  }
}

class QuestionRadio extends Question {
  constructor(s_intitule, tab_tableReponse) {
    super(s_intitule, tab_tableReponse);
  }

  contenuHTML(){
    var ret = "";
    for(var i=0;i<this.tab_tableReponse.length;i++){
      ret = ret +"<input type='radio' name='radioGroup'>" + this.tab_tableReponse[i].contenuHTML() + "</input><br>"
    }
    return "<p>--"+this.s_intitule+"--</p><br>"+ret;
  }

  clone(){
    var tabReponses = []
    for(var i=0;i<this.tab_tableReponse.length;i++){
      tabReponses.push(this.tab_tableReponse[i].clone());
    }
    return new QuestionRadio(this.s_intitule,tabReponses)
  }
}

class Questionnaire {
  constructor(questionR, nbQuestion) {
    this.tab_questions = [];
    this.tab_saisiesUtilisateur = []
    this.indexQuestion = 0;
    this.nbQuestion = nbQuestion;

    var tab2 = [];
    for(var i=0;i<questionR.length;i++){
      tab2.push(questionR[i].clone());
    }
    console.log("--tab2--"+JSON.stringify(tab2))

    for(var i=0;i<this.nbQuestion;i++){
      var randNum = Math.floor(Math.random()*tab2.length);
      this.tab_questions[this.tab_questions.length] = tab2[randNum];
      tab2.splice(randNum,1);
    }
  }

  addQuestion(question){
    this.tab_questions.append(question);
  }

  currentQuestion(){
    return this.tab_questions[this.indexQuestion];
  }

  currentReponse(index){
    return this.currentQuestion().tab_tableReponse[index];
  }

  isAnswered(){
    return this.indexQuestion == this.tab_saisiesUtilisateur.length - 1;
  }

  contenuHTML(){
    return this.currentQuestion().contenuHTML();
  }

  size(){
    return this.tab_questions.length;
  }
}


//to test

var tabRep = [new Reponse("1",true), new Reponse("2",false)];
var questionCheck = new QuestionCheck("Quel est le nom de mon petit frère", tabRep);

var tabRep = [new Reponse("1",true), new Reponse("2",false)];
var questionRadio = new QuestionRadio("La Radio est-elle utile ?", tabRep);

var questionnaire = new Questionnaire([questionCheck, questionRadio]);
