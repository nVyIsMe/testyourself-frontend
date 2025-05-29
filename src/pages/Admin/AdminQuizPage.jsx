import React, { useState } from "react";

export default function AdminQuizPage({
  quiz,
  questions,
  onAddQuestion,
  onEditQuiz,
  onBack,
}) {
  const [showEmpty, setShowEmpty] = useState(questions.length === 0);

  return (
    <div
      className="bg-white text-[#1E2B3B] min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <nav className="flex items-center space-x-2 text-[10px] font-semibold text-[#A7B0BE] uppercase tracking-widest">
          <span>Admin</span>
          <span>/</span>
          <span>Course</span>
          <span>/</span>
        </nav>
        <button
          className="bg-[#0E9F8F] text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-[#0b7a72] transition"
          type="button"
          onClick={onEditQuiz}
        >
          Edit
        </button>
      </header>
      {/* Title & back */}
      <div className="flex items-center space-x-3 px-6 py-4">
        <button
          aria-label="Back"
          className="flex items-center justify-center w-8 h-8 border border-[#0E9F8F] rounded-full text-[#0E9F8F] hover:bg-[#d9f3f0] transition"
          onClick={onBack}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-2xl font-semibold">Quiz</h1>
      </div>
      {/* Quiz info */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#F0F5F8] px-6 py-8 relative overflow-hidden">
        <div>
          <h2 className="text-xl font-semibold mb-6">{quiz.name}</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-20 text-xs font-semibold">
            <div>
              <div className="text-[10px]">Date added</div>
              <div className="text-[10px] font-normal">{quiz.addedDate}</div>
            </div>
            <div>
              <div className="text-[10px]">Added by</div>
              <div className="text-[10px] font-normal">{quiz.author}</div>
            </div>
          </div>
        </div>
        <img
          aria-hidden="true"
          className="absolute right-6 top-0 h-[160px] w-[160px] opacity-30 pointer-events-none select-none"
          src="https://storage.googleapis.com/a1aa/image/1e533644-0bbc-4de0-dba4-c0bc5b81a77d.jpg"
          alt=""
        />
      </section>

      {/* Questions Table */}
      {questions.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-8 w-full">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center bg-[#F0F5F8] px-5 py-3 rounded-t-lg font-semibold text-sm">
              <span>Questions</span>
              <button
                className="bg-[#0E9F8F] text-white text-xs font-semibold rounded-full px-4 py-1 hover:bg-[#0b7a72] transition"
                type="button"
                onClick={onAddQuestion}
              >
                Add Questions
              </button>
            </div>
            <table className="w-full border-collapse text-xs">
              <thead className="bg-[#E6EDF3] text-[#6B7A99] font-semibold">
                <tr>
                  <th className="text-left pl-5 py-2">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-question-circle text-[#A7B0BE] text-[12px]"></i>
                      <span>Name</span>
                    </span>
                  </th>
                  <th className="text-right pr-5 py-2">Added</th>
                  <th className="w-6"></th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-100 hover:bg-[#F9FAFB] cursor-pointer"
                  >
                    <td className="pl-5 py-3 flex items-center space-x-3">
                      <i className="fas fa-question-circle text-[#A7B0BE] text-[14px]"></i>
                      <span>{q.name}</span>
                    </td>
                    <td className="pr-5 py-3 text-right">{q.addedDate}</td>
                    <td className="pr-5 py-3 text-right text-[#A7B0BE]">
                      <i className="fas fa-chevron-right"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    className="text-xs text-[#A7B0BE] px-5 py-2 text-left border-t border-gray-100"
                    colSpan="3"
                  >
                    1 - {questions.length} of 123
                    <button
                      className="text-[#0E9F8F] font-semibold ml-4 hover:underline"
                      type="button"
                    >
                      Load more
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      )}

      {/* Empty State */}
      {questions.length === 0 && (
        <section className="flex flex-col items-center justify-center flex-grow px-6 text-center text-[#A7B0BE]">
          <p className="text-lg font-semibold mb-2">No questions found.</p>
          <p className="text-xs mb-8">
            Add questions to complete setting up the quiz.
          </p>
          <button
            className="bg-[#0E9F8F] text-white text-xs font-semibold rounded-full px-6 py-2 hover:bg-[#0b7a72] transition"
            type="button"
            onClick={onAddQuestion}
          >
            Add Questions
          </button>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center text-[10px] text-[#6B7A99] py-6 flex flex-wrap justify-center gap-4 px-6">
        <span>Copyright 2025 Buzzy Buzz (v2.1.1)</span>
        <span>Terms &amp; conditions</span>
        <span className="flex items-center justify-center gap-1">
          Powered by
          <img
            alt="Buzzy logo text in teal color"
            className="inline-block h-3"
            height="12"
            src="https://storage.googleapis.com/a1aa/image/880cf2b2-42fe-4ab1-2d51-5aadbd0d7b3e.jpg"
            width="40"
          />
        </span>
      </footer>
    </div>
  );
}
