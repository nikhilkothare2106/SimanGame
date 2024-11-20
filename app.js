let start = false;
let h2 = document.querySelector("h2");
let level = 0;
let gameSeq = [];
let userSeq = [];
document.addEventListener("keypress",function(){
    if(!start){
        start = true;
        levelup();
    }
})
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random()*3);
    console.log(`.button${random}`);
    let btn = document.querySelector(`.button${random+1}`);
    console.log(btn);
    gameSeq.push(`button${random+1}`)
    flash(btn);
}
let btns = document.querySelectorAll(".btn");

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! 
        Your score is ${level}. <br>
        Press any key to start.`
        reset();
    }
}
for(let btn of btns){
    btn.addEventListener("click",function(){
        flash(this);
        let button = this.getAttribute("id");
        userSeq.push(button);
        checkAns(userSeq.length-1);
    })
}
function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    start = false;
}