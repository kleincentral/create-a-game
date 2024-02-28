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
  [[], [], [],  [1],      [1]],
  [[], [], [],  [1],      ["Bomb"]],
  [[], [], [1], [2],      [2]],
  [[], [], [1], ["Bomb"], [1]],
  [[], [], [1], [1],      [1]]
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
  cordX -= 1
  cordY -= 1
  if (minesweeperGrid[cordX][cordY] == "Bomb"){
    console.log("Oh no death")  
  } else if (minesweeperGrid[cordX][cordY] != "") {
    console.log(minesweeperGrid[cordX][cordY])
    minesweeperDisplay[cordX][cordY] = minesweeperGrid[cordX][cordY]
  } else {
    console.log("nothing")
    minesweeperDisplay[cordX][cordY] = 0
    checkAdjacent(cordX, cordY)
  }
  displayMinesweep()
}

const checkAdjacent = (cordX, cordY) => {
  console.log("checking...")
  
}

checkForBomb(2,5)
checkForBomb(1,4)
checkForBomb(1,1)