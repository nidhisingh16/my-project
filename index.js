const n1 = Math.ceil(Math.random()*10)
const n2 = Math.ceil(Math.random()*10)

const quesE1 = document.getElementById("ques");
quesE1.innerText = 'What is ${n1} X ${n2}?'

const formE1 = document.getElementById("form");

const ans = n1*n2
let score =0
formE1.addEventListener("submit", ()=>{const uans = +inputE1.value 
    if(uans == ans){
        score++;
        console.log(score);
    }
    else{
        score--;
        console.log(score);
    }
});

function updatesc(){
    
}