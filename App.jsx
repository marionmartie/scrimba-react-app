import {useState} from "react"

export default function App() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount( count + 1 )        
    }
    const decrement = () => {
        setCount(count - 1)
    }
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={decrement} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{ count }</h2>
                <button onClick={increment} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
