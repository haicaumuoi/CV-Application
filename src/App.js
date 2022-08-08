import "./App.css";
import React, { useState, Component } from "react";
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
      universityName: item.universityName,
      time: item.time,
      degree: item.degree,
      location: item.location,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
    };
  });

  const experienceList = experience.map((item) => {
    return {
      companyName: item.companyName,
      time: item.time,
      jobTitle: item.jobTitle,
      jobLocation: item.jobLocation,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
    };
  });

  const projectList = projects.map((item) => {
    return {
      projectName: item.projectName,
      description1: item.description1,
      description2: item.description2,
    };
  });

  return (
    <div className="App">
      <Form />
      <div className="View basis-1/2">
        <div className="border border-neutral-300 p-10 shadow-xl ">
          <PersonalDetails {...personal} />

          {experienceList.length !== 0 ? (
            <section className="work-experience ">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Work experience
              </div>
              <ul>
                <WorkExperience {...experienceList} />
              </ul>
            </section>
          ) : null}

          {projectList.length !== 0 ? (
            <section className="project">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Projects
              </div>
              <Projects {...projectList} />
            </section>
          ) : null}

          {educationList.length !== 0 ? (
            <section className="education">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Education
              </div>
              <Education {...educationList} />
            </section>
          ) : null}

          {skill.length !== 0 ? (
            <section className="skill">
              <Skill {...skill} />
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
