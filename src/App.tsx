import React from 'react';
import './App.css';
import { CustomButton, CustomInput } from './components';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#CCC8AA] ">
      <form className=' flex flex-col items-center 	shadow-[0_0_5px_1px_black] p-[10px] px-[20px] rounded-[5px]'>
        <h1 className='font-semibold text-[30px] mb-[20px]'>Login Page</h1>

        <div className='mb-[10px]'>
          <div className='mb-[10px]'>
            <h2 className='mb-[5px]'>Username</h2>
            <CustomInput 
            inputStyles='' 
            inputName='username' 
            inputType=''
            placeholder=''
            />
          </div>  

          <div className='mb-[10px]'>
            <h2 className='mb-[5px]'>Password</h2>
            <CustomInput 
            inputStyles='' 
            inputName='password' 
            inputType=''
            placeholder=''
            />
          </div>

          <CustomButton />
        </div>
        <div className='flex flex-row justify-between items-center text-[blue]'>
            <a href="">register</a>
            <a href="">forgot password</a>
          </div>
      </form>

    </div>
  );
}

export default App;
