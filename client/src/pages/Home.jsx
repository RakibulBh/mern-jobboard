import React, { useState } from "react";

import Job from "../components/Job.jsx";

const Home = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Fullstack Developer",
      location: "London, UK",
      salary: 1900,
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Rome, Italy",
      salary: 10000,
    },
    {
      id: 4,
      title: "International relations",
      location: "Ta-zhu, China",
      salary: 0.2,
    },
    {
      id: 5,
      title: "Aereospace engineer",
      location: "Kuala Lumpur, India",
      salary: 5000,
    },
    {
      id: 6,
      title: "Bus driver",
      location: "Dhaka, Bangladesh",
      salary: 10000,
    },
  ]);

  return (
    <div className="w-full h-5/6 flex justify-between gap-8">
      <div className="h-full w-1/3 bg-myWhite rounded-xl p-1 overflow-y-auto">
        {jobs.map((job) => (
          <Job
            key={job.id}
            title={job.title}
            location={job.location}
            salary={job.salary}
          />
        ))}
      </div>
      <div className="h-full w-2/3 flex flex-col gap-10">
        <div className="h-3/6 w-full bg-myWhite rounded-xl"></div>
        <div className="w-full h-1/6 flex gap-4">
          <div className="w-1/4 h-full bg-myWhite rounded-xl"></div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl"></div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl"></div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl"></div>
        </div>
        <div className="h-2/6 w-full flex justify-between gap-5">
          <div className="h-full w-1/2 bg-myWhite rounded-xl"></div>
          <div className="h-full w-1/2 bg-myWhite rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
