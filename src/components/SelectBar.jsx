import React from "react";

const SelectBar = ({ id, icon, userType, otheroption,selected, onSelect,intrest }) => {
  return (
    <div className={`w-full md:w-5/12 lg:w-2/5 flex flex-col justify-center align-middle gap-3 container mx-auto border-1 border-gray-500 p-2  cursor-pointer ${
      selected ? "bg-white shadow-lg transform scale-105" : ""
    }`}
    onClick={onSelect}>
      <div className="flex justify-start md:flex-center lg:flex-center flex-wrap items-center border-1 bg-gray-50 border-gray-500 p-2 mt-3">
        <p className="mr-3">{icon}</p>
        <p className="text-bold text-2xl mr-1">{userType}{intrest}</p>
        <p className="text-gray-500 text-xl">{otheroption}</p>
      </div>
    </div>
  );
};

export default SelectBar;
