import React from "react";

import googleImage from "../assets/googleIcon.png";
import bookMarkIcon from "../assets/bookmarkIcon.svg";

const Job = ({
  id,
  title,
  location,
  salary,
  experienceLevel,
  jobType,
  workType,
  company,
  requirements,
  description,
  onCLick,
}) => {
  return (
    <div
      onClick={() =>
        onCLick({
          id,
          title,
          location,
          salary,
          experienceLevel,
          jobType,
          workType,
          company,
          requirements,
          description,
        })
      }
      className="hover:cursor-pointer w-full h-40 bg-myWhite rounded-xl mb-5 p-3 flex flex-col justify-between border border-grayBg"
    >
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
        <button className="font-semibold hover:bg-grayLighter text-grayLighter bg-myWhite p-2 border border-grayLighter hover:text-myWhite hover:border-0">
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
