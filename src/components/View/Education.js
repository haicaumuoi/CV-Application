import React, { useState } from "react";
import Descriptions from "./Description";

function Education({
  universityName,
  educationTime,
  degree,
  educationLocation,
  educationDescription1,
  educationDescription2,
  educationDescription3,
}) {
  return (
    <ul className="education-item ">
      <li>
        <div className="education-name__time flex justify-between font-semibold mt-2">
          <p className="education-name">{universityName}</p>
          <p className="time-spent">{educationTime}</p>
        </div>
      </li>
      <li>
        <div className="education-title flex justify-between italic">
          <p className="education-degree">{degree}</p>
          <p>{educationLocation}</p>
        </div>
      </li>
      <li>
        <ul className="core-contribution list-disc text-left ml-4">
          <Descriptions
            description1={educationDescription1}
            description2={educationDescription2}
            description3={educationDescription3}
          />
        </ul>
      </li>
    </ul>
  );
}

export default Education;
