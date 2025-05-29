import React from "react";

export default function QuizDeleteSuccessModal({ onContinue }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
          <i className="fas fa-check text-white text-3xl"></i>
        </div>
        <p className="text-gray-900 text-lg font-normal">Quiz deleted.</p>
        <button
          className="bg-teal-600 text-white font-semibold text-sm rounded-full px-6 py-2 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-1"
          type="button"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
