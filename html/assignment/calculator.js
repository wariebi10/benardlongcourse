function calculate(){
    var box1 = document.getElementById("box1").value
    var box2 = document.getElementById("box2").value
    var operator= document.getElementById("operator").value
    if (operator =="+"){
        var sum = Number(box1) + Number(box2)
        document.getElementById("answer").innerHTML=sum
    }
    else if (operator =="-"){
        var sum = Number(box1) - Number(box2)
        document.getElementById("answer").innerHTML=sum
    }
    else if (operator =="*"){
        var sum = Number(box1) * Number(box2)
        document.getElementById("answer").innerHTML=sum
    }
    else if (operator =="/"){
        var sum = Number(box1) / Number(box2)
        document.getElementById("answer").innerHTML=sum
    }
} 
