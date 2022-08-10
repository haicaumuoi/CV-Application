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
  key,
}) {
  return (
    <li className="work-experience-item mt-3">
      <div className="flex justify-between font-semibold">
        <p>{companyName}</p>
        <p>{timeWorked}</p>
      </div>
      <div className=" flex justify-between italic">
        <p>{jobTitle}</p>
        <p>{jobLocation}</p>
      </div>

      <ul className="list-disc text-left ml-4">
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
