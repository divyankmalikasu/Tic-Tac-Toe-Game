const username1 = localStorage.getItem("username1") || "Player 1";
const username2 = localStorage.getItem("username2") || "Player 2";

let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#newgamebtn");

let turnO = true; // playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            // playerO
            box.innerText = "O";
            turnO = false;
        } else {
            // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    // Assuming you have an element with id "msg" for displaying messages
    msg.innerText = `Congratulations, Winner is ${winner}`;
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val&&pos1Val==="O") {
                showWinner(username1);
                disableBoxes();
            }
            else if (pos1Val === pos2Val && pos2Val === pos3Val&&pos1Val==="X") {
                showWinner(username2);
                disableBoxes();
            }
            
           
            
        }
        

    }
};

// Assuming you have a newGameBtn element

newgamebtn.addEventListener("click", resetGame);


