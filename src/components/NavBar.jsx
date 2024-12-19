import logo from '../assets/react-logo.png'

const NavBar = () => {
    return (
        <header className='p-7 bg-gray-900'>
            <nav className='flex items-center gap-5'>
                <img src={logo} className='w-10' alt="" />
                <span className="text-3xl fontbold text-blue-400">ReactFacts</span>
            </nav>
        </header>
    )
}

export default NavBar