import { useState, useEffect } from "react"

const App = () => {
  const [starWarsData, setStarWarsData] = useState(null)

  useEffect(() => {
    console.log("Rendered");
    
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  },[])


  return (
    <div className="">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App