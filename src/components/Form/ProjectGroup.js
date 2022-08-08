import React from "react";
import InputField from "./InputField";

function ProjectGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
}) {
  const { id, projectName, description } = item;

  return (
    <div>
      <InputField
        label="Project Name"
        value={projectName}
        name="projectName"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Description"
        value={description}
        name="description"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={() => onItemDelete("experience", id)}
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
