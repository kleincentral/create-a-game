/** 
 * Minesweeper:
 * 
 * Minesweeper should do a few things,
 * 1: Have a grid of 5x5, put one bomb on it.
 * 2: Allow the player to put a flag on where they think the bomb is.
 * 3: Allow the player to select boxes to dig.
 * 4: Digging a space touching no bombs should dig out other spaces until
 *    it digs out a space with a number.
 * 5: Digging a space touching a bomb should display a number of how many
 *    bombs its touching.
 * 6: If every space that is not a bomb has been dug up, the player wins.
 * 7: If the player digs up a bomb, they lose and restart the game.
 */

let minesweeperGrid = [
  [[], [], [],  1,    1],
  [[], [], [],  1,    "Bomb"],
  [[], [], 1, 2,      2],
  [[], [], 1, "Bomb", 1],
  [[], [], 1, 1,      1]
]

let minesweeperDisplay = [
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []]
]

const displayMinesweep = () => {
  for (i of minesweeperDisplay) {
    console.log(i)
    // for (j of i) {
    //   console.log(j)
    // }
  }
}

const checkForBomb = (cordX, cordY) => {
  if (typeof (minesweeperDisplay[cordX][cordY]) == "number") {
    return
  }
  else if (minesweeperDisplay[cordX][cordY] == '') {
    console.log(cordX, cordY)
    if (minesweeperGrid[cordX][cordY] == "Bomb") {
      console.log("Oh no death")
    } else if (minesweeperGrid[cordX][cordY] != "") {
      console.log(minesweeperGrid[cordX][cordY])
      minesweeperDisplay[cordX][cordY] = minesweeperGrid[cordX][cordY]
    } else {
      console.log("nothing")
      minesweeperDisplay[cordX][cordY] = 0
      checkForEmpty(cordX, cordY)
    }
    console.log("\n")
    displayMinesweep()
  }
}

const checkForEmpty = (cordX, cordY) => {
  const validSpaces = checkAdjacent(cordX, cordY)
  if (validSpaces[0] == 0 && validSpaces[1] == 0) {
    console.log("Check for Empty",cordX, cordY)
    checkForBomb(cordX+1, cordY+1)
    checkForBomb(cordX+1, cordY-1)
    checkForBomb(cordX, cordY+1)
    checkForBomb(cordX, cordY-1)
    checkForBomb(cordX, cordY+1)
    checkForBomb(cordX-1, cordY-1)
    checkForBomb(cordX-1, cordY)
    checkForBomb(cordX-1, cordY+1)
  }
}


/**
 * This function should be able to be used for generation
 * and bomb checking.
 * @returns an arry depending on what are valid placements.
 * first number tells you if X is valid, second tells you if Y is valid.
 */
const checkAdjacent = (cordX, cordY) => {
  console.log("checking...")
  let returnNumX = 0;
  let returnNumY = 0;
  if (cordX <= 0) {
    returnNumX+=1
    // dont look above.
  }
  if (cordX >= 4) {
    returnNumX+=2
    // dont look below.
  }
  if (cordY <= 0) {
    returnNumY+=1
    // dont look left.
  }
  if (cordY >= 4) {
    returnNumY+=2
    // dont look right.
  }
  console.log("Returning,", returnNumX, returnNumY)
  return [returnNumX, returnNumY]
  // look in directions, along with combination of directions.
  // Ergo return statement should tell you the valid spots that can
  // be checked. Return a number? Return an array? We really only need
  // to return something to tell you what directions are valid.
  // Something like
  // 0: All directions invalid.
  // 1: Up invalid.
  // 2: Down invalid.
  // .1: Left invalid.
  // .2: Right invalid.
  // So something like 1.2 means up and right are invalid (top right corner.)

}

checkForBomb(1,4)
checkForBomb(0,3)
checkForBomb(1, 1)
checkForBomb(0, 0)
console.log("ee")
checkForBomb(3,1)
