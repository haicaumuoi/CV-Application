import React, { useState } from "react";

function WorkExperience({
  companyName,
  time,
  jobTitle,
  jobLocation,
  description1,
  description2,
  description3,
}) {
  return (
    <li className="work-experience-item mt-3">
      <div className="company-name__time flex justify-between font-semibold">
        <p className="company-name">{companyName}</p>
        <p className="time-spent">{time}</p>
      </div>
      <div className="job-title__location flex justify-between italic">
        <p className="job-title">{jobTitle}</p>
        <p className="job-location">{jobLocation}</p>
      </div>

      <ul className="core-responsibility list-disc text-left ml-4">
        <li className="my-1">{description1}</li>
        <li className="my-1">{description2}</li>
        <li className="my-1">{description3}</li>
      </ul>
    </li>
  );
}

export default WorkExperience;
