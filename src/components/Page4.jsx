import React, { useState } from "react";

const mathLevel = [
  {
    id: 21,
    mathFormula: "3x + 5 = ?",
    heading: "Arithmetic",
    level: "Introductory",
  },
  {
    id: 22,
    mathFormula: "x + 2x + 1 = ?",
    heading: "Basic Algebra",
    level: "Foundational",
  },
  {
    id: 23,
    mathFormula: "2x + 3 = 8",
    heading: "Intermediate Algebra",
    level: "Intermediate",
  },
  {
    id: 24,
    mathFormula: "∫(2x + 3) dx",
    heading: "Calculus",
    level: "Advanced",
  },
];

const Page4 = () => {
  const [selectedMathFormula, setSelectedMathFormula] = useState(null);

  const handleSelectMathFormula = (mathFormula) => {
    setSelectedMathFormula(mathFormula);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl pt-3">
          What is your math comfort level?
        </h1>
        <p className="text-sm text-center md:text-xl lg:text-2xl mt-3 text-gray-500">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {mathLevel.map((item) => (
          <div
            className={`w-56 h-56 mt-20 mb-4 border-2 border-gray-500 flex justify-center items-center cursor-pointer ${
              selectedMathFormula === item.mathFormula ? "bg-white shadow-lg transform scale-105 border-yellow-500" : ""
            }`}
            key={item.id}
            onClick={() => handleSelectMathFormula(item.mathFormula)}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-3xl">
                <var>{item.mathFormula}</var>
              </div>
              <h1 className="font-bold mt-12">{item.heading}</h1>
              <p className="text-gray-500">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;

