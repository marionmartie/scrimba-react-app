import { useEffect, useState } from "react"

export default function Timer() {
    const [mins, setMins] = useState(0)
    const [sec, setSec] = useState(0)

    
    const getTime = () => {
        setSec( (prevSec) => {
            if (prevSec === 59) {
                setMins((prevMins) => prevMins + 1)
                return 0
            } else {
                return prevSec + 1
            }
        })
    }

    useEffect(() => {
        const interval = setInterval( () => getTime(), 1000)
        return () => clearInterval(interval)
    },[])

    return (
            <>
                <span>{ mins }</span>
                <span>{ sec }</span>
            </>
    )
}