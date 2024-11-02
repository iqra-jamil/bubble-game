
console.log(".......bubble game........");
let pbottom=document.querySelector("#pbottom");
let timeCounts=document.querySelector("#timeCounts");
let hitval=document.querySelector("#hitval");
let scoreVal=document.querySelector("#scoreVal");
let timeInt;
let timer=60;
let rNum=0;
let rHit=0;
let score=0;
let clickedNum=0;
//create  bubbles
function makeBubbles(){
    let clutter="";
    for(let i=0;i<=132;i++){
        rNum=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rNum}</div>`;
        }
        pbottom.innerHTML=clutter;
}
makeBubbles();
//runtimer
function runTimer(){
    //use stinterval and clear interval
 timeInt=setInterval(function(){
if(timer>0)
{
timer--;
timeCounts.textContent=timer;
}
else {
    clearInterval(timeInt);
    gameOver();
    return;
}

},1000)
}
runTimer();
//change hit number
let changeHit=()=>{
   rHit=Math.floor(Math.random()*10);
   hitval.textContent=rHit;

}
changeHit();
//increase score 
let scoreInc=()=>{
    score+=10;
  scoreVal.textContent=score;

}
//compare hit number and cliked(bubble number)

   function compare(dets){
    clickedNum=Number(dets.target.textContent);

    if(clickedNum===rHit){
        scoreInc();
        makeBubbles();
        changeHit();
    }
    else{
       gameOver();
        clearInterval(timeInt);
    }
   }


pbottom.addEventListener("click",(dets)=>{
    if(dets.target.classList.contains("bubble")){
        compare(dets);
    }
 
})
  
//game over

function gameOver(){
    pbottom.innerHTML = `<div class="endscreen"><h1 id="end">Game Over</h1><br><h3 id="endscore">Your total Score is ${score}</h3><button id="btn">Play Again</button></div>`;
    document.querySelector("#btn").addEventListener("click", makenewBubbles);

}
//new game
function makenewBubbles(){
    console.log("bxdhhxd");
    clearInterval(timeInt);
    score=0;
    scoreVal.textContent=score;
    timer=60;
    timeCounts.textContent=timer;
    makeBubbles();
    changeHit();
    runTimer();
    
}

