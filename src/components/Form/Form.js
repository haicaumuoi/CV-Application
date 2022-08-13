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
  experienceArray,
  educationArray,
  projectArray,
  skillArray,
  jobId,
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

          {experienceArray.map((experience) => {
            return (
              <ExperienceGroup
                companyName={experience.companyName}
                timeWorked={experience.timeWorked}
                jobTitle={experience.jobTitle}
                jobLocation={experience.jobLocation}
                jobDescription1={experience.jobDescription1}
                jobDescription2={experience.jobDescription2}
                jobDescription3={experience.jobDescription3}
                onInputChange={onInputArrayChange(
                  experience.id,
                  experienceArray
                )}
                onItemAdd={onExperienceItemAdd}
                onItemDelete={() =>
                  onItemDelete(experience.id, experienceArray)
                }
                onDescriptionAdd={onDescriptionAdd}
                onDescriptionDelete={onDescriptionDelete}
              />
            );
          })}
        </section>

        <section className="text-left flex flex-col">
          <h1 className="text-xl mt-5">Projects</h1>
          {projectArray.map((project) => {
            return (
              <ProjectGroup
                projectName={project.projectName}
                projectDescription1={project.projectDescription1}
                projectDescription2={project.projectDescription2}
                onInputChange={onInputArrayChange(project.id, projectArray)}
                onItemAdd={onProjectAdd}
                onItemDelete={() => onItemDelete(project.id, projectArray)}
                onDescriptionAdd={onDescriptionAdd}
                onDescriptionDelete={onDescriptionDelete}
              />
            );
          })}
        </section>

        <section className="education-detail text-left flex flex-col">
          <h1 className="text-xl mt-5">Education</h1>
          {educationArray.map((education) => {
            return (
              <EducationGroup
                universityName={education.universityName}
                educationTime={education.educationTime}
                universityLocation={education.universityLocation}
                degree={education.degree}
                educationDescription1={education.educationDescription1}
                educationDescription2={education.educationDescription2}
                educationDescription3={education.educationDescription3}
                onInputChange={onInputArrayChange(education.id, educationArray)}
                onItemAdd={onEducationItemAdd}
                onItemDelete={() => onItemDelete(education.id, educationArray)}
                onDescriptionAdd={onDescriptionAdd}
                onDescriptionDelete={onDescriptionDelete}
              />
            );
          })}
        </section>

        <section className="skill text-left flex flex-col ">
          <h1 className="text-xl mt-5">Skill</h1>
          {skillArray.map((skill) => {
            return (
              <InputField
                name="skillDescription"
                value={skill.skillDescription}
                placeholder="Skill Description"
                className="mt-1 border border-black  rounded-sm pl-3 h-20"
                onChange={onInputArrayChange(skill.id, skillArray)}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Form;
