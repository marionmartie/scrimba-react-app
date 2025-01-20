
const Die = ({number, isHeld, handlechange, id}) => {
    return (
        <button 
            onClick={() => handlechange(id)}
            className={`rounded-xl bg-white font-bold text-2xl py-2 px-2 shadow-lg ${isHeld && 'bg-green-500'}`}>{number}</button>
    )
}

export default Die