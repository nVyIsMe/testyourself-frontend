import React, { useState } from "react";
import AddCourseModal from "./AddCourseModal";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([
    { name: "Text main", quizzes: "Text", author: "Text", added: "Text" },
    { name: "Text main", quizzes: "Text", author: "Text", added: "Text" },
    { name: "Text main", quizzes: "Text", author: "Text", added: "Text" },
    { name: "Text main", quizzes: "Text", author: "Text", added: "Text" },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Add Course
          </button>
          <button className="text-teal-600 hover:underline text-sm font-medium">
            Exit Admin
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-600 text-sm font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Quizzes</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Added</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {courses.map((course, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 border-t border-gray-200"
              >
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.quizzes}</td>
                <td className="px-6 py-4">{course.author}</td>
                <td className="px-6 py-4">{course.added}</td>
                <td className="px-6 py-4 text-right text-gray-400">&gt;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>1 – 5 of 123</span>
        <div className="flex gap-2">
          <button className="hover:text-gray-700">&laquo;</button>
          <button className="hover:text-gray-700">&lsaquo;</button>
          <button className="hover:text-gray-700">&rsaquo;</button>
          <button className="hover:text-gray-700">&raquo;</button>
        </div>
      </div>

      {/* Empty state (optional) */}
      {courses.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          <p className="text-lg font-medium">No courses found.</p>
          <p className="text-sm">Add courses to see them here.</p>
        </div>
      )}

      {/* Modal */}
      {showModal && <AddCourseModal onClose={() => setShowModal(false)} />}

      {/* Footer Note */}
      <footer className="mt-12 text-center text-xs text-gray-400">
        <p>
          Copyright 2025 Buzzy Buzz (v2.1.1) &nbsp; | &nbsp;
          <a href="#" className="hover:underline">
            Terms & conditions
          </a>{" "}
          &nbsp; | &nbsp; Powered by{" "}
          <span className="text-teal-500">buzzy</span>
        </p>
      </footer>
    </div>
  );
}
