
const Die = ({number, isHeld, handlechange, id}) => {
    return (
        <button 
            onClick={() => handlechange(id)}
            className={`rounded-xl font-bold text-2xl py-2 px-2 shadow-lg ${isHeld ? 'bg-green-500' : 'bg-white'}`}>{number}</button>
    )
}

export default Die