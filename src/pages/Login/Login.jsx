import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-md flex items-center mb-10">
        <button aria-label="Go back" className="text-black text-lg">
          <i className="fas fa-arrow-left"></i>
        </button>
      </header>
      
      <main className="w-full max-w-md flex flex-col items-center">
        <img
          alt="Green graduation cap icon" 
          className="mb-6" 
          decoding="async" 
          height="48" 
          loading="lazy" 
          src="src\assets\Logo.png" 
          width="48"
        />
        
        <h1 className="text-center text-black text-base font-normal mb-4 max-w-xs">
          Enter your email and we'll
          <br />
          send you a login link.
        </h1>
        
        <form 
          action="#" 
          className="w-full max-w-xs flex flex-col items-center" 
          method="POST"
        >
          <input 
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600" 
            name="email" 
            placeholder="Email" 
            required 
            type="email"
          />
          <button 
            className="w-full bg-emerald-600 text-white text-sm font-normal py-2 rounded-md hover:bg-emerald-700 transition-colors" 
            type="submit"
          >
            Send login link
          </button>
        </form>
        
        <p className="mt-4 text-center text-xs text-gray-600 max-w-xs">
          Proceeding means you're ok with our
          <a className="text-emerald-600 underline" href="#">
            {' terms & conditions'}
          </a>
        </p>
      </main>
    </div>
  );
};

export default Login;