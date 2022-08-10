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

    setExData((dataExperience) => {
      return { ...dataExperience, [name]: value };
    });

    setEduData((dataEducation) => {
      return { ...dataEducation, [name]: value };
    });

    setProjectData((dataProject) => {
      return { ...dataProject, [name]: value };
    });

    setSkillData((dataSkill) => {
      return { ...dataSkill, [name]: value };
    });
  };

  // const experienceList = dataExperience.map((item) => {
  //   return {
  //     key: uuidv4(),
  //     companyName: item.companyName,
  //     timeWorked: item.timeWorked,
  //     jobTitle: item.jobTitle,
  //     jobLocation: item.jobLocation,
  //     jobDescription1: item.jobDescription1,
  //     jobDescription2: item.jobDescription2,
  //     jobDescription3: item.jobDescription3,
  //   };
  // });

  // const projectList = dataProject.map((item) => {
  //   return {
  //     key: uuidv4(),
  //     projectName: item.projectName,
  //     projectDescription1: item.projectDescription1,
  //     projectDescription2: item.projectDescription2,
  //   };
  // });

  // const educationList = dataEducation.map((item) => {
  //   return {
  //     key: uuidv4(),
  //     universityName: item.universityName,
  //     educationTime: item.educationTime,
  //     degree: item.degree,
  //     location: item.location,
  //     educationDescription1: item.educationDescription1,
  //     educationDescription2: item.educationDescription2,
  //     educationDescription3: item.educationDescription3,
  //   };
  // });

  // const skillList = dataSkill.map((item) => {
  //   return {
  //     key: uuidv4(),
  //     skillDescription: item.skillDescription,
  //   };
  // });

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
        // experienceGroup={dataOutput.experience}
        // educationGroup={dataOutput.education}
        // projectGroup={dataOutput.projects}
        // skillDescription={dataOutput.skill.skillDescription}
        onInputChange={handleTextAreaChange}
      />

      <div className="basis-1/2">
        <div className="border border-black shadow-xl padding">
          <section>
            <PersonalDetails {...dataOutput} />
          </section>

          {/* {experienceList.length > 0 ? ( */}
          <section className="work-experience">
            <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
              Work experience
            </div>
            <ul>
              {/* {dataExperience.map((experienceList) => {
                  return <WorkExperience {...experienceList} />;
                })} */}
              {/* <WorkExperience {...dataOutput.experience} /> */}
              <WorkExperience {...dataExperience} />
            </ul>
          </section>
          {/* ) : null} */}

          {/* {projectList.length > 0 ? ( */}
          <section className="project">
            <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
              Projects
            </div>
            {/* {dataOutput.projects.map((projectList) => {
                return <Projects {...dataOutput.projectList} />;
              })} */}
            {/* <Projects {...dataOutput.projects} /> */}
            <Projects {...dataProject} />
          </section>
          {/* ) : null} */}

          {/* {educationList.length > 0 ? ( */}
          <section className="education">
            <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
              Education
            </div>
            {/* {dataOutput.education.map((educationList) => {
                return <Education {...dataOutput.educationList} />;
              })} */}

            {/* <Education {...dataOutput.education} /> */}
            <Education {...dataEducation} />
          </section>
          {/* ) : null} */}

          {/* {skillList.length > 0 ? ( */}
          <section className="skill">
            {/* {dataOutput.skill.map((skillList) => {
                return <Skill {...dataOutput.skillList} />;
              })} */}{" "}
            <Skill {...dataSkill} />
            {/* <Skill {...dataOutput.skill} /> */}
          </section>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default App;
