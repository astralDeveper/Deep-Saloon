
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const  StarRating = ({rate}) => {
    const [rating, setRating] = useState(rate ? rate : 0)

    const handleRating = (rate) => {
      setRating(rate)
    } 
    
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => {setRating(rating)}
    const onPointerMove = (value, index) => console.log(value, index)
  
    return (
      <div className='App'>
        <Rating
        style={{flexDirection:'row',flex:1}}
        className="flex"
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}  
          size={25}
        />
      </div>
    )
}

export default StarRating

 