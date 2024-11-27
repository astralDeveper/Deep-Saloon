import React from 'react'
import "../index.css"

const Button = ({name , background}) => {
  return (
    <button className={`bg-textColor4 text-black mt-4 px-4 py-2 rounded-full max-md:text-[12px]  ${background?"bg-transparent border-[2px] border-textColor4 text-[17px] font-bold text-textColor4":"shadow"} `}>
     {name}
     </button>
  )
}

export default Button