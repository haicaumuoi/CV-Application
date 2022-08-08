import "./App.css";
import React, { useState, Component, useEffect } from "react";
import Form from "./components/Form/Form";
import PersonalDetails from "./components/View/PersonalDetail";
import Education from "./components/View/Education";
import WorkExperience from "./components/View/WorkExperience";
import Projects from "./components/View/Projects";
import Skill from "./components/View/Skill";
import data from "./cv-template-sample";
import { v4 as uuidv4 } from "uuid";
// import Descriptions from "./components/View/Description";

function App() {
  const { personal, experience, projects, education, skill } = data;

  const educationList = education.map((item) => {
    return {
      key: uuidv4(),
      universityName: item.universityName,
      educationTime: item.time,
      degree: item.degree,
      location: item.location,
      educationDescription1: item.description1,
      educationDescription2: item.description2,
      educationDescription3: item.description3,
    };
  });

  const experienceList = experience.map((item) => {
    return {
      key: uuidv4(),
      companyName: item.companyName,
      time: item.time,
      jobTitle: item.jobTitle,
      jobLocation: item.jobLocation,
      jobDescription1: item.description1,
      jobDescription2: item.description2,
      jobDescription3: item.description3,
    };
  });

  const projectList = projects.map((item) => {
    return {
      key: uuidv4(),
      projectName: item.projectName,
      projectDescription1: item.description1,
      projectDescription2: item.description2,
    };
  });

  const skillList = skill.map((item) => {
    return {
      key: uuidv4(),
      skillDescription: item.description,
    };
  });

  const handleTextAreaChange = (e) => {
    const value = e.target.value;
  };

  return (
    <div className="App">
      <Form onInputChange={handleTextAreaChange} />

      <div className="View basis-1/2">
        <div className="border border-neutral-300 p-10 shadow-xl ">
          <PersonalDetails {...personal} />

          {/* {experienceList.length > 0 ? ( */}
          <section className="work-experience ">
            <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
              Work experience
            </div>
            <ul>
              {experience.map((experienceList) => {
                return <WorkExperience {...experienceList} />;
              })}
            </ul>
          </section>
          {/* ) : null} */}

          {projectList.length > 0 ? (
            <section className="project">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Projects
              </div>
              {projects.map((projectList) => {
                return <Projects {...projectList} />;
              })}
            </section>
          ) : null}

          {educationList.length > 0 ? (
            <section className="education">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Education
              </div>
              {education.map((educationList) => {
                return <Education {...educationList} />;
              })}
            </section>
          ) : null}

          {skillList.length > 0 ? (
            <section className="skill">
              {skill.map((skillList) => {
                return <Skill {...skillList} />;
              })}
            </section>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
