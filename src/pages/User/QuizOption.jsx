import React from "react";

const QuizOption = ({ children, selected, correct, onClick }) => {
  const base =
    "w-full rounded-full py-2.5 text-center text-sm font-normal focus:outline-none focus:ring-2 transition";
  const states = selected
    ? "bg-[#1AA99F] text-white focus:ring-[#178a87]"
    : "border border-[#1AA99F] text-[#1AA99F] hover:bg-[#e0f7f6] focus:ring-[#1AA99F]";
  const correctStyles = correct ? "bg-green-500 text-white" : "";

  return (
    <button
      type="button"
      className={`${base} ${states} ${correctStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default QuizOption;
