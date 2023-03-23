function Question(s_intitule, b_tableQuestions, i_nbQuestions){
  var s_intitule = "";
  var b_tableQuestions = [];
  var i_nbQuestions = 4;
}

Question.prototype.contenuHTML = function() {
  return "<p>Intitule de la question</p>"
};


function QuestionCheck(s_intitule, b_tableQuestions, i_nbQuestions){
  Question.call(this, s_intitule, b_tableQuestions, i_nbQuestions);
}
QuestionCheck.prototype = Object.create(Question.prototype);

var questCheck = new QuestionCheck("fdgsdgf",[true, false, true, true], 4);
console.log("quest ch"+questCheck);
