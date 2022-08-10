import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
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
  const [dataOutput, setData] = useState(data.personal);
  const [dataExperience, setExData] = useState(data.experience);
  const [dataEducation, setEduData] = useState(data.education);
  const [dataProject, setProjectData] = useState(data.projects);
  const [dataSkill, setSkillData] = useState(data.skill);

  const handleTextAreaChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((dataOutput) => {
      return { ...dataOutput, [name]: value };
    });
  };

  function output() {
    console.log(
      dataExperience.map((prev) => {
        return { ...prev };
      })
    );
  }

  const updateFieldChanged = (index, array) => (e) => {
    console.log("index: " + index);
    console.log("property name: " + e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    let newArr = [...array]; // copying the old datas array
    newArr[index][name] = value; // replace e.target.value with whatever you want to change it to

    console.log(newArr[index]);
    if (array === dataExperience) {
      setExData(newArr);
    } else if (array === dataProject) {
      setProjectData(newArr);
    } else if (array === dataEducation) {
      setEduData(newArr);
    } else if (array === dataSkill) {
      setSkillData(newArr);
    }
  };
  return (
    <div className="App">
      <Form
        name={dataOutput.name}
        email={dataOutput.email}
        phone={dataOutput.phone}
        location={dataOutput.location}
        companyName={dataExperience.companyName}
        timeWorked={dataExperience.timeWorked}
        jobTitle={dataExperience.jobTitle}
        jobLocation={dataExperience.jobLocation}
        jobDescription1={dataExperience.jobDescription1}
        jobDescription2={dataExperience.jobDescription2}
        jobDescription3={dataExperience.jobDescription3}
        projectName={dataProject.projectName}
        projectDescription1={dataProject.projectDescription1}
        projectDescription2={dataProject.projectDescription2}
        universityName={dataEducation.universityName}
        educationTime={dataEducation.educationTime}
        universityLocation={dataEducation.universityLocation}
        degree={dataEducation.degree}
        educationDescription1={dataEducation.educationDescription1}
        educationDescription2={dataEducation.educationDescription2}
        educationDescription3={dataEducation.educationDescription3}
        skillDescription={dataSkill.skillDescription}
        experienceArray={dataExperience}
        educationArray={dataEducation}
        projectArray={dataProject}
        skillArray={dataSkill}
        // experienceGroup={dataOutput.experience}
        // educationGroup={dataOutput.education}
        // projectGroup={dataOutput.projects}
        // skillDescription={dataOutput.skill.skillDescription}
        onInputArrayChange={updateFieldChanged}
        onInputChange={handleTextAreaChange}
      />

      {/* <button onClick={output}>Click!</button> */}

      <div className="basis-1/2">
        <div className="border border-black shadow-xl padding">
          <section>
            <PersonalDetails {...dataOutput} />
          </section>

          {dataExperience.length > 0 ? (
            <section className="work-experience">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Work experience
              </div>
              <ul>
                {dataExperience.map((experienceList) => {
                  return <WorkExperience {...experienceList} />;
                })}
                {/* <WorkExperience {...dataOutput.experience} /> */}
                {/* <WorkExperience {...dataExperience} /> */}
              </ul>
            </section>
          ) : null}

          {dataProject.length > 0 ? (
            <section className="project">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Projects
              </div>
              {dataProject.map((projectList) => {
                return <Projects {...projectList} />;
              })}
              {/* <Projects {...dataOutput.projects} /> */}
              {/* <Projects {...dataProject} /> */}
            </section>
          ) : null}

          {dataEducation.length > 0 ? (
            <section className="education">
              <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
                Education
              </div>
              {dataEducation.map((educationList) => {
                return <Education {...educationList} />;
              })}

              {/* <Education {...dataOutput.education} /> */}
              {/* <Education {...dataEducation} /> */}
            </section>
          ) : null}

          {dataSkill.length > 0 ? (
            <section className="skill">
              {dataSkill.map((skillList) => {
                return <Skill {...skillList} />;
              })}
              {/* <Skill {...dataSkill} /> */}
              {/* <Skill {...dataOutput.skill} /> */}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
