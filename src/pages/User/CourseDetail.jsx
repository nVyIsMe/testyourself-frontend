import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CourseDetail = () => {
  const { id } = useParams();

  // Dummy data (replace with real data later)
  const course = {
    name: `React Fundamentals`,
    description:
      "Learn the basics of building modern web applications using React. This course covers components, state, props, and hooks.",
    thumbnail:
      "https://via.placeholder.com/300x150?text=Course+Image",
    quizzes: Array.from({ length: 8 }).map((_, idx) => ({
      id: idx + 1,
      name: `Quiz ${idx + 1}`,
      questions: 33,
      icon:
        "https://storage.googleapis.com/a1aa/image/dc2aa7fd-1ecd-4c55-730c-2d1ec3a7bf0d.jpg",
    })),
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-white px-6 py-10 border-b">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <nav className="text-sm text-gray-400 mb-2 select-none">
              Dashboard / My Courses / Course {id}
            </nav>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {course.name}
            </h1>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              {course.description}
            </p>
          </div>
          <div
            className="w-full max-w-xs h-40 bg-gray-200 bg-center bg-cover rounded-md shadow-sm"
            style={{ backgroundImage: `url('${course.thumbnail}')` }}
          />
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Quizzes</h2>
          <label className="flex items-center text-sm text-gray-600 gap-2 select-none">
            <span>Hide completed</span>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-teal-500 transition-colors" />
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-4" />
            </div>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {course.quizzes.map((quiz) => (
            <Link
              to={`/quiz/${quiz.id}`}
              key={quiz.id}
              className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-base text-gray-800 group-hover:text-teal-600">
                    {quiz.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {quiz.questions} Questions
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={quiz.icon}
                    alt={`${quiz.name} icon`}
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <button className="border border-red-400 text-red-500 rounded-full px-6 py-2 text-sm font-semibold hover:bg-red-50 transition">
            Leave Course
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseDetail;
