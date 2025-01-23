import { useEffect, useState } from "react"

export default function Timer() {
    const [mins, setMins] = useState(0)
    const [sec, setSec] = useState(0)

    
    const getTime = () => {
        // const time = new Date()
        // setMins( Math.floor((time / 1000 / 60) % 60))
        // setSec( Math.floor((time/1000) % 60))

        // setSec( (prevSec) => prevSec == 59 ? setMins( (prevMin) => prevMin + 1 ) : prevSec + 1 )

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
        <section className="text-center text-xl font-bold flex justify-center gap-2 pt-4">
            <span>{ mins }</span>
            <span>{ sec }</span>
        </section>
    )
}