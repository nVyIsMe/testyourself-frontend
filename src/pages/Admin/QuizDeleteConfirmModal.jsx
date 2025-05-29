import React from "react";

export default function QuizDeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-center text-gray-900 font-semibold text-lg mb-4">
          Are you sure?
        </h2>
        <p className="text-center text-gray-700 text-sm leading-relaxed mb-8">
          Deleting this quiz will remove it only for any new students of this
          course, not existing students (they will still see the version they
          originally downloaded).
        </p>
        <div className="flex justify-between">
          <button
            className="bg-teal-600 text-white text-sm font-medium rounded-full px-5 py-2.5 hover:bg-teal-700 transition"
            onClick={onCancel}
          >
            No, go back
          </button>
          <button
            className="border border-teal-400 text-teal-500 text-sm font-normal rounded-full px-5 py-2.5 hover:bg-teal-50 transition"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
