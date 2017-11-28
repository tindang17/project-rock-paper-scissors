let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

let playerOneWins;
let playerTwoWins;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (isMoveValid(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) === false) {
    return false;
  } else {
    switch (player) {
      case 'Player One':
        return (
          playerOneMoveOneType = moveOneType,
          playerOneMoveOneValue = moveOneValue,
          playerOneMoveTwoType = moveTwoType,
          playerOneMoveTwoValue = moveTwoValue,
          playerOneMoveThreeType = moveThreeType,
          playerOneMoveThreeValue = moveThreeValue
        );
        break;
      case 'Player Two':
        return (
          playerTwoMoveOneType = moveOneType,
          playerTwoMoveOneValue = moveOneValue,
          playerTwoMoveTwoType = moveTwoType,
          playerTwoMoveTwoValue = moveTwoValue,
          playerTwoMoveThreeType = moveThreeType,
          playerTwoMoveThreeValue = moveThreeValue
        );
        break;
      default:
        return 'you need one more player';

    };
  }
}

function isMoveValid (moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (moveOneType === undefined || moveOneValue === undefined || moveTwoType === undefined || moveTwoValue === undefined ||
      moveThreeType === undefined || moveThreeValue === undefined) {
    return false;
  } else if (moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') {
    return false;
  } else if (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') {
    return false;
  } else if (moveThreeType !== 'rock'&& moveThreeType !== 'paper'&& moveThreeType !=='scissors') {
    return false;
  } else if ((moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) || (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99)) {
    return false;
  } else if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return false;
  }
}


function getRoundWinner(round) {
  if (round < 1 || round > 3) {
    return null;
  } else if (round === 1) {
    if (playerOneMoveOneType === undefined || playerTwoMoveOneType === undefined || playerOneMoveOneValue === undefined || playerTwoMoveOneValue === undefined) {
      return null;
    } else if (playerOneMoveOneType === 'rock') {
      switch (playerTwoMoveOneType) {
        case 'paper':
          return 'Player Two';
          break;
        case 'scissors':
          return 'Player One';
          break;
        case 'rock':
          if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return 'Player One';
            break;
          } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
            break;
          } else {
            return 'Tie';
            break;
          }
        default:
          return 'error';
          break;
        };
    } else if (playerOneMoveOneType === 'paper') {
        switch (playerTwoMoveOneType) {
          case 'rock':
            return 'Player One';
            break;
          case 'scissors':
            return 'Player Two';
            break;
          case 'paper':
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    } else if (playerOneMoveOneType === 'scissors') {
        switch (playerTwoMoveOneType) {
          case 'rock':
            return 'Player Two';
            break;
          case 'paper':
            return 'Player One';
            break;
          case 'scissors':
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    }
  } else if (round === 2) {
    if (playerOneMoveTwoType === undefined || playerTwoMoveTwoType === undefined || playerOneMoveTwoValue === undefined || playerTwoMoveTwoValue === undefined) {
      return null;
    } else if (playerOneMoveTwoType === 'rock') {
      switch (playerTwoMoveTwoType) {
        case 'paper':
          return 'Player Two';
          break;
        case 'scissors':
          return 'Player One';
          break;
        case 'rock':
          if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            return 'Player One';
            break;
          } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return 'Player Two';
            break;
          } else {
            return 'Tie';
            break;
          }
        default:
          return 'error';
          break;
        };
    } else if (playerOneMoveTwoType === 'paper') {
        switch (playerTwoMoveTwoType) {
          case 'rock':
            return 'Player One';
            break;
          case 'scissors':
            return 'Player Two';
            break;
          case 'paper':
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    } else if (playerOneMoveTwoType === 'scissors') {
        switch (playerTwoMoveTwoType) {
          case 'rock':
            return 'Player Two';
            break;
          case 'paper':
            return 'Player One';
            break;
          case 'scissors':
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    }
  } else if (round === 3) {
    if (playerOneMoveThreeType === undefined || playerTwoMoveThreeType === undefined || playerOneMoveThreeValue === undefined || playerTwoMoveThreeValue === undefined) {
      return null;
    } else if (playerOneMoveThreeType === 'rock') {
      switch (playerTwoMoveThreeType) {
        case 'paper':
          return 'Player Two';
          break;
        case 'scissors':
          return 'Player One';
          break;
        case 'rock':
          if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
            return 'Player One';
            break;
          } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
            return 'Player Two';
            break;
          } else {
            return 'Tie';
            break;
          }
        default:
          return 'error';
          break;
        };
    } else if (playerOneMoveThreeType === 'paper') {
        switch (playerTwoMoveThreeType) {
          case 'rock':
            return 'Player One';
            break;
          case 'scissors':
            return 'Player Two';
            break;
          case 'paper':
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    } else if (playerOneMoveThreeType === 'scissors') {
        switch (playerTwoMoveThreeType) {
          case 'rock':
            return 'Player Two';
            break;
          case 'paper':
            return 'Player One';
            break;
          case 'scissors':
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
              return 'Player One';
              break;
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
              return 'Player Two';
              break;
            } else {
              return 'Tie';
              break;
            }
          default:
            return 'error';
            break;
        }
    }
  }
}

function getGameWinner () {
  if (!getRoundWinner(1) || !getRoundWinner(2) || !getRoundWinner(3)) {
    return null;
  };

  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);

  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  };
}

function addWin (winner) {
  if (winner === 'Player One') {
    playerOneWins = (playerOneWins + 1) || 1;
  } else if (winner === 'Player Two') {
    playerTwoWins = (playerTwoWins + 1) || 1;
  }
}


function setComputerMoves () {
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  return setPlayerMoves('Player Two', moveOneType, moveOneValue,
    moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}



