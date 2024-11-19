let quotes = [
{
    quote:"“We accept the love we think we deserve.”",
    author:"Stephen Chbosky"
},
{
    quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author:"Oscar Wilde"
},
{
    quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
    author:"Andre Gide"
},
{
    quote:"“Be yourself; everyone else is already taken.”",
    author:"Oscar Wilde"
},
{
    quote:"“So many books, so little time.”",
    author:"Frank Zappa"
}

];

function rand (){

    for(i=0;i<=4;i++){
        let arr=[]
        let y = Math.floor(Math.random() * quotes.length + 1)
        if (!arr.includes(y)){
            document.getElementById("demo").innerHTML= quotes[y].quote
            document.getElementById("demo2").innerHTML = quotes[y].author
            arr.push(y) 
        }else{
            return rand();
        }
    }      
}





    
    
        