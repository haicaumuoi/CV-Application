import React, { useState } from "react";
import InputField from "./InputField";
import ExperienceGroup from "./ExperienceGroup";
import EducationGroup from "./EducationGroup";
import ProjectGroup from "./ProjectGroup";
import App from "../../App";

function Form({
  name,
  email,
  phone,
  location,
  companyName,
  timeWorked,
  jobTitle,
  jobLocation,
  jobDescription1,
  jobDescription2,
  jobDescription3,
  // experienceGroup,
  // educationGroup,
  universityName,
  educationTime,
  degree,
  universityLocation,
  educationDescription1,
  educationDescription2,
  educationDescription3,
  // projectGroup,
  projectName,
  projectDescription1,
  projectDescription2,
  skillDescription,
  onInputArrayChange,
  onTextAreaChange,
  onItemDelete,
  onExperienceItemAdd,
  onProjectAdd,
  onEducationItemAdd,
  onDescriptionAdd,
  onDescriptionDelete,
  onInputChange,
}) {
  const skillGroup = {
    skillDescription,
  };

  return (
    <div className="Form basis-1/2 border border-black rounded">
      <div className="mx-8 my-10">
        <section className="personal-detail text-left flex flex-col">
          <h1 className="text-xl">Personal Details</h1>

          <InputField
            label="Name"
            name="name"
            value={name}
            onChange={onInputChange}
          />
          <InputField
            label="Email"
            value={email}
            name="email"
            onChange={onInputChange}
          />
          <InputField
            label="Phone Number"
            value={phone}
            name="phone"
            onChange={onInputChange}
          />
          <InputField
            label="Location"
            value={location}
            name="location"
            onChange={onInputChange}
          />
        </section>

        <section className="work-detail text-left flex flex-col">
          <h1 className="text-xl mt-5">Work Experience</h1>

          {/* {experienceGroup.map((experienceNumber) => {
            return ( */}
          <ExperienceGroup
            companyName={companyName}
            timeWorked={timeWorked}
            jobTitle={jobTitle}
            jobLocation={jobLocation}
            jobDescription1={jobDescription1}
            jobDescription2={jobDescription2}
            jobDescription3={jobDescription3}
            onInputChange={onInputChange}
            onItemAdd={onExperienceItemAdd}
            onItemDelete={onItemDelete}
            onDescriptionAdd={onDescriptionAdd}
            onDescriptionDelete={onDescriptionDelete}
          />
          {/* );
          })} */}
        </section>

        <section className="text-left flex flex-col">
          <h1 className="text-xl mt-5">Projects</h1>
          <ProjectGroup
            projectName={projectName}
            projectDescription1={projectDescription1}
            projectDescription2={projectDescription2}
            onInputChange={onInputChange}
            onItemAdd={onExperienceItemAdd}
            onItemDelete={onItemDelete}
            onDescriptionAdd={onDescriptionAdd}
            onDescriptionDelete={onDescriptionDelete}
          />
        </section>

        <section className="education-detail text-left flex flex-col">
          <h1 className="text-xl mt-5">Education</h1>
          <EducationGroup
            universityName={universityName}
            educationTime={educationTime}
            universityLocation={universityLocation}
            degree={degree}
            educationDescription1={educationDescription1}
            educationDescription2={educationDescription2}
            educationDescription3={educationDescription3}
            onInputChange={onInputChange}
            onItemAdd={onExperienceItemAdd}
            onItemDelete={onItemDelete}
            onDescriptionAdd={onDescriptionAdd}
            onDescriptionDelete={onDescriptionDelete}
          />
        </section>

        <section className="skill text-left flex flex-col ">
          <h1 className="text-xl mt-5">Skill</h1>
          {/* <textarea
            name="skillDescription"
            value={skillGroup.skillDescription}
            id=""
            cols="20"
            rows="1"
            placeholder="Skill Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
            onChange={onInputChange}
          ></textarea> */}
          <InputField
            name="skillDescription"
            value={skillGroup.skillDescription}
            placeholder="Skill Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
            onChange={onInputChange}
          />
        </section>
      </div>
    </div>
  );
}

export default Form;
