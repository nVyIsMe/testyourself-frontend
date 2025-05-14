import React from "react";

export default function DeleteSuccessModal({ onContinue }) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Course deleted.</h3>
        <button
          onClick={onContinue}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
