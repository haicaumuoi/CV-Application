import React from "react";
import InputField from "./InputField";

function WorkExperience({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
  onDescriptionAdd,
  onDescriptionDelete,
}) {
  const { id, companyName, timeSpent, jobTitle, joblocation, description } =
    item;

  return (
    <div>
      <InputField
        label="Company Name"
        value={companyName}
        name="name"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Time Worked"
        value={timeSpent}
        name="timeSpent"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Title"
        value={jobTitle}
        name="jobTitle"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Location"
        value={joblocation}
        name="joblocation"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Description"
        value={description}
        name="description"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={() => onItemDelete("experience", id)}
        >
          Delete Work Experience
        </button>

        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onItemAdd}
        >
          Add Work Experience
        </button>
      </div>

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onDescriptionAdd()}
        >
          Delete Descritpion
        </button>
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onDescriptionDelete}
        >
          Add Description
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
