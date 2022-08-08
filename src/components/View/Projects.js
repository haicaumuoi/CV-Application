import React, { useState } from "react";

function Projects({ projectName, projectDescription1, projectDescription2 }) {
  return (
    <ul className="project-item">
      <li>
        <div className="project-name font-semibold text-left mt-2">
          {projectName}
        </div>
      </li>
      <li>
        <ul className="project-contribution list-disc text-left ml-4">
          <li>{projectDescription1}</li>
          <li>{projectDescription2}</li>
        </ul>
      </li>
    </ul>
  );
}

export default Projects;
