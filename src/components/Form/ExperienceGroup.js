import React from "react";
import InputField from "./InputField";

function ExperienceGroup({
  companyName,
  timeWorked,
  jobTitle,
  jobLocation,
  jobDescription1,
  jobDescription2,
  jobDescription3,
  onInputChange,
  onItemDelete,
  onItemAdd,
  onDescriptionAdd,
  onDescriptionDelete,
}) {
  // const experienceGroup = {
  //   companyName: companyName,
  //   timeWorked: timeWorked,
  //   jobTitle: jobTitle,
  //   joblocation: joblocation,
  //   jobDescription1: jobDescription1,
  //   jobDescription2: jobDescription2,
  //   jobDescription3: jobDescription3,
  // };

  return (
    <div>
      <InputField
        label="Company Name"
        value={companyName}
        name="companyName"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Time Worked"
        value={timeWorked}
        name="timeWorked"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Title"
        value={jobTitle}
        name="jobTitle"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Location"
        value={jobLocation}
        name="jobLocation"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-8"
      />

      <InputField
        label="Job Description"
        value={jobDescription1}
        name="jobDescription1"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />

      <InputField
        label="Job Description"
        value={jobDescription2}
        name="jobDescription2"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />

      <InputField
        label="Job Description"
        value={jobDescription3}
        name="jobDescription3"
        onChange={onInputChange}
        className="mt-1 border border-black  rounded-sm pl-3 h-20"
      />

      <div className="btn-group">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          onClick={onItemDelete}
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
          onClick={onDescriptionAdd}
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

export default ExperienceGroup;
