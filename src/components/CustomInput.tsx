import React from 'react'
import { CustomInputStyles } from '../types'

const CustomInput = ({inputStyles, inputType, inputName, placeholder}:CustomInputStyles) => {
  return (
    <div>
      <input 
      type={inputType || "text"}
      className={`${inputStyles}`}
      name={inputName}
      placeholder={placeholder}
       />
    </div>
  )
}

export default CustomInput