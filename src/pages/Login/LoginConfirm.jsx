import React from 'react';

const LoginConfirm = () => {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
      <div className="relative bg-green-50 w-full max-w-md border border-gray-300 rounded-sm shadow-sm flex flex-col items-center py-10 px-6">
        <button aria-label="Close" className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-sm leading-none">
          <i className="fas fa-times"></i>
        </button>
        
        <img 
          alt="Green envelope icon representing email" 
          className="mb-6 w-10 h-8" 
          height="30" 
          src="https://storage.googleapis.com/a1aa/image/b0c2cbd3-302e-4381-8808-9ef13140f2bd.jpg" 
          style={{ color: "#1FA397" }} 
          width="40"
        />
        
        <h1 className="text-center text-black text-lg font-semibold mb-2">
          Check your inbox!
        </h1>
        
        <p className="text-center text-black text-xs max-w-xs mb-4 leading-tight">
          We've sent you an email with a login link. Find the email and click the login link to continue your registration.
        </p>
        
        <a className="text-emerald-600 text-xs font-normal hover:underline" href="#">
          Try again?
        </a>
      </div>
    </div>
  );
};

export default LoginConfirm;