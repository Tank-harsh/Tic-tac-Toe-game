let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_button");
let newgame = document.querySelector("#new-game");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelector("#massage");
let drow = document.querySelector(".matchdrow");
let dro_msg = document.querySelector("#massage_drow");

let turn0 = true; //playerX ,playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

//match drow condition
const match_drow = () => {
  dro_msg.innerText = "Match is draw !please restart the game";
  // drow.forEach(msgcont =>{                    //don't use foreach beacause this is for listof element
  //   msgcont.classList.remove("hide");
  // });
  drow.classList.remove("hide");
  disablebox();
};

//reset button
const resetgame = () => {
  turn0 = true;
  enableboxes();
  msgContainer.forEach((msgcont) => {
    msgcont.classList.add("hide");
    drow.classList.add("hide");
  });
};
//new button
const newgm = () => {
  turn0 = true;
  enableboxes();
  msgContainer.forEach((msgcont) => {
    msgcont.classList.add("hide");
    drow.classList.add("hide");
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

//disable condition
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation,winner is ${winner}`;
  msgContainer.forEach((msgcont) => {
    msgcont.classList.remove("hide");
  });
  // msgContainer.classList.remove("hide");
  disablebox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    //     console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    //  );
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // console.log("winner",pos1);
        showWinner(pos1);
        return;
      }
    }
  }
  let fill = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      fill = false;
      break;
    }
  }
  if (fill) {
    match_drow();
  }
};

newgame.addEventListener("click", newgm);
resetbtn.addEventListener("click", resetgame);
