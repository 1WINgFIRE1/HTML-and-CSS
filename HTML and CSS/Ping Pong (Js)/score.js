const p1Display=document.querySelector("#p1Score");
const p2Display=document.querySelector("#p2Score");

const p1btn=document.querySelector("#p1Button");
const p2btn=document.querySelector("#p2Button");
const reset=document.querySelector("#reset");

const winOptn=document.querySelector("#winOption");
let winScore=3;

winOptn.addEventListener("change",()=>{
    winScore=parseInt(winOptn.value);
    again();
})


let p1Score=0;
let p2Score=0;

let gameOver=false;

reset.addEventListener("click",()=>{
    again();
})

function again(){
    p1Display.innerText="0";
    p2Display.innerText="0";
    p1Score=0;
    p2Score=0;
    gameOver=false;
    p1Display.classList.remove("winner","loser");
    p2Display.classList.remove("winner","loser");
    p1btn.disabled=false;
    p2btn.disabled=false;


}

p1btn.addEventListener("click",()=>{
    if(!gameOver)
    {   
        p1Score+=1;
        p1Display.innerText=`${p1Score}`;
        if(p1Score >= winScore)
        {
            p1Display.classList.add("winner");
            p2Display.classList.add("loser")
            gameOver=true;
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        
    }

})

p2btn.addEventListener("click",()=>{
    if(!gameOver)
    {
        p2Score+=1;
        p2Display.innerText=`${p2Score}`;
        if(p2Score >= winScore)
        {
            p2Display.classList.add("winner");
            p1Display.classList.add("loser")
            gameOver=true;
            p1btn.disabled=true;
            p2btn.disabled=true;

        }
        
    }

})

