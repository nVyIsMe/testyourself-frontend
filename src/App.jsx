import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth & onboarding pages
import WelcomePage from "./pages/Login/WelcomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register"; // ✅ thêm dòng này

// Main app pages
import Dashboard from "./pages/User/Dashboard";
import CourseList from "./pages/User/CourseList";
import CourseDetail from "./pages/User/CourseDetail";
import Quiz from "./pages/User/Quiz";
import QuizComplete from "./pages/User/QuizComplete";
import CourseBrowse from "./pages/User/CourseBrowse";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCourseDetail from "./pages/Admin/AdminCourseDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ thêm route này */}

        {/* Main app (protected) routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz/:id/complete" element={<QuizComplete />} />
        <Route path="/browse" element={<CourseBrowse />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/courses/:id" element={<AdminCourseDetail />} />
      </Routes>
    </Router>
  );
}
