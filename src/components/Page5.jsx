import React from "react";
import monster from "../assets/svg/monster/monster.jpg";
import { IoStar } from "react-icons/io5";

const Page5 = () => {
  const stars = Array(5).fill(null);
  return (
    <div className="flex flex-wrap justify-center items-center w-full mx-auto max-w-screen-lg mt-16">
     
      <div>
        <img src={monster} height={400} width={400} alt="monster" />
      </div>
      <div className="flex flex-col w-1/2 mx-2">
        <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl pt-3">
          you're on your way!
        </h1>
        <div className="flex mt-12">
          {stars.map((_, index) => (
            <p key={index} className="flex">
              <IoStar className="text-yellow-500 text-2xl "/>
            </p>
          ))}
        </div>

        <p className="mt-2">
          "through its engaging and well-structured courses, Brilliant has taught
          me mathematical concepts that I previously struggled to understand. I
          now feel confident approaching both technical job interviews and real
          world problem-solving situations."
        </p>
        <p className="mt-2">- Jacob S.</p>
      </div>
    
    </div>
  );
};

export default Page5;

