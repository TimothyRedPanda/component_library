import React, { useState } from 'react'
import './button.scss'

function button() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [buttonText, setButtonText] = useState('Login')

  const handleClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
      setButtonText('Login')
    } else {
      setIsLoggedIn(true)
      setButtonText('Logout')
    }
  }

  return (
    <div>
      <button onClick={handleClick} type='button'>{buttonText}</button>
    </div>
  )
}

export default button
