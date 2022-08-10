import React from "react";
import InputField from "./InputField";

function ProjectGroup({
  projectName,
  projectDescription1,
  projectDescription2,
  index,
  onInputChange,
  onItemDelete,
  onItemAdd,
}) {
  const projectGroup = {
    projectName,
    projectDescription1,
    projectDescription2,
  };

  return (
    <div>
      <InputField
        label="Project Name"
        value={projectName}
        name="projectName"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Project Description"
        value={projectDescription1}
        name="projectDescription1"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Project Description"
        value={projectDescription2}
        name="projectDescription2"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={() => onItemDelete("experience")}
        >
          Delete Project
        </button>

        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onItemAdd}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

export default ProjectGroup;
