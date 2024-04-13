import React, { useState } from "react";

import Job from "../components/Job.jsx";

//images
import googleBanner from "../assets/googlebanner.jpg";
import bookMarkIcon from "../assets/bookmarkIcon.svg";

const Home = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Fullstack Developer",
      location: "London, UK",
      salary: 1900,
      experienceLevel: "Intermediate",
      jobType: "Full time",
      workType: "Remote",
      company: "Google",
      requirements:
        "The ideal candidate will have experience with React, Node.js, and database management systems. Strong problem-solving skills and the ability to work in a team are essential.",
      description:
        "This position involves developing and maintaining web applications with a focus on both front-end and back-end development.",
    },
    {
      id: 2,
      title: "Data Scientist",
      location: "New York, USA",
      salary: 3000,
      experienceLevel: "Senior",
      jobType: "Part time",
      workType: "On-site",
      company: "Amazon",
      requirements:
        "Proficiency in Python and experience with machine learning frameworks such as TensorFlow or PyTorch. Ability to handle large datasets and develop statistical models.",
      description:
        "You will analyze complex data sets to identify business and market trends. The role requires strong analytical skills and the ability to communicate findings effectively.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Berlin, Germany",
      salary: 2500,
      experienceLevel: "Junior",
      jobType: "Contract",
      workType: "Remote",
      company: "Spotify",
      requirements:
        "Knowledge of design tools like Sketch or Figma. A good eye for design and attention to detail are critical.",
      description:
        "Responsible for designing the user interface and improving user experience for our mobile and web applications. Collaboration with the development team to implement designs is expected.",
    },
    {
      id: 4,
      title: "Mobile Developer",
      location: "Tokyo, Japan",
      salary: 2200,
      experienceLevel: "Intermediate",
      jobType: "Full time",
      workType: "Remote",
      company: "Sony",
      requirements:
        "Experience with Swift for iOS or Kotlin for Android. Strong understanding of mobile application development processes.",
      description:
        "You will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms.",
    },
    {
      id: 5,
      title: "Cybersecurity Analyst",
      location: "Sydney, Australia",
      salary: 3200,
      experienceLevel: "Senior",
      jobType: "Full time",
      workType: "On-site",
      company: "Atlassian",
      requirements:
        "Proficient in security systems, including firewalls, encryption, and anti-virus software. Understanding of hacking techniques and vulnerability analysis.",
      description:
        "Your main task will be to protect our computer systems and networks from cyber attacks. You will also conduct regular security audits and provide security recommendations.",
    },
  ]);

  const [currentJob, setCurrentJob] = useState(jobs[0]);

  const onClickJob = ({
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
  }) => {
    setCurrentJob({
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
    });
  };

  return (
    <div className="w-full h-5/6 flex justify-between gap-8">
      <div className="h-full w-1/3 bg-myWhite rounded-xl p-5 overflow-y-auto border border-grayLighter ">
        {jobs.map((job) => (
          <Job
            onCLick={onClickJob}
            key={job.id}
            id={job.id}
            requirements={job.requirements}
            description={job.description}
            workType={job.workType}
            experienceLevel={job.experienceLevel}
            jobType={job.jobType}
            title={job.title}
            location={job.location}
            salary={job.salary}
          />
        ))}
      </div>
      <div className="h-full w-2/3 flex flex-col gap-4">
        <div className="flex flex-col justify-between h-3/6 w-full bg-myWhite rounded-xl border border-grayLighter pb-5 pt-3 px-5">
          <img src={googleBanner} className="w-full h-2/3" alt="" />
          <div className="pl-5 flex justify-between">
            <h1 className="font-bold text-grayTextDark">{currentJob.title}</h1>
            <h1 className="font-bold text-xl">
              £<span className="text-green">{currentJob.salary}</span>
              <span className="text-grayBg">/month</span>
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="pl-5">
              <h3 className="font-semibold text-grayTextDark">
                {currentJob.company}
              </h3>
              <h5 className="font-semibold text-grayText">
                {currentJob.location}
              </h5>
            </div>
            <div className="flex justify-between items-center gap-10">
              <button className="font-semibold hover:bg-grayLighter text-grayLighter bg-myWhite p-2 border border-grayLighter hover:text-myWhite ">
                Apply now
              </button>
              <img
                className="w-8 h-8 hover:cursor-pointer"
                src={bookMarkIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/6 flex gap-4">
          <div className="w-1/4 h-full bg-myWhite rounded-xl p-2 flex flex-col items-center justify-evenly border border-grayLighter">
            <h2 className="font-semibold text-grayLighter text-xs md:text-base">
              Experience Level
            </h2>
            <h3 className="font-bold text-grayTextDark text-xs md:text-base">
              {currentJob.experienceLevel}
            </h3>
          </div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl p-2 flex flex-col items-center justify-evenly border border-grayLighter">
            <h2 className="font-semibold text-grayLighter text-xs md:text-base">
              Job Type
            </h2>
            <h3 className="font-bold text-grayTextDark text-xs md:text-base">
              {currentJob.jobType}
            </h3>
          </div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl p-2 flex flex-col items-center justify-evenly border border-grayLighter">
            <h2 className="font-semibold text-grayLighter text-xs md:text-base">
              Work Type
            </h2>
            <h3 className="font-bold text-grayTextDark text-xs md:text-base">
              {currentJob.workType}
            </h3>
          </div>
          <div className="w-1/4 h-full bg-myWhite rounded-xl p-2 flex flex-col items-center justify-evenly border border-grayLighter">
            <h2 className="font-semibold text-grayLighter text-xs md:text-base">
              Salary
            </h2>
            <h3 className="font-bold text-grayTextDark text-xs md:text-base">
              £{currentJob.salary}
              <span className="font-bold text-grayLighter">/month</span>
            </h3>
          </div>
        </div>
        <div className="h-2/6 w-full flex justify-between gap-5">
          <div className="h-full w-1/2 bg-myWhite rounded-xl border border-grayLighter overflow-y-auto p-5 flex flex-col gap-5">
            <h1 className="font-bold ">About the job</h1>
            <p>{currentJob.description}</p>
          </div>
          <div className="h-full w-1/2 bg-myWhite rounded-xl border border-grayLighter overflow-y-auto p-5 flex flex-col gap-5">
            <h1 className="font-bold ">Job Requirements</h1>
            <p>{currentJob.requirements}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
