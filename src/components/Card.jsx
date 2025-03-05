import React from "react";

const Card = ({ children }) => {
  return (
    <div className="">
      <div
        className="bg-gray-800 rounded-3xl relative overflow-hidden after:z-10 after:content-['']
             after:absolute after:inset-0 after:outline-2
              after:outline after:-outline-offset-2 after:rounded-3xl
               after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20
               after:pointer-events-none  mt-2  py-8 hover:after:outline-purple-600"
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
