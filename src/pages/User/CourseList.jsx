import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";
import { getAllCourses, createCourse, deleteCourse } from "../../api";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const fetchCourses = () => {
    getAllCourses()
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Bạn có chắc muốn xoá khóa học này?")) return;
    deleteCourse(id)
      .then(() => {
        alert("Xoá thành công");
        fetchCourses();
      })
      .catch(() => alert("Xoá thất bại"));
  };

  const handleAddCourse = () => {
    if (!newTitle.trim()) {
      alert("Tên khóa học không được để trống");
      return;
    }
    createCourse({ name: newTitle, description: newDescription })
      .then(() => {
        alert("Thêm khóa học thành công");
        setShowAdd(false);
        setNewTitle("");
        setNewDescription("");
        fetchCourses();
      })
      .catch(() => alert("Thêm khóa học thất bại"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header current="My Courses" />

      {/* Banner */}
      <section className="relative bg-[url('/HeroCenter2.png')] bg-cover bg-center h-30 sm:h-40 md:h-50 lg:h-65">
      </section>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-teal-600">My Quizzes</h2>
          <button
            onClick={() => setShowAdd(true)}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Add a set...
          </button>
        </div>

        {/* Add Course Form */}
        {showAdd && (
          <div className="mb-6 p-4 border border-gray-300 rounded bg-gray-50 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Tên khóa học"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Mô tả khóa học"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={handleAddCourse}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                Huỷ
              </button>
            </div>
          </div>
        )}

        {/* All Courses Section */}
        <section>
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

        {/* Course Grid or Empty State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : courses.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-lg text-gray-600 font-medium">Need more quizz?</p>
            <p className="text-sm text-gray-400 mt-2">
              Browse the available quizzes here.
            </p>
            <Link to="/browse">
            <button className="mt-6 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
              Browse Quizzes
            </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="relative bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4"
                >
                  <CourseCard
                    id={course.id}
                    title={course.name}
                    description={course.description}
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() =>
                        alert(`Chức năng sửa khóa học ${course.id} sẽ làm sau`)
                      }
                      className="px-2 py-1 text-xs bg-yellow-400 rounded hover:bg-yellow-500 transition"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      Xoá
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Pagination Display */}
            <div className="text-sm text-gray-500 mt-6 text-center">
              1 – {courses.length} of 123
              <button className="ml-3 text-teal-600 hover:underline">Load more</button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CourseList;
