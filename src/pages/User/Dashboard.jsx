import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";

const Dashboard = () => {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="relative bg-[url('src\assets\Hero Center.png')] bg-cover bg-center h-36 sm:h-44 md:h-56 lg:h-60">
        <div className="absolute inset-0 bg-[#0f172a]/80 flex items-center justify-center">
          <p className="text-white text-lg sm:text-xl font-light">
            Get smarter. And have fun.
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        {/* My Courses */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-semibold text-lg">My Courses</h2>
            <button className="bg-teal-600 text-white text-xs font-semibold rounded-full px-5 py-1 hover:bg-teal-700 focus:outline-none">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

          {/* Empty‑state note */}
          <div className="text-center mt-16">
            <p className="text-gray-400 font-semibold">
              You’re not taking any courses.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Browse the available courses, and when you take a course it will
              display here.
            </p>
            <button className="mt-4 bg-teal-600 text-white text-xs font-semibold rounded-full px-6 py-1 hover:bg-teal-700">
              Browse courses
            </button>
          </div>
        </section>

        {/* Newest Courses */}
        <section className="mt-24 bg-gray-50 rounded-lg py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-semibold text-lg">
              Newest Courses
            </h2>
            <button className="bg-teal-600 text-white text-xs font-semibold rounded-full px-5 py-1 hover:bg-teal-700">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <CourseCard
                key={idx}
                id={idx + 101}
                title={idx === 0 ? "Course name" : "Card title"}
                subtitle={idx === 0 ? "Info eg status" : "Subtitle"}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
