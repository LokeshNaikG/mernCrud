import React, { useState } from 'react'
import './Home.css'

const Colour = () => {

  const [colour, setColour] = useState('white')
  const [text, setText] = useState('')

  const handleColour = (e) => {
    setColour(e.target.value)
  }

  const testHandler = (e) => {
    setText(e.target.value)
  }

  const handleSwitch = () => {
    
  }
  return (
    <div>
      <label > Fill Colour </label>
      <br />
      <textarea onChange={testHandler} style={{ backgroundColor: colour }}></textarea>

      <br />
      <select onChange={handleColour} >
        <option defaultValue='white'>select</option>
        <option value='blue'>Blue</option>
        <option value='black'>Black</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='green'>Green</option>
      </select>



      <div>
        <p> {text}</p>

        <label class="switch" for="checkbox">
          <input onClick={handleSwitch} type="checkbox" id="checkbox" />
          <div class="slider round"></div>
        </label>
      </div>

    </div>
  )
}

export default Colour
