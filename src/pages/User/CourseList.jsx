import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <>
      <Header current="My Courses" />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">My Courses</h2>
          <label className="inline-flex items-center gap-2 text-gray-400 text-sm select-none">
            <input type="checkbox" className="toggle toggle-sm" disabled /> Hide
            completed
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <CourseCard
              key={idx}
              id={idx + 1}
              title="Course name"
              description="Description 3 lines max. Lorem ipsum dolor sit amet."
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseList;
