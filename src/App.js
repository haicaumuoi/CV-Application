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
  const [dataOutput, setData] = useState(data);

  const educationList = dataOutput.education.map((item) => {
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

  const experienceList = dataOutput.experience.map((item) => {
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

  const projectList = dataOutput.projects.map((item) => {
    return {
      key: uuidv4(),
      projectName: item.projectName,
      projectDescription1: item.description1,
      projectDescription2: item.description2,
    };
  });

  const skillList = dataOutput.skill.map((item) => {
    return {
      key: uuidv4(),
      skillDescription: item.description,
    };
  });

  const handleTextAreaChange = (e) => {
    const value = e.target.value;

    setData(value);
  };

  return (
    <div className="App">
      <Form
        name={dataOutput.personal.name}
        email={dataOutput.personal.email}
        phone={dataOutput.personal.phone}
        location={dataOutput.personal.location}
        onInputChange={handleTextAreaChange}
      />

      <div className="basis-1/2">
        <div className="border border-black shadow-xl padding">
          <section>
            <PersonalDetails {...dataOutput.personal} />
          </section>
          {experienceList.length > 0 ? (
            <section className="work-experience">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Work experience
              </div>
              <ul>
                {experienceList.map((experienceList) => {
                  return <WorkExperience {...experienceList} />;
                })}
              </ul>
            </section>
          ) : null}

          {projectList.length > 0 ? (
            <section className="project">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Projects
              </div>
              {dataOutput.projects.map((projectList) => {
                return <Projects {...projectList} />;
              })}
            </section>
          ) : null}

          {educationList.length > 0 ? (
            <section className="education">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Education
              </div>
              {dataOutput.education.map((educationList) => {
                return <Education {...educationList} />;
              })}
            </section>
          ) : null}

          {skillList.length > 0 ? (
            <section className="skill">
              {dataOutput.skill.map((skillList) => {
                return <Skill {...skillList} />;
              })}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
