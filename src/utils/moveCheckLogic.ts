export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumeOfFour: number
) => {
  for (let i: number = 0; i <= formulaForColumeOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ]
    const decidedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''

    if (
      columnOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy: number) => (newBoard[candy] = ''))
      return true
    }
  }
}

export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumeOfThree: number
) => {
  for (let i: number = 0; i <= formulaForColumeOfThree; i++) {
    const columnOfThree: number[] = [i, i + boardSize, i + boardSize * 2]
    const decidedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''

    if (
      columnOfThree.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfThree.forEach((candy: number) => (newBoard[candy] = ''))
      return true
    }
  }
}

export const checkForRowOfFour = (
  newBoard: String[],
  boardSize: number,
  invalidMovesForColumnOfFour: number[]
) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3]
    const decidedColor = newBoard[i]

    const isBlank = newBoard[i] === ''

    if (invalidMovesForColumnOfFour.includes(i)) continue
    if (
      rowOfFour.every((square) => newBoard[square] === decidedColor && !isBlank)
    ) {
      rowOfFour.forEach((square) => (newBoard[square] = ''))
      return true
    }
  }
}

export const checkForRowOfThree = (
  newBoard: string[],
  boardSize: number,
  invalidMovesForColumnOfThree: number[]
) => {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2]
    const decidedColor = newBoard[i]

    const isBlank = newBoard[i] === ''

    if (invalidMovesForColumnOfThree.includes(i)) continue

    if (
      rowOfThree.every(
        (square) => newBoard[square] === decidedColor && !isBlank
      )
    ) {
      rowOfThree.forEach((square) => (newBoard[square] = ''))
      return true
    }
  }
}
