function checkadmission(){
    var jambscore = document.getElementById("jambscore").value;
    if (jambscore >=180){
        document.getElementById("message").innerHTML = "congratulation! you got addimission into the university"
     }else if(jambscore <180 && jambscore>0){
        document.getElementById("message").innerHTML = "We are sorry, You are NOT eligible for admission, you scored below 180"
    }else if(jambscore=""){
        document.getElementById("message").innerHTML = "Please enter your jamb score"
    }if(jambscore>400){
        document.getElementById("message").innerHTML = "you can't score above 400"
    }
}