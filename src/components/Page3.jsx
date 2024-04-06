import React from "react";
import boy from "../assets/svg/boy.jpg";

const Page3 = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center flex-wrap min-h-min mb-2">
    <div className="w-full md:w-1/2 lg:w-1/2 p-4 flex justify-center">
      <img src={boy} alt="boy" height={250} width={250} style={{ transform: 'scaleX(-1)' }} />
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-center items-start">
      <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl pt-3">You're in the right place</h1>
      <p className="mt-4">
        Brilliance gets you hands-on to help improve your professional skills
        and knowledge. You'll interact with concepts and solve fun problems in
        math, science, and computer science.
      </p>
    </div>
  </div>
  
  );
};

export default Page3;
