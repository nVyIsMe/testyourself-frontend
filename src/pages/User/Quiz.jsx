import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import QuizOption from "./QuizOption";

  const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  
  const currentQuestion = parseInt(id) || 1;
  const totalQuestions = 8;

  const handleNext = () => {
    if (selected !== null) {
      if (currentQuestion < totalQuestions) {
        navigate(`/quiz/${currentQuestion + 1}`);
      } else {
        navigate(`/quiz/${id}/complete`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header current="My Courses" />

      <main className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-12 gap-10">
        {/* Question Section */}
        <section className="flex-1">
          <div className="text-sm text-[#8B9AB1] font-medium mb-1">
            QUESTION ({currentQuestion})
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gray-500">Sample Question {currentQuestion}?</h2>
          <div className="space-y-4">
            {["Answer 1", "Answer 2", "Answer 3", "Answer 4"].map(
              (ans, idx) => (
                <QuizOption
                  key={idx}
                  selected={selected === idx}
                  onClick={() => setSelected(idx)}
                >
                  {ans}
                </QuizOption>
              )
            )}
          </div>
        </section>

        {/* Image Section */}
        <section className="flex-1 bg-[#E9F0F5] rounded-lg shadow-md p-6 flex items-center justify-center aspect-[4/3]">
          <img
            src="https://storage.googleapis.com/a1aa/image/58bbf0b5-8f10-495f-308a-07ee978ba6c9.jpg"
            alt="Question Visual"
            className="max-h-full max-w-full object-contain rounded-md"
          />
        </section>
      </main>

      {/* Progress + Navigation Footer */}
      <footer className="bg-[#E9F0F5] max-w-6xl mx-auto px-6 py-4 rounded-t-lg shadow-inner">
        <div className="flex items-center justify-between text-sm text-[#8B9AB1]">
          <button 
            className="border border-[#1AA99F] text-[#1AA99F] rounded-full px-4 py-1.5 hover:bg-[#d0f0ef] transition disabled:opacity-50"
            onClick={() => navigate(`/quiz/${currentQuestion - 1}`)}
            disabled={currentQuestion <= 1}
          >
            Prev
          </button>
          <span>{currentQuestion} of {totalQuestions}</span>
          <button
            onClick={handleNext}
            className="bg-[#1AA99F] text-white rounded-full px-6 py-2 hover:bg-[#178a87] disabled:opacity-50 transition"
            disabled={selected === null}
          >
            {currentQuestion === totalQuestions ? 'Complete' : 'Next'}
          </button>
        </div>

        {/* Optional: Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-[#1AA99F] transition-all"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;