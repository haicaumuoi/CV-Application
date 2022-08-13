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

  // function output() {
  //   setExData(
  //     (current) =>
  //       current.filter((experience) => {
  //         return experience.id !== 1;
  //       }),
  //     console.log("delete experience")
  //   );
  // }

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

  const addExperience = () => {
    const id = dataExperience[dataExperience.length - 1].id + 1;
    setExData((dataExperience) =>
      // eslint-disable-next-line no-unused-expressions
      [
        ...dataExperience,
        {
          key: uuidv4(),
          id,
          companyName: "",
          timeWorked: "",
          jobTitle: "",
          jobLocation: "",
          jobDescription1: "",
          jobDescription2: "",
          jobDescription3: "",
        },
      ]
    );
    console.log(dataExperience);
  };

  const addProjects = () => {
    const id = dataProject[dataProject.length - 1].id + 1;
    setProjectData((dataProject) =>
      // eslint-disable-next-line no-unused-expressions
      [
        ...dataProject,
        {
          key: uuidv4(),
          id,
          projectName: "",
          projectDescription1: "",
          projectDescription2: "",
        },
      ]
    );
    console.log(dataProject);
  };

  const addEducation = () => {
    const id = dataEducation[dataEducation.length - 1].id + 1;
    setEduData((dataEducation) =>
      // eslint-disable-next-line no-unused-expressions
      [
        ...dataEducation,
        {
          key: uuidv4(),
          id,
          universityName: "",
          educationTime: "",
          degree: "",
          universityLocation: "",
          educationDescription1: "",
          educationDescription2: "",
          educationDescription3: "",
        },
      ]
    );
    console.log(dataEducation);
  };

  const deleteObject = (index, array) => {
    if (array === dataExperience) {
      setExData(
        (current) =>
          current.filter((experience) => {
            return experience.id !== index;
          }),
        console.log("delete experience")
      );
    } else if (array === dataProject) {
      setProjectData(
        (current) =>
          current.filter((projects) => {
            return projects.id !== index;
          }),
        console.log("delete projects")
      );
    } else if (array === dataEducation) {
      setEduData(
        (current) =>
          current.filter((education) => {
            return education.id !== index;
          }),
        console.log("delete education")
      );
    } else if (array === dataSkill) {
      setSkillData((current) =>
        current.filter((skill) => {
          return skill.id !== index;
        })
      );
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
        onExperienceItemAdd={addExperience}
        onEducationItemAdd={addEducation}
        onProjectAdd={addProjects}
        onItemDelete={deleteObject}
        // experienceGroup={dataOutput.experience}
        // educationGroup={dataOutput.education}
        // projectGroup={dataOutput.projects}
        // skillDescription={dataOutput.skill.skillDescription}
        onInputArrayChange={updateFieldChanged}
        onInputChange={handleTextAreaChange}
      />

      {/* <button onClick={output}>Click!</button> */}

      <div className="basis-1/2">
        <div className="border border-black shadow-xl padding sticky">
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
