import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

const App = () => {
  const generateNewDice = () => {
    return new Array(10)
      .fill(0)
      .map(() => ({
        'value' : Math.ceil(Math.random() * 6), 
        'isHeld': false,
        'id': nanoid()
      }))
  }
      
  const reroll = () => {
    setDice(generateNewDice())
  }

  const changeIsHeld = (id) => 
    setDice( prev => prev.map( die => 
          die.id === id ? 
            {...die, isHeld: !die.isHeld} : 
            die
    ))


  // function hold(id) {
  //   setDice(oldDice => oldDice.map(die =>
  //       die.id === id ?
  //           { ...die, isHeld: !die.isHeld } :
  //           die
  //   ))
  // }
  

  const [dice, setDice] = useState(generateNewDice())

  return(
    <main className="bg-amber-100 p-8 m-4 w-96 mx-auto">
      <div className="dice-container py-24 grid grid-cols-5 gap-4">
        { dice.map( num =>  <Die key={num.id} number={num.value} isHeld={num.isHeld} handlechange={changeIsHeld} id={num.id} /> )}
      </div>
      <button className="rounded bg-blue-600 text-white p-4 w-full" onClick={reroll}>Generate New Dice</button>
    </main>
  )
}

export default App