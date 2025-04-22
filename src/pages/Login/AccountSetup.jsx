import React from 'react';

const AccountSetup = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <main className="max-w-4xl w-full flex flex-col items-center">
        <img 
          alt="Teal colored graduation cap icon" 
          className="mb-6" 
          height="32" 
          src="src\assets\Logo.png" 
          width="40"
        />
        <h1 className="text-center text-gray-900 font-semibold text-base mb-8">
          Welcome! Let's set up your account
        </h1>
        <form className="w-full max-w-4xl flex flex-col md:flex-row md:justify-center md:items-start gap-8" noValidate>
          <section className="flex-1 max-w-md space-y-6">
            <div>
              <label className="block text-xs font-normal text-gray-900 mb-1" htmlFor="name">
                Your name
              </label>
              <input 
                className="w-full rounded-md border border-gray-300 text-xs text-gray-900 placeholder-white-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
                id="name" 
                name="name" 
                placeholder="Value" 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-normal text-gray-900 mb-1" htmlFor="role">
                Your role
              </label>
              <input 
                className="w-full rounded-md border border-gray-300 text-xs text-gray-900 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
                id="role" 
                name="role" 
                placeholder="Value" 
                type="text"
              />
              <p className="mt-1 text-xs text-gray-400 font-normal">
                For demo only. In real example, this would be manually assigned.
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                className="bg-teal-500 text-white text-xs font-semibold rounded-full px-5 py-2 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                type="submit"
              >
                Continue
              </button>
              <button 
                className="bg-gray-300 text-gray-400 text-xs font-semibold rounded-full px-5 py-2 cursor-not-allowed" 
                disabled 
                type="button"
              >
                Cancel
              </button>
            </div>
          </section>
          <section className="flex flex-col items-center space-y-3">
            <label className="text-xs font-normal text-gray-900">
              Profile picture
            </label>
            <div className="relative w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
              <img 
                alt="Dark teal graduation cap icon inside a dark circle representing profile picture placeholder" 
                className="w-12 h-10" 
                height="40" 
                src="src\assets\Logo.png" 
                width="48"
              />
              <button 
                aria-label="Edit profile picture" 
                className="absolute bottom-0 right-0 bg-teal-500 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                type="button"
              >
                <i className="fas fa-pen"></i>
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center max-w-xs">
              Preview appears after form is submitted
            </p>
          </section>
        </form>
      </main>
    </div>
  );
};

export default AccountSetup;