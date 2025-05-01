import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const QuizComplete = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header current="My Courses" />
      <main className="flex-grow flex flex-col justify-center items-center px-6 text-center">
        <svg
          className="w-12 h-12 text-[#1da39c] mb-4"
          fill="#1da39c"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
        <h2 className="font-semibold text-lg mb-2">Congratulations!</h2>
        <p className="text-sm text-gray-600 mb-6">
          You've completed this quiz.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="bg-[#1da39c] text-white rounded-full px-6 py-2 hover:bg-[#178a82]"
        >
          Continue
        </button>
      </main>
      <footer className="flex items-center justify-between bg-[#e8f0f4] px-6 py-4 text-xs text-[#8a9ba8]">
        <button className="border border-[#1da39c] text-[#1da39c] rounded-full px-4 py-1 hover:bg-[#1da39c] hover:text-white">
          Prev
        </button>
        <div>8 of 8</div>
      </footer>
    </>
  );
};

export default QuizComplete;
