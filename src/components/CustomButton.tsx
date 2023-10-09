import React from 'react'
import { CustomButtonStyles } from '../types'

const CustomButton = ({buttonName, buttonType, buttonText, buttonStyles} : CustomButtonStyles) => {
  return (
    <div>
      <button 
      className={buttonStyles}
      type={buttonType||"button"}
      name={buttonName}
      >
        
        {buttonText}</button>
    </div>
  )
}

export default CustomButton