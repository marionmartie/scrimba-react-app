import React from 'react'
import Joke from './components/Joke.jsx'
const App = () => {

  const jokes = [
    {
      id: '1',
      setup: 'Why don\'t skeletons fight each other?',
      punchline: 'They don\'t have the guts.'
    },
    {
      id: '2',
      setup: ''
    }
  ]

  return (
    <Joke />
  )
}

export default App