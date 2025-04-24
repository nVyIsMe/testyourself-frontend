import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuizOption from "./QuizOption";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected !== null) navigate(`/quiz/${id}/complete`);
  };

  return (
    <>
      <Header current="My Courses" />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-12">
        {/* Question */}
        <section className="flex-1 max-w-lg">
          <div className="mb-1 text-xs font-semibold text-[#8B9AB1] select-none">
            QUESTION (1)
          </div>
          <h2 className="text-2xl font-semibold mb-6">Sample Question {id}?</h2>
          <div className="space-y-3">
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
          <p className="mt-4 text-center text-xs text-gray-500 select-none">
            This is replaced with a code widget
          </p>
        </section>
        {/* Image */}
        <section className="flex-1 bg-[#E9F0F5] flex items-center justify-center max-w-lg aspect-[4/3]">
          <img
            src="https://storage.googleapis.com/a1aa/image/58bbf0b5-8f10-495f-308a-07ee978ba6c9.jpg"
            alt="placeholder"
            className="max-w-full max-h-full object-contain"
          />
        </section>
      </main>
      <footer className="bg-[#E9F0F5] flex items-center justify-between max-w-7xl mx-auto px-6 h-16 text-xs text-[#8B9AB1]">
        <button className="border border-[#1AA99F] text-[#1AA99F] rounded-full px-4 py-1.5 hover:bg-[#d0f0ef]">
          Prev
        </button>
        <span className="w-full text-center">1 of 8</span>
        <button
          onClick={handleNext}
          className="bg-[#1AA99F] text-white rounded-full px-6 py-2 hover:bg-[#178a87] disabled:opacity-50"
          disabled={selected === null}
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Quiz;
