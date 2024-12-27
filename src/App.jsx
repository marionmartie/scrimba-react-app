import React from 'react'
import Nav from './components/Nav'
import Entry from './components/Entry'
import entries from './data.js'

const App = () => {
  const journalEntries = entries
  return (
    <>
      <Nav />
      {
        journalEntries.map( entry => (
          <Entry key={entry.id} entry={entry} />
        ) )
      }
    </>
  )
}

export default App