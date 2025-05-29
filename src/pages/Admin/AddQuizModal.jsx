import React, { useState } from "react";

export default function AddQuizModal({ onAdd, onCancel }) {
  const [quizName, setQuizName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizName.trim()) {
      onAdd(quizName);
      setQuizName("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md px-6 py-8 bg-white rounded-2xl shadow-xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Close button */}
        <button
          aria-label="Close"
          type="button"
          className="absolute top-6 right-6 text-gray-900 text-xl"
          onClick={onCancel}
        >
          <i className="fas fa-times"></i>
        </button>

        <h2 className="text-gray-900 font-semibold text-lg mb-6">Add Quiz</h2>
        <label className="block text-gray-900 text-sm mb-2">Quiz name</label>
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          placeholder="Value"
          className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
        />
        <div className="mt-6 flex space-x-4">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full py-2.5 px-6"
          >
            Add
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-teal-400 text-teal-500 text-sm font-semibold rounded-full py-2.5 px-6 hover:bg-teal-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
