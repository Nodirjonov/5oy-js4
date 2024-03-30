let text =document.getElementById("example")

let a=Math.round(Math.random()*99+1);
text.textContent = a 

if(a>50){
    text.style.color="red"
}else if(a<50){
    text.style.color="blue"
}
