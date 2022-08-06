import React, { useState } from "react";

function Projects({ projectName, description1, description2 }) {
  return (
    <ul className="project-item">
      <li>
        <div className="project-name font-semibold text-left mt-2">
          {projectName}
        </div>
      </li>
      <li>
        <ul className="project-contribution list-disc text-left ml-4">
          <li>{description1}</li>
          <li>{description2}</li>
        </ul>
      </li>
    </ul>
  );
}

export default Projects;
