const btn = document.getElementById("btn")
const content = document.getElementById("content")
const author = document.getElementById("author")


async function getquotes(){
    try{
        const res =await axios.get("https://api.quotable.io/random")
        const data= res.data
        document.getElementById("content").innerHTML= data.content
        document.getElementById("author").innerHTML= data.author
    }catch(error){
     document.getElementById("error").innerHTML=error
    }
}