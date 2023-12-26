document.getElementById("myTitle").style.color="red";
setInterval(()=>{
    document.getElementById("myTitle").style.color=document.getElementById("myTitle").style.color=="red"?"blue":"red";
},10);
const btnRock=document.querySelector("#btnRock");
const btnPaper=document.querySelector("#btnPaper");
const btnScissors=document.querySelector("#btnScissors");
const Player=document.querySelector("#lblPlayer");
const display=document.querySelector("#lblSusbence");
const Computer=document.querySelector("#lblComputer");
const Result=document.querySelector("#lblResult");
const btnTestRock=document.getElementById("btnRock");
const playerScore=document.querySelector("#pScore");
const computerScore=document.querySelector("#cScore");
let working=false;
//Variable made to store names from alert() to make a score board
// let PMove="";
// let CMove="";
//let secs;
let pWins=0;
let cWins=0;
// setTimeout(()=>{
//     display.textContent="Rock";
// setInterval(()=>{
//           if (secs==3){
//             display.textContent=="Paper";
//           }
//           if (secs==6){
//             display.textContent=="Scissors";
//           }          
//           secs+=1;  
// },3);
// },9);
//Disabling buttons will take place in the displayOrder() function
let Choices=["Rock","Paper","Scissors"];
function displayORder(){
//btnRock.display=null;
display.textContent="Rock";
setTimeout(()=>{
         display.textContent="Paper";
},1000);
setTimeout(()=>{
         display.textContent="Scissors";
},2000);

};
//error may come as using the ARRAY choices as a parameter in the wrong way maybe even for using arrays at all
function computerMove(plays){
    let index=Math.floor(Math.random()*3);
 //   alert(String(index));
    Computer.textContent=plays[index];
    //CMove=plays[index];
    };
    function checkWinner(Players,Computers){
        setTimeout(()=>{
            Computers=Computer.textContent;
            Players=Player.textContent;
            display.textContent="GGs";
        //    alert(Players+" "+Computers);
            // alert(String(index));//use of var at the initialisation of the index variable produces no results aswell
             switch(Players){
                case "Rock":
                    if (Computers=="Rock"){
                        Result.textContent="Its a draw";
                        //break; 
                    }
                    else if (Computers=="Paper"){
                        Result.textContent="Computer wins";
                        cWins+=1;
                        //break; 
                    } 
                    else if (Computers=="Scissors"){
                        Result.textContent="Player wins";
                        pWins+=1;
                        //break; 
                    }                                       
                   break;        
                

                case "Paper":
                    if (Computers=="Rock"){
                        Result.textContent="Player wins";
                        pWins+=1;
                    }
                    else if (Computers=="Paper"){
                        Result.textContent="Its a draw";
                    } 
                    else if (Computers=="Scissors"){
                        Result.textContent="Computer wins";
                        cWins+=1;
                    }                                       
                    break;        
                
                
                case "Scissors":
                    if (Computers=="Rock"){
                        Result.textContent="Computer wins";
                        cWins+=1;
                    }
                    else if (Computers=="Paper"){
                        Result.textContent="Player wins";
                        pWins+=1;
                    } 
                    else if (Computers=="Scissors"){
                        Result.textContent="Its a draw";
                    }                                       
                    break;        
                
          
                                  default:
                    Result.textContent="Wow an impossible phenomena just happened to you!!!!Keep the luck and go play lotto!";
             
             
             } 
            playerScore.textContent=String(pWins);
            computerScore.textContent=String(cWins);},5000);
                 
             };


//Buttons should be dimm after input except for the restart button which will make them lighter when reverting changes
//Because when buttons are disabled the user cannot press the button alot of times to initiate more setTimeout() which results in alot of things happening
//Label to keep the record of who won the most
function restartGame(){
    setTimeout(()=>{
    display.textContent="Start";
    Player.textContent="Player: ";
    Computer.textContent="Computer: ";
    Result.textContent="WInner is...";
    working=true;
    },8000)
}             
            //  display.textContent="GGs";
            // //  function moveDisplay(){
            // //          display.textContent="VS";

            // //  }
// btnRock.click=function(){
//     displayORder();
//     display.textContent="VS";
//     Player.textContent="Rock";
//     computerMove(Choices);
//     checkWinner(Player.textContent,Computer.textContent);    
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
// }
btnRock.addEventListener("click",()=>{
    if (working==true){
    working=false;
    displayORder();
    setTimeout(()=>{
    display.textContent="VS";
    Player.textContent="Rock";
    //PMove="Rock";
    computerMove(Choices);
    //checkWinner(PMove,CMove);
    },3000);
    checkWinner(Player.textContent,Computer.textContent);
    restartGame();
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
}});
btnPaper.addEventListener("click",()=>{
    if (working==true){
        working=false;
    displayORder(); 
    setTimeout(()=>{
        display.textContent="VS";
        Player.textContent="Paper";
        //PMove="Paper";
        computerMove(Choices);

        },3000);
    checkWinner(Player.textContent,Computer.textContent);
    restartGame();    
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
}});
btnScissors.addEventListener("click",()=>{
    if (working==true){
        working=false;
    displayORder(); 
    setTimeout(()=>{
        display.textContent="VS";
        Player.textContent="Scissors";
        //PMove="Scissors";
        computerMove(Choices);
        },3000);
    checkWinner(Player.textContent,Computer.textContent);
    restartGame();    
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
}});
// btnTestRock.click=function (){
//     displayORder();
//     display.textContent="VS";
//     Player.textContent="Rock";
//     computerMove(Choices);
//     checkWinner(Player.textContent,Computer.textContent);    
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
// }
// btnTestRock.addEventListener("click",()=>{
//     displayORder();
//     display.textContent="VS";
//     Player.textContent="Rock";
//     computerMove(Choices);
//     checkWinner(Player.textContent,Computer.textContent);    
 //   btnPaper.visibility="hidden";
   // btnScissors.visibility="hidden";
// });
//let Choices=["Rock","Paper","Scissors"];
//Hungergames as a game mode where you can only click a specific button "Choose a specific option" only once, in hopes you get lucky to be the PCs doom order