import React from 'react'
import "../index.css"

const Button = ({name}) => {
  return (
    <button className="bg-textColor4 text-black mt-4 px-4 py-2 rounded-full shadow ">
     {name}
     </button>
  )
}

export default Button