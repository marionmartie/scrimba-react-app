import cat1 from '../assets/mr-whiskerson.png'
import mailicon from '../assets/mail-icon.png'
import phoneicon from '../assets/phone-icon.png'

const Contact = ({cat}) => {
    return (
        <div className="card shadow-xl p-4 bg-white rounded-xl w-80">
            <img src={cat.image} alt="" className='rounded-md w-auto' />
            <p className='font-bold text-2xl mt-4'>
                {cat.name}
            </p>
            
            <div className="">
                <img src={phoneicon} className='w-4 my-3 me-3 inline' alt="" />
                <span>{ cat.phone }</span>
            </div>
            <div className="">
                <img src={mailicon} className='w-4 my-2 me-3 inline' alt="" />
                <span>{ cat.email }</span>
            </div>

        </div>
    )
}

export default Contact