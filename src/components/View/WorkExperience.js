import React from "react";
import Descriptions from "./Description";

function WorkExperience({
  companyName,
  timeWorked,
  jobTitle,
  jobLocation,
  jobDescription1,
  jobDescription2,
  jobDescription3,
}) {
  return (
    <li className="work-experience-item mt-3">
      <div className="company-name__time flex justify-between font-semibold">
        <p className="company-name">{companyName}</p>
        <p className="time-spent">{timeWorked}</p>
      </div>
      <div className="job-title__location flex justify-between italic">
        <p className="job-title">{jobTitle}</p>
        <p className="job-location">{jobLocation}</p>
      </div>

      <ul className="core-responsibility list-disc text-left ml-4">
        <Descriptions
          description1={jobDescription1}
          description2={jobDescription2}
          description3={jobDescription3}
        />
      </ul>
    </li>
  );
}

export default WorkExperience;
