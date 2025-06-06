import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    // Added bg-white to the outermost div to ensure a white background for the entire page content.
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      {/* Banner */}
      <section className="relative bg-[url('/HeroCenter.png')] bg-cover bg-center h-30 sm:h-40 md:h-50 lg:h-65">
      </section>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        {/* My Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-teal-600 font-semibold text-lg">Recent Quizzes</h2>
            <Link to="/courses">
            <button className="bg-teal-600 text-white text-xs font-semibold rounded-full px-5 py-1 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              View all
            </button>
            </Link>
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
        </section>

        {/* Newest Courses Section */}
        {/* Removed bg-gray-50 to make it white, consistent with the overall background. */}
        <section className="mt-24 rounded-lg py-10 px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-teal-600 font-semibold text-lg">
              Newest Quizzes
            </h2>
            <Link to="/browse ">
            <button className="bg-teal-600 text-white text-xs font-semibold rounded-full px-5 py-1 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              View all
            </button>
            </Link>
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
    </div>
  );
};

export default Dashboard;
