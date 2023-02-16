function add(){
    var box1=document.getElementById("box1").value;
    var box2=document.getElementById("box2").value;
    var sum= box1 + box2
    sum=Number(box1) + Number(box2)
    document.getElementById("anwser").innerHTML=sum;
}