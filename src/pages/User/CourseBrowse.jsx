import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from './CourseCard';

const CoursesBrowse = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      {/* Info Section */}
      {/* Moved the descriptive text and the 'Notice Man' image into a dedicated section. */}
      <section className="bg-gray-100 relative px-10 py-10 md:py-16 md:px-20 overflow-hidden">
        <p className="max-w-4xl text-gray-700 text-base md:text-lg leading-relaxed">
          Browse the quizzes below. Click on one to view its details. If you're interested, take the quizz
          and it will be added to your "My Quizzes" list
        </p>
        <img
          alt="Notice Man"
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-6 top-1/2 -translate-y-1/2 opacity-100 w-30 h-30 md:w-40 md:h-40"
          height="160"
          src="https://www.kindpng.com/picc/m/121-1214526_man-with-symbol-exclamation-mark-man-png-transparent.png"
          width="160"
        />
      </section>

      {/* Main content area for courses */}
      <main className="max-w-7xl mx-auto px-6 py-8 md:px-12">
        {/* All Courses Section */}
        <section>
          <h2 className="font-semibold text-teal-600 mb-6">All Quizzes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <CourseCard
                key={idx}
                id={idx + 1}
                title={idx === 0 ? "Course name" : "Card title"}
                subtitle={idx === 0 ? "info eg status" : "Subtitle"}
                description="Description 3 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-20">
            <span>1 - 8 of 123</span>
            <a className="text-teal-500 font-semibold hover:underline" href="#">
              Load more
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesBrowse;