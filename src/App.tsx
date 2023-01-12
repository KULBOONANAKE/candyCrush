import { useEffect } from 'react'
import Board from './components/Board'
import { moveBelow, updateBoard } from './store'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { createBoard } from './utils/createBoard'
import {
  formulaForColumeOfFour,
  formulaForColumeOfThree,
  generateInvalidMoves,
} from './utils/formulas'
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from './utils/moveCheckLogic'

const App = () => {
  const dispatch = useAppDispatch()

  const board = useAppSelector(({ candyCrush: { board } }) => board)
  const boardSize = useAppSelector(({ candyCrush: { boardSize } }) => boardSize)

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)))
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board]
      isColumnOfFour(newBoard, boardSize, formulaForColumeOfFour(boardSize))
      isColumnOfThree(newBoard, boardSize, formulaForColumeOfThree(boardSize))
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true))
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize, true))
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow())
    }, 150)
    return () => clearInterval(timeout)
  }, [board, boardSize, dispatch])
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  )
}

export default App
