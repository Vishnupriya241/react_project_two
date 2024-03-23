import React from 'react'
import colorNames from 'colornames'

const Input = ({color,setColor,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label >Add Color Name:</label>
        <input 
        autoFocus
        type = 'text'
        placeholder='add color name'
        value={color}
        onChange={(e) =>{ setColor(e.target.value);
        setHexValue(colorNames(e.target.value))
    }}
        />
        <button
        type='button'
        onClick={() =>  setIsDarkText(!isDarkText)}
        >Toggle Text Button</button>

    </form>
  )
}

export default Input