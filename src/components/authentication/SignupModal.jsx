import React, { act, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ArrowLeft, Mail } from 'lucide-react';

const SigninModal = () => {
  const [activeForm, setActiveForm] = useState('signup'); 
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const handleSwitchForm = (form) => {
    setActiveForm(form);
    setShowPasswordConfirmation(false); 
  };

  return (
    <Dialog>
      <DialogTrigger>
        <span variant='outline' className="hover:bg-slate-600 font-bold hover:text-white bg-white border hover:border-slate-950 text-slate-600 py-2 px-3 rounded-lg">Sign Up</span>
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
          {activeForm === 'signin' && (
            <span>
              Don't have an account ? <span onClick={() => handleSwitchForm('signup')}>Join</span>
            </span>
          )}
          {activeForm === 'signup' && (
            <span>
              Already have an account ? <span onClick={() => handleSwitchForm('signin')}>Sign In</span>
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
              <span onClick={activeForm === 'signin' ? () => handleSwitchForm('emailSignin') : activeForm === 'signup' ? () => handleSwitchForm('emailSignup') : 'Yaay!'} className='flex items-center border-2 text-sm gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white mr-2'>
                <Mail/>
                Continue with Email
              </span>
            </div>
          )}
          {activeForm === 'emailSignin' && (
            <div className="flex flex-col gap-4 w-full">
              <input type="email" placeholder="Your Email" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" placeholder="Your password" className="border rounded px-3 py-2 w-full mr-6"/>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => { 
                  setShowPasswordConfirmation(activeForm === 'signup'); 
                  // Handle form submission here 
                }}
              >
                {activeForm === 'signup' ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          ) }
          {activeForm === 'emailSignup' && (
            <div className="flex flex-col gap-4 w-full">
              <input type="email" placeholder="Your Email" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" placeholder="Your password" className="border rounded px-3 py-2 w-full mr-6"/>
              <input type="password" placeholder="Confirm password" className="border rounded px-3 py-2 w-full mr-6" />
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => { 
                  setShowPasswordConfirmation(activeForm === 'signup'); 
                  // Handle form submission here 
                }}
              >
                {activeForm === 'signup' ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          ) }
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SigninModal;