import { useState } from 'react'

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = useState('false')

    const showEl = () => {
        setIsShown((prev) => !prev)
        console.log(isShown);

    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <button onClick={showEl}>Show</button>
            { !isShown && <p>{props.punchline}</p>}
            <hr />
        </div>
    )
}