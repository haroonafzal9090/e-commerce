import React, { FC } from 'react'
import { FiShoppingCart } from "react-icons/fi"

const Button: FC<{ text: string }> = ({ text }) => {
    text
    return (
        <button className=' flex px-14 py-4 bg-black/100 text-white font-bold items-center'>
            <FiShoppingCart className='mr-2 h-7 w-8' /> {text}
        </button>
    )
}

export default Button