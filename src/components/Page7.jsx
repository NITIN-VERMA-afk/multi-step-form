import React, { useState } from "react";
import Einstin from "../assets/svg/smallEinstein.webp";

const resultData = [
  {
    id: 31,
    heading: "Foundational Math",
    para: "Build your foundational skills in Algebra, geometry, and probability",
  },
  {
    id: 32,
    heading: "Mathematical Thinking",
    para: "Build your foundational skills in Algebra, geometry, and probability",
  },
];

const Page7 = () => {
  const [LearningPath, setLearningPath] = useState(null);

  const handleLearningPath = (path) => {
    setLearningPath(path);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h1 className="font-bold text-xl md:text-4xl lg:text-5xl mt-3">
        Learning path based on your answers
      </h1>
      <p className="text-gray-500 mt-5">
        Choose one and get started. You can switch anytime.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {resultData.map((item) => (
          <div
            key={item.id}
            className={`my-5 p-4 border border-gray-300 rounded-md shadow-md flex w-full md:w-1/2 lg:w-1/3 ${
              LearningPath === item.id ? "bg-white shadow-lg transform scale-105 border-gray-500" : ""
            }`}
            onClick={() => handleLearningPath(item.id)}
          >
            <div className="flex flex-col w-full">
              <h2 className="font-bold text-xl">{item.heading}</h2>
              <p className="text-gray-700">{item.para}</p>
            </div>
            <img src={Einstin} alt="Einstein" className="w-24 h-24 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page7;

