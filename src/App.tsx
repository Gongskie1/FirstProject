import { useState } from 'react';
import './App.css';
import { CustomButton, CustomInput } from './components';
import { registrationModal } from './utils';
import CustomModal from './components/CustomModal';

function App() {
  const [modal,setModal] = useState(false);

  const toggleModal = () => {
    console.log(modal)
    setModal(true);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#CCC8AA] ">
      <form className=' flex flex-col items-center 	shadow-[0_0_5px_1px_black] p-[10px] px-[20px] rounded-[5px]'>
        <h1 className='font-semibold text-[30px] mb-[20px]'>Login Page</h1>

        <div className='mb-[10px]'>
          <div className='mb-[10px]'>
            <h2 className='mb-[5px]'>Username</h2>
            <CustomInput 
            inputStyles='p-[7px_12px]' 
            inputName='username' 
            inputType='text'
            placeholder='username'
            />
          </div>  

          <div className='mb-[10px]'>
            <h2 className='mb-[5px]'>Password</h2>
            <CustomInput 
            inputStyles='p-[7px_12px]' 
            inputName='password' 
            inputType='password'
            placeholder='password'
            />
          </div>

          <CustomButton 
          buttonStyles='w-full bg-[green] rounded-[7px] py-[5px] mb-[20px]'
          buttonText='login'
          buttonType='submit'
          />
          <div className='flex flex-col items-center text-[blue]'>
            <button type='button' onClick={toggleModal}>register account</button>
            <span>or</span>
            <button type='button'>forgot password?</button>
          </div>
          
        </div>
        
      </form>
      <CustomModal modalStyles='absolute'/>
    </div>
  );
}

export default App;
