import Player from "./factory/Player";
import "./css/battleshipMap.css";
import areEqual from "./areEqual";

let player;
let computer;

const body = document.getElementById("body");
const playerBoard = document.createElement("div");
const computerBoard = document.createElement("div");
const boardContainers = document.createElement("div");

playerBoard.id = "player-board";
computerBoard.id = "computer-board";
boardContainers.id = "board-container";

function createBoard(person, personBoard) {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let boardDiv = document.createElement("div");
      boardDiv.className = `${person}-board-square`;
      boardDiv.setAttribute("data-y", i);
      boardDiv.setAttribute("data-x", j);
      personBoard.appendChild(boardDiv);
    }
  }
}

function addShips() {
  computer.randomShips();

  let playerBoardDivs = document.getElementsByClassName("player-board-square");
  let rotate = document.createElement("div");

  body.appendChild(rotate);
  rotate.id = "rotate";
  rotate.innerText = "Rotate";
  rotate.addEventListener("click", (e) => {
    player.game.changeRotation();
  })

  for (let i = 0; i < playerBoardDivs.length; i++) {
    playerBoardDivs[i].addEventListener("click", addPlayerShips);
  }
}

function addPlayerShips(e) {
  player.addShip(e);
  updateShipOnBoard();
  if(player.shipsFull()){
    let playerBoardDivs = document.getElementsByClassName("player-board-square");

    for (let i = 0; i < playerBoardDivs.length; i++) {
      playerBoardDivs[i].removeEventListener("click", addPlayerShips);
    }

    let start = document.createElement("div");
    start.innerText = "Start";
    body.appendChild(start);
    start.id = "start";

    start.addEventListener("click", () => {
        body.removeChild(start);
        body.removeChild(document.getElementById("rotate"))
        let computerBoardDivs = document.getElementsByClassName(
        "computer-board-square"
      );

      for (let i = 0; i < computerBoardDivs.length; i++) {
      computerBoardDivs[i].addEventListener("click", playerTurn);
      }
    })
  }
}
function updateShipOnBoard(){
  const placements = player.game.coordinatesOccupied;
  let playerBoardDivs = document.getElementsByClassName("player-board-square");

  for (let i = 0; i < placements.length; i++){
    for (let j = 0; j < playerBoardDivs.length; j++) {
      let shot = [
        parseInt(playerBoardDivs[j].getAttribute("data-x")),
        parseInt(playerBoardDivs[j].getAttribute("data-y")),
      ];
      if (areEqual(shot, placements[i])) {
        playerBoardDivs[j].style = "background-color: pink";
      }
    }
  }
}
function updateBoard(board, element) {
  let shot = [
    parseInt(element.getAttribute("data-x")),
    parseInt(element.getAttribute("data-y")),
  ];
  let playerShotsMissed = player.game.shotsMissed;
  let computerShotsMissed = computer.game.shotsMissed;

  if (board.id == "player-board") {
    for (let i = 0; i < playerShotsMissed.length; i++) {
      if (areEqual(shot, playerShotsMissed[i])) {
        element.style = "background-color: blue";
        return;
      }
    }
    element.style = "background-color: red";
  } else {
    for (let i = 0; i < computerShotsMissed.length; i++) {
      if (areEqual(shot, computerShotsMissed[i])) {
        element.style = "background-color: blue";
        return;
      }
    }
    element.style = "background-color: red";
  }
}
function computerTurn() {
  let element;
  let shot = computer.randomShot();

  let computerBoardDivs = document.getElementsByClassName(
    "computer-board-square"
  );
  let playerBoardDivs = document.getElementsByClassName("player-board-square");

  for (let i = 0; i < playerBoardDivs.length; i++) {
    if (
      playerBoardDivs[i].getAttribute("data-x") == shot[0] &&
      playerBoardDivs[i].getAttribute("data-y") == shot[1]
    ) {
      element = playerBoardDivs[i];
      break;
    }
  }

  computer.shoot(shot, player);
  updateBoard(playerBoard, element);

  if (player.game.areSunk() || computer.game.areSunk()) {
    endGame();
  } else {
    for (let i = 0; i < computerBoardDivs.length; i++) {
      for (let j = 0; j < player.shotsMade.length; j++){
        if(areEqual(player.shotsMade[j], [computerBoardDivs[i].getAttribute("data-x"),
        computerBoardDivs[i].getAttribute("data-y")])) {
          break;
        }
        else if(j == player.shotsMade.length - 1) {
          computerBoardDivs[i].addEventListener("click", playerTurn);
        }
      }
    }
  }
}
function playerTurn(e) {
  let element = e.target;
  let shot = [
    parseInt(element.getAttribute("data-x")),
    parseInt(element.getAttribute("data-y")),
  ];

  player.shoot(shot, computer);
  updateBoard(computerBoard, element);

  let computerBoardDivs = document.getElementsByClassName(
    "computer-board-square"
  );
  let playerBoardDivs = document.getElementsByClassName("player-board-square");

  for (let i = 0; i < computerBoardDivs.length; i++) {
    computerBoardDivs[i].removeEventListener("click", playerTurn);
  }

  if (player.game.areSunk() || computer.game.areSunk()) {
    endGame();
  } else {
    computerTurn();
  }
}

function playGame() {
  player = Player();
  computer = Player();

  createBoard("player", playerBoard);
  createBoard("computer", computerBoard);

  body.appendChild(boardContainers);
  boardContainers.appendChild(playerBoard);
  boardContainers.appendChild(computerBoard);

  let computerBoardDivs = document.getElementsByClassName(
    "computer-board-square"
  );

  addShips();

}

function endGame() {
  let win = document.createElement("div");
  body.appendChild(win);
  win.id = "win"
  if (computer.game.areSunk()) {
    win.innerText = "you win";
  } else if (player.game.areSunk()) {
    win.innerText = "you lost";
  }
  boardContainers.style = "filter: blur(10px)";
  let playAgain = document.createElement("div");

  playAgain.id = "play-again-button";

  body.appendChild(playAgain);

  playAgain.innerText = "Play Again?";
  playAgain.addEventListener("click", () => {
    boardContainers.style = "filter: none";
    playerBoard.innerHTML = "";
    computerBoard.innerHTML = "";
    boardContainers.innerHTML = "";
    body.removeChild(playAgain);
    playGame();
  });
}
playGame();
