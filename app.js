let boxes = document.querySelectorAll(".box"); 
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true ; //playerX playerO

const winPatterns = [
    [0,1,2], 
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=> {
    turnO = true; 
    enableBoxes();
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations, ${winner} for being the winner!!`; 
    msgContainer.classList.remove("hide");
}

const disableBoxes =()=>{
    for (let box of boxes){
        box.disabled = true ;
    }

}

const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled = false ;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if (turnO){
            box.innerText = "O"; 
            turnO = false ;
        }
        else{
            box.innerHTML = "X"; 
            turnO = true ;
        }
        box.disabled = true;
        checkWinner();
        
    })
});


const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
                disableBoxes();
            }
        }

    
    }

}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);
