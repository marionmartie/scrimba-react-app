import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <header>
        <img src="/src/assets/react-logo.png" width="40px" />
        <nav>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
        <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

const MainContent = () => {
  return (
  <main>
    <h1>Reason I am excited to learn React</h1>
    <ol>
      <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
      <li>I am more likely to get a job as a front end developer if I know React</li>
    </ol>
  </main>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App