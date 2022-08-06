import React, { useState } from "react";

function Form() {
  return (
    <div className="Form basis-1/2 border border-black rounded">
      <div className="mx-8 my-10">
        <section className="personal-detail text-left flex flex-col">
          <h1 className="text-xl">Personal Details</h1>
          <input
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <input
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
            type="text"
            name="location"
            placeholder="Location"
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
        </section>

        <section className="personal-detail text-left flex flex-col">
          <h1 className="text-xl mt-5">Projects</h1>
          <input
            type="text"
            name="project-name"
            placeholder="Project Name"
            className="mt-1 border border-black  rounded-sm pl-3 h-8"
          />
          <textarea
            name="project-responsibility"
            id=""
            cols="20"
            rows="1"
            placeholder="Description"
            className="mt-1 border border-black  rounded-sm pl-3 h-20"
          ></textarea>
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
