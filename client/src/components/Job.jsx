import React from "react";

import googleImage from "../assets/googleIcon.png";
import bookMarkIcon from "../assets/bookmarkIcon.svg";

const Job = ({ title, location, salary }) => {
  return (
    <div className="w-full h-40 bg-grayBg rounded-xl mb-5 p-3 flex flex-col justify-between">
      <div className="flex gap-6 items-center">
        <img className="h-10 w-10" src={googleImage} alt="" />
        <div>
          <h1 className="font-bold text-grayTextDark">{title}</h1>
          <h5 className="font-semibold text-grayText">{location}</h5>
        </div>
      </div>
      <div>
        <h1 className="font-bold">
          £{salary}
          <span className="text-grayTextDark">/month</span>
        </h1>
      </div>
      <div className="flex justify-between">
        <button className="font-semibold hover:bg-grayText hover:text-grayBg text-grayTextDark bg-grayLighter p-2 rounded-2xl">
          Apply now
        </button>
        <img
          className="w-8 h-8 hover:cursor-pointer"
          src={bookMarkIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Job;
