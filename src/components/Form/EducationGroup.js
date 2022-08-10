import React from "react";
import InputField from "./InputField";

function EducationGroup({
  universityName,
  educationTime,
  degree,
  universityLocation,
  educationDescription1,
  educationDescription2,
  educationDescription3,
  index,
  onInputChange,
  onItemDelete,
  onItemAdd,
}) {
  // const educationGroup = {
  //   universityName,
  //   educationTime,
  //   degree,
  //   universityLocation,
  //   educationDescription1,
  //   educationDescription2,
  //   educationDescription3,
  // };

  return (
    <div>
      <InputField
        label="University Name"
        value={universityName}
        name="universityName"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Time"
        value={educationTime}
        name="educationTime"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Degree"
        value={degree}
        name="degree"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="University Location"
        value={universityLocation}
        name="universityLocation"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Education Description"
        value={educationDescription1}
        name="educationDescription1"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />
      <InputField
        label="Education Description"
        value={educationDescription2}
        name="educationDescription2"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />
      <InputField
        label="Education Description"
        value={educationDescription3}
        name="educationDescription3"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={() => onItemDelete("experience")}
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
