import React from "react";

export default function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Are you sure?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Deleting this course will remove all its data, including any quizzes
          and questions. This action cannot be undone!
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold"
            onClick={onCancel}
          >
            No, go back
          </button>
          <button
            className="border border-teal-500 text-teal-500 px-6 py-2 rounded-full font-semibold hover:bg-teal-50"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
