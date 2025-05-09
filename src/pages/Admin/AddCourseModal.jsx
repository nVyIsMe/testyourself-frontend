import React, { useState } from "react";

export default function AddCourseModal({ onClose }) {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ courseName, description, image });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Course</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Course name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Course description
            </label>
            <textarea
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Course image
            </label>
            <label className="block w-full h-48 bg-gray-100 border-2 border-dashed rounded-md flex items-center justify-center">
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
              {image ? (
                <img
                  src={image}
                  alt="preview"
                  className="h-full object-contain"
                />
              ) : (
                <p>Click to upload image</p>
              )}
            </label>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="submit"
              className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
