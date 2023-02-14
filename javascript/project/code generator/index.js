const btn = document.getElementById("btn")
const content = document.getElementById("content")
const author = document.getElementById("author")
const err = document.getElementById("sam")


function getquotes(){
    axios.get("https://api.quotable.io/random")
    .then(response=>{
        content.innerHTML=response.data.content
        author.innerHTML=response.data.author
        .catch(err=>console.log(err))
        .catch(err=>{sam.innerHTML=err})
    }
}