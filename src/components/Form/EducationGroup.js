import React from "react";
import InputField from "./InputField";

function EducationGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
}) {
  const { id, universityName, time, degree, location, description } = item;

  return (
    <div>
      <InputField
        label="University Name"
        value={universityName}
        name="universityName"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Time"
        value={time}
        name="time"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Degree"
        value={degree}
        name="degree"
        onChange={onInputArrayChange("experience", index)}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="University Location"
        value={location}
        name="location"
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
          Delete Education Experience
        </button>

        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onItemAdd}
        >
          Add Education Experience
        </button>
      </div>
    </div>
  );
}

export default EducationGroup;
