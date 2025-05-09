import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditCourseModal from "./EditCourseModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteSuccessModal from "./DeleteSuccessModal";

export default function AdminCourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    id,
    name: "Course name",
    description:
      "Course description. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis...",
    addedDate: "2025-05-09",
    author: "Admin",
    image: null,
  });

  const [quizzes, setQuizzes] = useState([
    { name: "Quiz Name", questions: "#", author: "Name", added: "Date" },
    { name: "Text main", questions: "Text", author: "Text", added: "Text" },
    { name: "Text main", questions: "Text", author: "Text", added: "Text" },
    { name: "Text main", questions: "Text", author: "Text", added: "Text" },
    { name: "Text main", questions: "Text", author: "Text", added: "Text" },
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdateCourse = (updated) => {
    setCourse(updated);
    console.log("Course updated:", updated);
  };

  const handleDeleteCourse = () => {
    setShowConfirm(true); // bước xác nhận
  };

  const confirmDelete = () => {
    setShowConfirm(false);
    setShowSuccess(true); // hiển thị "Course deleted"
  };

  const finalizeDelete = () => {
    setShowSuccess(false);
    navigate("/admin/dashboard"); // quay về trang dashboard
  };

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {/* Breadcrumb & Title */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <button onClick={() => navigate(-1)} className="mr-2 text-xl">
          &larr;
        </button>
        <span>ADMIN /</span>
        <h1 className="ml-2 font-semibold text-xl text-gray-700">Course</h1>
      </div>

      {/* Course Info */}
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row justify-between mb-6">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {course.name}
          </h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <div>
              <strong>Date added:</strong> {course.addedDate}
            </div>
            <div>
              <strong>Added by:</strong> {course.author}
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          {course.image ? (
            <img
              src={course.image}
              alt="course"
              className="h-40 w-40 object-cover rounded-lg"
            />
          ) : (
            <div className="h-40 w-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              No Image
            </div>
          )}
          <button
            onClick={() => setShowEdit(true)}
            className="mt-4 w-full bg-teal-500 text-white py-1 rounded-full text-sm hover:bg-teal-600"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="bg-white">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Quizzes</h3>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Add Quiz
          </button>
        </div>

        <div className="bg-gray-50 shadow rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="bg-gray-200 text-gray-600 font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Questions</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-left">Added</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((q, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-3">{q.name}</td>
                  <td className="px-6 py-3">{q.questions}</td>
                  <td className="px-6 py-3">{q.author}</td>
                  <td className="px-6 py-3">{q.added}</td>
                  <td className="px-6 py-3 text-right text-gray-400">&gt;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {quizzes.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-lg font-medium">No quizzes found.</p>
            <p className="text-sm">
              Add quizzes to complete setting up the course.
            </p>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Add Quiz
            </button>
          </div>
        )}

        <div className="text-sm text-right text-teal-600 mt-2 hover:underline cursor-pointer">
          Load more
        </div>
      </div>

      {/* Modals */}
      {showEdit && (
        <EditCourseModal
          course={course}
          onClose={() => setShowEdit(false)}
          onSave={handleUpdateCourse}
          onDelete={handleDeleteCourse}
        />
      )}
      {showConfirm && (
        <ConfirmDeleteModal
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmDelete}
        />
      )}
      {showSuccess && <DeleteSuccessModal onContinue={finalizeDelete} />}

      {/* Footer */}
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
