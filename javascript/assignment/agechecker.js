function agechecker(){
    var age = document.getElementById("age").value;
    if(age==1 && age<17){
        document.getElementById("message").innerHTML="you are still a child"
    } else if(age==18 && age<=30){
        document.getElementById("message").innerHTML="you are a teenager"
    } else if(age==30 && age<150){
        document.getElementById("message").innerHTML="you are an adult"
    }else if(age>150){
        document.getElementById("message").innerHTML="death"
    }else if(age=""){
        document.getElementById("message").innerHTML="please insert age"
    }else if(age==0 && age<0){
        document.getElementById("message").innerHTML="baby"
    }
}