import React from 'react'
import Contact from './components/Contact'

const App = () => {

  let cats = [
    {
      id:'1',
      name: 'Mr. Whiskerson',
      phone: '(01) 234-567',
      email: 'cat1@gmail.com',
      image: './src/assets/mr-whiskerson.png'
    },
    {
      id:'2',
      name: 'Fluff',
      phone: '(01) 234-568',
      email: 'cat2@gmail.com',
      image: './src/assets/fluffykins.png'
    },
    {
      id:'3',
      name: 'Felix',
      phone: '(01) 234-876',
      email: 'cat3@gmail.com',
      image: './src/assets/felix.png'
    },
    {
      id:'4',
      name: 'Pumpkin',
      phone: '(01) 234-123',
      email: 'cat4@gmail.com',
      image: './src/assets/pumpkin.png'
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-5 bg-slate-500 p-4">
      {
        cats.map( cat => <Contact key={cat.id} cat={cat} /> )
      }
    </div>
  )
}

export default App