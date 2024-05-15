let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let message = document.querySelector("#msg")
let newBtn = document.querySelector(".new-btn")
let msgContainer = document.querySelector(".msg-container")
let noWinner = document.querySelector(".nowin")
let tie = document.querySelector("#tie")

let turnZero = true;

let winPatterns = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8],
];

const resetbtn = () => {
    let turnZero = true;
    enableboxes()
    msgContainer.classList.add("hidden")
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
}

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if(turnZero === true){
           box.innerText = "O";
           turnZero = false;
        }else{
            box.innerText = "X"
            turnZero = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    message.innerText = `Congratulations, winner is ${winner}`
    msgContainer.classList.remove("hidden")
}

const checkWinner = () => {
    for (let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 !=""){
         if(pos1 === pos2 && pos2=== pos3){
            showWinner(pos1)
            }
        }
    }
};


newBtn.addEventListener("click", resetbtn)
reset.addEventListener("click", resetbtn)