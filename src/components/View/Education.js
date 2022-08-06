import React, { useState } from "react";

function Education({
  universityName,
  time,
  degree,
  location,
  description1,
  description2,
  description3,
}) {
  return (
    <ul className="education-item ">
      <li>
        <div className="education-name__time flex justify-between font-semibold mt-2">
          <p className="education-name">{universityName}</p>
          <p className="time-spent">{time}</p>
        </div>
      </li>
      <li>
        <div className="education-title flex justify-between italic">
          <p className="education-degree">{degree}</p>
          <p>{location}</p>
        </div>
      </li>
      <li>
        <ul className="core-contribution list-disc text-left ml-4">
          <li>{description1}</li>
          <li>{description2}</li>
          <li>{description3}</li>
        </ul>
      </li>
    </ul>
  );
}

export default Education;
