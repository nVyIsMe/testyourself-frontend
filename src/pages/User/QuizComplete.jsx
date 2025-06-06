import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const QuizComplete = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header current="My Courses" />
      <main className="flex-grow flex flex-col justify-center items-center px-6 text-center bg-[#e8f0f4]"> {/* Added bg-white here */}
      <img 
          src="/CongratsBro.png" 
          alt="Congratulations" 
          className="w-50 h-50 object-cover rounded-lg mb-4"
        />
        <h2 className="font-semibold text-lg mb-2 text-gray-600">Congratulations!</h2>
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
      <footer className="flex items-center justify-between bg-[#e8f0f4] px-10 py-8 text-l text-[#8a9ba8]">
        <button className="border border-[#1da39c] text-[#1da39c] rounded-full px-6 py-3 hover:bg-[#1da39c] hover:text-white">
          Prev
        </button>
        <div>8 of 8</div>
      </footer>
    </>
  );
};

export default QuizComplete;