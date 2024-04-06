import React, { useState,useEffect } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Button from "./Button";
import { IoIosArrowBack } from "react-icons/io";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Page1",
    "Page2",
    "Page3",
    "Page4",
    "Page5",
    "Page6",
    "Page7",
  ];

  const pageDisplay = () => {
    const pages = [Page1, Page2, Page3, Page4, Page5, Page6, Page7];
    const Component = pages[page];
    return <Component />;
  };

  useEffect(() => {
    
    if (page === 5) {
      const timer = setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [page]);

  return (
    <div className="form">
      <div className="flex justify-center items-center mt-2">
        {page <= 4 && (
          <div className="flex justify-center items-center w-full">
            <div>
              <button
                className="text-2xl pt-5"
                hidden={page === 0}
                onClick={() => setPage((prevPage) => prevPage - 1)}
              >
                <IoIosArrowBack />
              </button>
            </div>
            <div className="flex w-4/5">
              <div
                className="w-80 h-1 mt-4 bg-gray-200"
                style={{
                  width:
                    page === 0
                      ? "12.3%"
                      : page < 4
                      ? `calc(12.3% + ${page * 12}%)`
                      : "100%",
                }}
              >
                <div className="h-full bg-green-500"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="form-container">
        <div className="">{pageDisplay()}</div>
        <div className="mt-3">
          <Button
            disabled={page === FormTitles.length - 1}
            currentPage={page}
            onClick={() => setPage((prevPage) => prevPage + 1)}
            text="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
