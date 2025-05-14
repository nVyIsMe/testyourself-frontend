import React, { useState } from "react";

export default function EditCourseModal({ course, onClose, onSave, onDelete }) {
  const [name, setName] = useState(course.name || "");
  const [description, setDescription] = useState(course.description || "");
  const [imagePreview, setImagePreview] = useState(course.image || null);

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImagePreview(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourse = { ...course, name, description, image: imagePreview };
    onSave(updatedCourse); // gọi callback từ parent
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-2">Edit Course</h2>
        <p className="text-sm text-gray-500 mb-4">
          Note: Editing a course will only change it for new students. Anyone
          who has already begun or completed this course will still see the
          version they originally received.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Course name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Course name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Course description
            </label>
            <textarea
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Course description"
              required
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Course image
            </label>
            <label className="block w-full h-48 bg-gray-100 border-2 border-dashed rounded-md cursor-pointer flex items-center justify-center text-gray-400 hover:border-teal-400 hover:text-teal-600">
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <svg
                    className="mx-auto mb-2 w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 16l4-4a3 3 0 014 0l4 4m0 0l4-4a3 3 0 014 0l4 4M5 20h14"
                    ></path>
                  </svg>
                  <p>Click to upload or replace an image</p>
                </div>
              )}
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-end mt-4">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => {
                onDelete(course.id);
                onClose();
              }}
              className="border border-teal-500 text-teal-500 px-6 py-2 rounded-full font-semibold hover:bg-teal-50"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
