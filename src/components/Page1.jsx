import React,{useState} from "react";
import SelectBar from "./SelectBar";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { FaProductHunt } from "react-icons/fa6";
import { RiParentFill } from "react-icons/ri";
import { GiLifeBar } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";

const userData = [
  {
    id: 1,
    icon: <PiStudent />,
    userType: "Student",
    otheroption: "or soon be enroaled",
  },
  {
    id: 2,
    icon:<FaProductHunt />,
    userType: "professional",
    otheroption: "pursing a carrer",
  },
  {
    id: 3,
    icon: <RiParentFill />,
    userType: "parent",
    otheroption: "of a school age child",
  },
  {
    id: 4,
    icon: <GiLifeBar />,
    userType: "Life long learner",
    otheroption: "",
  },
  {
    id: 5,
    icon: <FaChalkboardTeacher />,
    userType: "Teacher",
    otheroption: "",
  },
  {
    id: 6,
    icon: <GiPlagueDoctorProfile/>,
    userType: "Others",
    otheroption: "",
  },
];

const Page1 = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleSelectUserType = (userType) => {
    setSelectedUserType(userType);
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className=" font-bold text-3xl md:text-3xl lg:text-4xl pt-3">which describe you best ?</h1>
        <p className=" text-gray-500 ">This will help us Personalize your experiance </p>
      </div>

      <div className="mt-4">
        {userData.map((items) => {
          return (
            <SelectBar
              key={items.id}
              icon={items.icon}
              userType={items.userType}
              otheroption={items.otheroption}
              selected={selectedUserType === items.userType}
              onSelect={() => handleSelectUserType(items.userType)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page1;
