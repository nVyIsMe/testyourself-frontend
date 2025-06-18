import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../../api";

const QuizizzPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getCourseById(id)
      .then(res => {
        setCourse(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch course:", err);
        setCourse({ name: "Course not found" });
      });
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleQuestionTypeSelection = (type) => {
    alert(`You selected: ${type} for course ID: ${id}`);
    closeModal();
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 font-sans text-gray-900 min-h-screen">
      <header className="flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Link to="/courses" className="p-2 rounded border border-gray-300 hover:bg-gray-100">
            <i className="fas fa-arrow-left text-gray-700"></i>
          </Link>
          <span className="text-sm font-semibold">
            Quiz for: {course.name}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100">
            <i className="fas fa-cog text-gray-700"></i>
            <span>Settings</span>
          </button>
          <button className="flex items-center space-x-1 border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100">
            <i className="fas fa-play text-gray-700"></i>
            <span>Preview</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded px-4 py-2">
            Publish
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        <section className="flex-1 flex flex-col space-y-4">
          <form className="bg-white rounded-md p-4 shadow-sm" aria-label="Search questions from Quizizz Library">
            <label htmlFor="search" className="block font-semibold text-sm mb-1">
              Search questions from Quizizz Library
            </label>
            <div className="flex">
              <input
                id="search"
                type="text"
                placeholder="Enter topic name"
                className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="flex items-center space-x-2 border border-l-0 border-gray-300 rounded-r-md bg-white px-4 text-sm text-gray-700 hover:bg-gray-100"
              >
                <i className="fas fa-search"></i>
                <span>Search</span>
              </button>
            </div>
          </form>

          <button
            id="addQuestionBtn"
            type="button"
            className="self-center mt-4 flex items-center space-x-2 border border-purple-400 text-purple-700 rounded px-4 py-2 text-sm hover:bg-purple-100"
            onClick={openModal}
          >
            <i className="fas fa-plus"></i>
            <span>Add Question</span>
          </button>
        </section>
      </main>

      {isModalOpen && (
        <div
          id="modalBackdrop"
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h2 className="text-lg font-semibold mb-4">Choose question type</h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleQuestionTypeSelection("Multiple Choice")}
                className="w-full border border-purple-600 text-purple-700 rounded px-4 py-2 hover:bg-purple-100 font-semibold"
              >
                Multiple Choice
              </button>
              <button
                onClick={() => handleQuestionTypeSelection("Fill in the Blank")}
                className="w-full border border-purple-600 text-purple-700 rounded px-4 py-2 hover:bg-purple-100 font-semibold"
              >
                Fill in the Blank
              </button>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizizzPage;
