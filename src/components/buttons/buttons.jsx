import React from 'react'

const Buttons = ({text , bg , col}) => {
  return (
    <div>
        <button style={{backgroundColor : bg , color : col , padding : '15px 25px' , fontSize : '20px' , border : 'none' , borderRadius: '5px'}}>{text}</button>
    </div>
  )
}

export default Buttons