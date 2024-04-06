import React, { useState } from "react";
import SelectBar from "./SelectBar";

import { MdOutlineShowChart } from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";
import { SiWolframmathematica } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { GiWorriedEyes } from "react-icons/gi";

const userIntrests = [
  {
    id: 11,
    icon: <MdOutlineShowChart />,
    intrest: "Learning specific skills to advance my career",
  },
  {
    id: 12,
    icon: <FaGlobeAfrica />,
    intrest: "Exploring new topics im intrested in",
  },
  {
    id: 13,
    icon: <SiWolframmathematica />,
    intrest: "Refreshing my math foundations",
  },
  {
    id: 14,
    icon: <GoGoal />,
    intrest: "Exercising my brain to stay sharp",
  },
  {
    id: 15,
    icon: <GiWorriedEyes />,
    intrest: "something else",
  },
];

const Page2 = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const handleSelectInterest = (interest) => {
    setSelectedInterest(interest);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-3">
          Which are you most interested in?
        </h2>
        <p className="text-sm text-center md:text-xl lg:text-2xl text-gray-500 mt-3">
          choose just one.this will help us get you started (but dont limit your
          experiance)
        </p>
      </div>

      <div className="mt-4">
        {userIntrests.map((items) => {
          return (
            <SelectBar
              key={items.id}
              icon={items.icon}
              intrest={items.intrest}
              selected={selectedInterest === items.intrest}
              onSelect={() => handleSelectInterest(items.intrest)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page2;
