
var tabQuestion = [];
var indexQuestion = 0;

//after dom context was loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");

  //add start quizz button event
  document.getElementById("start").addEventListener('click', function(){
    console.log("pushed");
    document.querySelector(".start").classList.add("hide");
    document.querySelector(".quiz").classList.remove("hide");
    document.querySelector(".end").classList.add("hide");

    indexQuestion = 0;
    tabQuestion = ["<p>Q1</p>","<p>Q2</p>","<p><b>Q3</b></p>","<p>Q4</p>"];//to upgrade with real question since samuel file

    showQuestion();
  });

  //add next button event
  document.getElementById("next").addEventListener('click', function(){
    console.log("pushed");
    indexQuestion ++;
    if(indexQuestion >= tabQuestion.length){
      document.querySelector(".start").classList.add("hide");
      document.querySelector(".quiz").classList.add("hide");
      document.querySelector(".end").classList.remove("hide");
    }else{
      showQuestion();
    }
  });

  //add start quizz button event
  document.getElementById("restart").addEventListener('click', function(){
    console.log("pushed");
    document.querySelector(".start").classList.remove("hide");
    document.querySelector(".quiz").classList.add("hide");
    document.querySelector(".end").classList.add("hide");
  });
});

function showQuestion() {
  console.log("show question "+indexQuestion);
  document.querySelector(".question").innerHTML = tabQuestion[indexQuestion]; //to whange when samuel question are here
}
