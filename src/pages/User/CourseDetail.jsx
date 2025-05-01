import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Header current="My Courses" />
      {/* Course Hero */}
      <section className="bg-gray-100 px-6 py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <nav className="text-xs text-gray-400 mb-1 select-none">
            Dashboard / My Courses / Course {id}
          </nav>
          <h1 className="text-2xl font-semibold mb-3">Course {id} name</h1>
          <p className="max-w-xl text-base leading-relaxed">
            Course description. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras justo odio, dapibus ac facilisis in.
          </p>
        </div>
        <div className="bg-gray-300 w-full max-w-xs h-40 flex items-center justify-center rounded-md" />
      </section>

      {/* Quizzes */}
      <section className="px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Quizzes</h2>
          <label className="inline-flex items-center text-gray-400 text-sm select-none cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-teal-500 relative transition-colors" />
            <span className="ml-3">Hide completed</span>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Link
              to={`/quiz/${idx + 1}`}
              key={idx}
              className="relative bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between overflow-hidden"
            >
              <div>
                <h3 className="font-semibold text-sm">Quiz name</h3>
                <p className="text-xs text-gray-500">33 Questions</p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gray-100 flex items-center justify-center pointer-events-none">
                <img
                  src="https://storage.googleapis.com/a1aa/image/dc2aa7fd-1ecd-4c55-730c-2d1ec3a7bf0d.jpg"
                  alt="icon"
                  className="object-contain h-12"
                />
              </div>
            </Link>
          ))}
        </div>
        <button className="mt-10 border border-teal-400 text-teal-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-teal-50">
          Quit course?
        </button>
      </section>
      <Footer />
    </>
  );
};

/**
 * Need to update this page later onto the project
 */

export default CourseDetail;
