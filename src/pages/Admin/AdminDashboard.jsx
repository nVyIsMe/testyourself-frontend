// src/pages/Admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import { getAllCourses, getAllUsers } from "../../api"; // tự chỉnh api

function TableHead({ columns }) {
  return (
    <thead className="bg-gray-100 text-gray-700 text-base">
      <tr>
        {columns.map((col, i) => (
          <th key={i} className="px-4 py-3 font-bold text-left">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function QuizzesTable({ quizzes }) {
  return (
    <table className="w-full text-sm">
      <TableHead columns={["", "Name", "Quizzes", "Author", "Added", ""]} />
      <tbody>
        {quizzes.map((quiz, idx) => (
          <tr
            key={quiz.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >
            <td className="px-4 py-3">
              <FaUserGraduate className="text-teal-500 text-xl" />
            </td>
            <td className="px-4 py-3 font-medium">{quiz.name}</td>
            <td className="px-4 py-3">{quiz.quizCount}</td>
            <td className="px-4 py-3">{quiz.author}</td>
            <td className="px-4 py-3">{quiz.added}</td>
            <td className="px-4 py-3 text-right">&gt;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function UsersTable({ users, onRowClick }) {
  return (
    <table className="w-full text-sm">
      <TableHead columns={["", "Name", "Level", "Status", "ID", ""]} />
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className="border-b last:border-none hover:bg-gray-50 transition cursor-pointer"
            onClick={() => onRowClick(user)}
          >
            <td className="px-4 py-3">
              <FaUserGraduate className="text-teal-500 text-xl" />
            </td>
            <td className="px-4 py-3 font-medium">{user.name}</td>
            <td className="px-4 py-3">{user.level}</td>
            <td className="px-4 py-3">{user.status}</td>
            <td className="px-4 py-3">{user.id}</td>
            <td className="px-4 py-3 text-right">&gt;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AdminDashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Mock API, replace with real API
  useEffect(() => {
    setQuizzes([
      { id: 1, name: "Quiz 1", quizCount: 10, author: "Text", added: "Text" },
      { id: 2, name: "Quiz 2", quizCount: 8, author: "Text", added: "Text" },
      {
        id: 3,
        name: "Text main",
        quizCount: 15,
        author: "Text",
        added: "Text",
      },
      { id: 4, name: "Text main", quizCount: 7, author: "Text", added: "Text" },
      {
        id: 5,
        name: "Text main",
        quizCount: 13,
        author: "Text",
        added: "Text",
      },
    ]);
    setUsers([
      {
        id: "231456893",
        name: "Trương Trúc Thanh",
        level: "Beginner",
        status: "Active",
      },
      {
        id: "34512367",
        name: "Phuong Anh Dao",
        level: "Beginner",
        status: "On hold",
      },
      {
        id: "123478567",
        name: "Phuc Nguyen An",
        level: "Beginner",
        status: "Active",
      },
      {
        id: "231456893",
        name: "Ngo Thanh Vinh",
        level: "Beginner",
        status: "On hold",
      },
      {
        id: "567894543",
        name: "Bui Thanh Thuy",
        level: "Beginner",
        status: "Active",
      },
      {
        id: "234789456",
        name: "Nguyen Quang Thien",
        level: "Beginner",
        status: "Active",
      },
    ]);
  }, []);

  const handleUserClick = (user) => {
    navigate(`/admin/users/${user.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-2xl font-bold text-teal-600 flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-8" />
          TestYourself
        </div>
        <div className="flex items-center gap-5">
          <button className="text-teal-500 hover:underline">Exit Admin</button>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
        </div>
      </div>

      {/* Quizzes table */}
      <div className="bg-white rounded-xl shadow p-6 mt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">Quizzes</div>
          <button className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-teal-600 transition">
            <HiOutlinePlus className="text-lg" /> Add Quizzes
          </button>
        </div>
        <QuizzesTable quizzes={quizzes} />
        <div className="mt-2 text-gray-400 text-xs">1 - 5 of 123</div>
      </div>

      {/* Users table */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">Users</div>
          <button className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-teal-600 transition">
            <HiOutlinePlus className="text-lg" /> Add User
          </button>
        </div>
        <UsersTable users={users} onRowClick={handleUserClick} />
        <div className="mt-2 text-gray-400 text-xs">1 - 5 of 123</div>
      </div>
    </div>
  );
}
