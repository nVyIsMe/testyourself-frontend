import React, { useState } from "react";

export default function EditQuizModal({ quiz, onSave, onDelete, onClose }) {
  const [quizName, setQuizName] = useState(quiz?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizName.trim()) {
      onSave({ ...quiz, name: quizName });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl p-0">
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <i className="fas fa-times text-lg"></i>
        </button>
        <form onSubmit={handleSubmit} className="px-6 py-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Edit Quiz
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
            Note: Editing a quiz will only change it for new students. Anyone
            who has already begun or completed the course will still see the
            version they originally received.
          </p>
          <label className="block text-gray-900 font-semibold text-sm mb-2">
            Quiz name
          </label>
          <input
            type="text"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
          />
          <div className="mt-8 flex justify-between">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full px-6 py-2"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => onDelete(quiz)}
              className="border border-teal-400 text-teal-500 text-sm font-semibold rounded-full px-6 py-2 hover:bg-teal-50"
            >
              Delete?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
