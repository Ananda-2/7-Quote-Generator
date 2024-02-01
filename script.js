const newQuote  = document.querySelector(".newQuote") ;
const tweet  = document.querySelector(".Tweet") ;
// const tweet  = document.querySelector(".Tweet") ;

let author , quote ;

getAuthor() ;

async function getAuthor(){

    const responce  = await fetch("https://api.quotable.io/random") ;
    var data = await responce.json() ;
    // console.log(data);
    quote = data.content ;
    author = data.author ;

    document.getElementById("h3").innerHTML = quote ;
    document.getElementById("h4").innerHTML = author ;

}

function openTwitter(){
    window.open("https://twitter.com/intent/tweet?text=" + quote ,"Tweet Window" , "width=600,height=400") ;
}

newQuote.addEventListener("click",getAuthor) ;
tweet.addEventListener("click",openTwitter) ;