import React from 'react'
import { CustomModalStyles } from '../types'
import CustomInput from './CustomInput'

const CustomModal = ({modalStyles} :CustomModalStyles) => {
  return (
    <div className='absolute bg-[rgba(0,0,0,0.5)] top-0 bottom-0 right-0 left-0  flex justify-center items-center'>
      <div>
        <CustomInput inputStyles={''} inputType={''} inputName={''} placeholder={''} />
        <CustomInput inputStyles={''} inputType={''} inputName={''} placeholder={''} />
      </div>
    </div>
  )
}

export default CustomModal