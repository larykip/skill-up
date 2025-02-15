import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ArrowLeft, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuthModal = ({status}) => {
  const router = useRouter()
  const [activeForm, setActiveForm] = useState(status);
  const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form switching
  const handleSwitchForm = (form) => {
    setActiveForm(form);
    setData({ email: '', password: '', confirmPassword: '' });
    setErrorMessage(null);
  };

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleLoginSubmit = async() => {
    // Handle form submission here
    try {
      // Send data to the server
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed.');
        return; 
      }

      setShowMessage(true); 
      setTimeout(() => {
        router.push('/dashboard'); 
      }, 1500); 

    } catch(err){
      setErrorMessage('An error occurred during login.');
    }
    
  }

  const handleJoinSubmit = async() => {
    // Handle form submission here
    try {
      const response = await fetch('api/auth/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Signup failed.');
        return; 
      }

      setShowMessage(true); 
      setTimeout(() => {
        router.push('/dashboard'); 
      }, 1500); 

      const result = await response.json();
      console.log(result);
    } catch(err){
      setErrorMessage('An error occurred during sign up.');
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        {status === 'signin' ? (
          <span variant='outline' className="bg-slate-600 font-bold text-white hover:bg-white border hover:border-slate-950 hover:text-slate-600 py-2 px-3 rounded-lg">Sign In</span>
        ) : status === 'signup' ? (
          <span variant='outline' className="hover:bg-slate-600 font-bold hover:text-white bg-white border hover:border-slate-950 text-slate-600 py-2 px-3 rounded-lg">Sign Up</span>
        ) : (
          <p>yaay!</p>
        )}
      </DialogTrigger>
      <DialogContent className={`flex h-[600px] !p-0`}>
        <div className="flex-1 relative">
          <img 
            src={`${activeForm === 'signin' ? '/images/bird.jpg' : 
                   activeForm === 'signup' ? '/images/bubbles.jpg' : 
                   activeForm === 'emailSignin' ? '/images/easy.jpg' : 
                   activeForm === 'emailSignup' ? '/images/traffic.jpg' :
                   'Yaay!'}`} 
            alt={activeForm === 'signin' ? 'sign in' : 
                 activeForm === 'signup' ? 'sign up' : 
                 activeForm === 'emailSignin' ? 'Email Sign In': 
                  activeForm === 'emailSignup' ? 'Email Sign Up' :
                 'background image'} 
            className="absolute !p-0 inset-0 rounded-l-md w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center items-center max-w-md">
          <DialogHeader>
            <DialogTitle>{activeForm === 'signin' ? 'Sign In' : 
                            activeForm === 'signup' ? 'Sign Up' : 
                            activeForm === 'emailSignin' ? 'Continue with Email' : 
                            activeForm === 'emailSignup' ? 'Continue with Email' :
                            'Yaay!'}</DialogTitle>
          </DialogHeader>
          {showMessage && (
            <div className="text-green-500 mb-4">Success! Redirecting...</div>
          )}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div> 
          )}
          {activeForm === 'signin' && (
            <span>
              Don't have an account ? <span onClick={() => handleSwitchForm('signup')}>Join</span>
            </span>
          )}
          {activeForm === 'signup' && (
            <span>
              Already have an account ? <span onClick={() => handleSwitchForm('signin')}>Login</span>
            </span>
          )}
          {activeForm === 'emailSignin' && (
            <span onClick={() => handleSwitchForm('signin')} className='cursor-pointer flex gap-2 border-2 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white'>
              <ArrowLeft />
              Go Back
            </span>
          )}
          {activeForm === 'emailSignup' && (
            <span onClick={() => handleSwitchForm('signup')} className='cursor-pointer flex gap-2 border-2 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white'>
              <ArrowLeft />
              Go Back
            </span>
          )}
          {activeForm === 'signin' && (
            <div className='flex flex-col gap-6'>
              <span className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <img src='/images/google.png' alt='google' width={20} height={20} />
                Continue with Google
              </span>
              <span className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <img src='/images/facebook.png' alt='facebook' width={20} height={20} />
                Continue with Facebook
              </span>
              <span onClick={ activeForm === 'signin' ? () => handleSwitchForm('emailSignin') : activeForm === 'signup' ? () => handleSwitchForm('emailSignup') : 'Yaay!' } className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <Mail/>
                Continue with Email
              </span>
            </div>
          )}
          {activeForm === 'signup' && (
            <div className={`flex flex-col gap-6`}>
              <span className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <img src='/images/google.png' alt='google' width={20} height={20} />
                Continue with Google
              </span>
              <span className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <img src='/images/facebook.png' alt='facebook' width={20} height={20} />
                Continue with Facebook
              </span>
              <span onClick={activeForm === 'signin' ? () => handleSwitchForm('emailSignin') : activeForm === 'signup' ? () => handleSwitchForm('emailSignup') : 'Yaay! tena'} className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <Mail/>
                Continue with Email
              </span>
            </div>
          )}
          {activeForm === 'emailSignin' && (
            <div className="flex flex-col gap-4 w-full">
              <input type="email" name='email' required value={data.email} onChange={handleDataChange} placeholder="Your Email" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" name='password' required value={data.password} onChange={handleDataChange} placeholder="Your password" className="border rounded px-3 py-2 w-full mr-6"/>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={handleLoginSubmit}
              >
                Sign In
              </button>
            </div>
          ) }
          {activeForm === 'emailSignup' && (
            <div className="flex flex-col gap-4 w-full">
              <input type="email" name='email' required value={data.email} onChange={handleDataChange} placeholder="Your Email" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" name='password' required value={data.password} onChange={handleDataChange} placeholder="Your password" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" name='confirmPassword' required value={data.confirmPassword} onChange={handleDataChange} placeholder="Confirm password" className="border rounded px-3 py-2 w-full mr-6" />
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleJoinSubmit}
              >
                Sign Up
              </button>
            </div>
          ) }
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;