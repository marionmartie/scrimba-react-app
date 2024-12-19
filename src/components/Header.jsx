const Header = () => {
    return (
      <header>
          <nav>
            <ul className='nav-list flex align-items-center gap font-size-lg'>
              <li>
                <img src="/src/assets/react-logo.png" className='logo' />
              </li>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
    )
  }

  export default Header