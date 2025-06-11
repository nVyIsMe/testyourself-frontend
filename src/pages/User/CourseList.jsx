import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";
import { getAllCourses, createCourse, deleteCourse, updateCourse } from "../../api";  // import thêm updateCourse
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);  // Thêm state để theo dõi khóa học đang sửa

  // Fetch courses from API
  const fetchCourses = () => {
    getAllCourses()
      .then((res) => {
        setCourses(res.data); // Update courses with the data from API
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses(); // Fetch courses when the component mounts
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Bạn có chắc muốn xoá khóa học này?")) return;
    deleteCourse(id)
      .then(() => {
        alert("Xoá thành công");
        fetchCourses(); // Reload the course list after deletion
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
        fetchCourses(); // Reload the course list after adding a new course
      })
      .catch(() => alert("Thêm khóa học thất bại"));
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setNewTitle(course.name);
    setNewDescription(course.description);
  };

  const handleUpdateCourse = () => {
    if (!newTitle.trim()) {
      alert("Tên khóa học không được để trống");
      return;
    }

    // Gọi API để cập nhật khóa học
    updateCourse(editingCourse.id, { name: newTitle, description: newDescription })
      .then(() => {
        alert("Cập nhật khóa học thành công");
        setEditingCourse(null); // Reset the editing state
        setNewTitle("");
        setNewDescription("");
        fetchCourses(); // Reload the course list after update
      })
      .catch(() => alert("Cập nhật khóa học thất bại"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header current="My Courses" />

      {/* Banner */}
      <section className="relative bg-[url('/HeroCenter2.png')] bg-cover bg-center h-30 sm:h-40 md:h-50 lg:h-65"></section>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-teal-600">My Courses</h2>
          <button
            onClick={() => setShowAdd(true)}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Add a course...
          </button>
        </div>

        {/* Add or Edit Course Form */}
        {(showAdd || editingCourse) && (
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
              {editingCourse ? (
                <button
                  onClick={handleUpdateCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Cập nhật
                </button>
              ) : (
                <button
                  onClick={handleAddCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Lưu
                </button>
              )}
              <button
                onClick={() => { setShowAdd(false); setEditingCourse(null); }}
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
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              courses.map((course) => (
                <div
                  key={course.id}
                  className="relative bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4 w-64 h-80" // Đảm bảo các khóa học có kích thước cố định
                >
                  <CourseCard
                    id={course.id}
                    title={course.name}
                    description={course.description}
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEditCourse(course)}  // Kích hoạt form chỉnh sửa khi nhấn "Sửa"
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
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="text-xs text-gray-400 mb-6">
            <span>1 - {courses.length} of 123</span>
            <a className="text-teal-500 font-semibold hover:underline" href="#">
              Load more
            </a>
          </div>
        </section>

        {/* Empty State when no courses */}
        {courses.length === 0 && !loading && (
          <div className="text-center mt-20">
            <p className="text-lg text-gray-600 font-medium">Need more courses?</p>
            <p className="text-sm text-gray-400 mt-2">
              Browse the available courses here.
            </p>
            <Link to="/browse">
              <button className="mt-6 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
                Browse Courses
              </button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CourseList;
