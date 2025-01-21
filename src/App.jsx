import React, { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

import { useWindowSize } from "react-use"
import ReactConfetti from "react-confetti"

export default function App() {
  let [dice, setDice] = useState(generateNewDice())
  const {width, height} = useWindowSize()
  
  function generateNewDice() {
    return new Array(10)
    .fill(0)
    .map(() => ({
      'value' : Math.ceil(Math.random() * 6), 
      'isHeld': false,
      'id': nanoid()
      }))
  }
      
  let reroll = () => 
    setDice( prev => prev.map( die => 
      die.isHeld === false ?
      {...die, value: Math.ceil(Math.random() * 6)} :
      die
     ) )

  let changeIsHeld = (id) => 
    setDice( prev => prev.map( die => 
          die.id === id ? 
            {...die, isHeld: !die.isHeld} : 
            die
    ))

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
  
  const diceElements = dice.map( num =>  <Die key={num.id} number={num.value} isHeld={num.isHeld} handlechange={changeIsHeld} id={num.id} /> )


  return(
    <main className="bg-amber-100 p-8 m-4 w-96 mx-auto">
      <h1 className="text-4xl text-center font-bold">Tenzies</h1>
      <p className="mt-8">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container py-12 grid grid-cols-5 gap-4">
        { diceElements }
      </div>
      <button className="rounded bg-blue-600 text-white p-4 w-full" onClick={reroll}>{ gameWon ? 'New Game' : 'Generate New Dice' }</button>
      {
        gameWon && <ReactConfetti width={width} height={height} />
      }
    </main>
  )
}

// export default App