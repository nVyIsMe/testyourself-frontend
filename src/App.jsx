import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Login/WelcomePage";
import Login from "./pages/Login/Login";
import LoginConfirm from "./pages/Login/LoginConfirm";
import AccountSetup from "./pages/Login/AccountSetup";

// Student pages
import Dashboard from "./pages/User/Dashboard";
import CourseList from "./pages/User/CourseList";
import CourseDetail from "./pages/User/CourseDetail";
import Quiz from "./pages/User/Quiz";
import QuizComplete from "./pages/User/QuizComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginConfirm" element={<LoginConfirm />} />
        <Route path="/AccountSetup" element={<AccountSetup />} />

        {/* Student routes (protected)*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz/:id/complete" element={<QuizComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
