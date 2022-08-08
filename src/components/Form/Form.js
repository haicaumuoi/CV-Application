import React, { useState } from "react";
import InputField from "./InputField";
import WorkExperience from "./ExperienceGroup";
import EducationGroup from "./EducationGroup";
import ProjectGroup from "./ProjectGroup";
import data from "../../cv-template-sample";

function Form(
  personalDetails,
  description,
  experience,
  project,
  education,
  onInputChange,
  onInputArrayChange,
  onTextAreaChange,
  onItemDelete,
  onExperienceItemAdd,
  onProjectAdd,
  onEducationItemAdd,
  onDescriptionAdd,
  onDescriptionDelete
) {
  const { name, phone, email, location } = personalDetails;

  return (
    <div className="Form basis-1/2 border border-black rounded">
      <div className="mx-8 my-10">
        <section className="personal-detail text-left flex flex-col">
          <h1 className="text-xl">Personal Details</h1>

          <InputField
            label="Name"
            value={name}
            name="name"
            onChange={onInputChange}
          />
          <InputField
            label="Phone Number"
            value={phone}
            name="phone"
            onChange={onInputChange}
          />
          <InputField
            label="Email"
            value={email}
            name="email"
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
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="company-name"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="time"
            placeholder="Time Worked"
          />
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="job-title"
            placeholder="Job Title"
          />
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="work-location"
            placeholder="Work Location"
          />
          <textarea
            name="core-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          <textarea
            name="core-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          <textarea
            name="core-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          <div>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
              onClick={() => onItemDelete()}
            >
              Delete Work Experience
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
            >
              Add Work Experience
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
            >
              Delete Descritpion
            </button>
          </div>{" "}
          <div>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
            >
              Add Description
            </button>
          </div>
          {/* // {experience.length === 0 ? (
          //   <button
          //     type="button"
          //     className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
          //     onClick={onExperienceItemAdd}
          //   >
          //     Add
          //   </button>
          // ) : (
          //   experience.map((item, index) => {
          //     return (
          //       <WorkExperience
          //         item={item}
          //         key={index}
          //         index={index}
          //         onInputArrayChange={onInputChange}
          //         onItemAdd={onExperienceItemAdd}
          //         onItemDelete={onItemDelete}
          //         onDescriptionAdd={onDescriptionAdd}
          //         onDescriptionDelete={onDescriptionDelete}
          //       />
          //     );
          //   })
          // )} */}
        </section>

        <section className="text-left flex flex-col">
          <h1 className="text-xl mt-5">Projects</h1>

          <InputField
            label="Project Name"
            value={name}
            name="project-name"
            onChange={onInputChange}
          />
          <textarea
            name="project-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          {/* {project.length === 0 ? (
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
              onClick={onProjectAdd}
            >
              Add
            </button>
          ) : (
            project.map((item, index) => {
              return (
                <ProjectGroup
                  item={item}
                  key={index}
                  index={index}
                  onInputArrayChange={onInputChange}
                  onItemAdd={onProjectAdd}
                  onItemDelete={onItemDelete}
                  onDescriptionAdd={onDescriptionAdd}
                  onDescriptionDelete={onDescriptionDelete}
                />
              );
            })
          )} */}
        </section>

        <section className="education-detail text-left flex flex-col">
          <h1 className="text-xl mt-5">Education Details</h1>
          <input
            type="text"
            name="university-name"
            placeholder="University Name"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
          />
          <input
            type="text"
            name="graduation-time"
            placeholder="Graduation Time"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
          />
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="degree"
            placeholder="Degree"
          />
          <input
            type="text"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            name="university location"
            placeholder="University Location"
          />
          <textarea
            name="university-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          <textarea
            name="university-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          <textarea
            name="university-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
          {/* {education.length === 0 ? (
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded shadow text-sm w-full mt-1"
              onClick={onEducationItemAdd}
            >
              Add
            </button>
          ) : (
            education.map((item, index) => {
              return (
                <EducationGroup
                  item={item}
                  key={index}
                  index={index}
                  onInputArrayChange={onInputChange}
                  onItemAdd={onEducationItemAdd}
                  onItemDelete={onItemDelete}
                  onDescriptionAdd={onDescriptionAdd}
                  onDescriptionDelete={onDescriptionDelete}
                />
              );
            })
          )} */}
        </section>

        <section className="skill text-left flex flex-col ">
          <h1 className="text-xl mt-5">Skill</h1>
          <textarea
            name="skill-description"
            id=""
            cols="20"
            rows="1"
            placeholder="Skill Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
        </section>
      </div>
    </div>
  );
}

export default Form;
