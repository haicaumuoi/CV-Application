import React, { useState } from "react";
import PersonalDetails from "./PersonalDetail";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Skill from "./Skill";

function View() {
  return (
    <div className="View basis-1/2">
      <div className="border border-neutral-300 p-10 shadow-xl ">
        <PersonalDetails
          name="John Smith"
          email="email@gmail.com"
          phone="(555) 555-5555"
          location="Edmonton, AB"
        />

        <section className="work-experience ">
          <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
            Work experience
          </div>
          <ul className="work-experience-item">
            <WorkExperience
              companyName="Top Company"
              time="Oct. 2017 – Present"
              jobTitle="Founder & CEO"
              jobLocation="Denver, CO"
              description1=" As Founder & CEO, I oversee our core strategies, product roadmap, ops, marketing, and fundraising."
              description2=" Core responsibility #3. Pretend this is where they stop     reading your resume. Whether Work or Education is your top section, the first 3 things they see better be your most impressive stuff, period."
              description3="Core responsibility #4. Bullets #1 and #2 are for high-level descriptions of the company and/or your role."
            />
            <WorkExperience
              companyName="Company Name"
              time="Month Year – Month Year"
              jobTitle="Job Title"
              jobLocation="City, ST"
              description1="Core Responsibility #1"
              description2="Core Responsibility #2"
              description3="Core Responsibility #3"
            />
            <WorkExperience
              companyName="Company Name"
              time="Month Year – Month Year"
              jobTitle="Job Title"
              jobLocation="City, ST"
              description1="Core Responsibility #1"
              description2="Core Responsibility #2"
            />
          </ul>
        </section>

        <section className="project">
          <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
            Projects
          </div>
          <Projects
            projectName="Project Name"
            description1="As Founder & CEO, I oversee our core strategies, product roadmap, ops, marketing, and fundraising."
            description2="Core responsibility #4. Bullets #1 and #2 are for high-level descriptions of the company and/or your role."
          />
        </section>

        <section className="education">
          <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
            Education
          </div>
          <Education
            universityName="University Name"
            time="Graduation Time, Year"
            degree="Degree (e.g., BS), Majors (e.g., Computer Science)"
            location="City, ST"
            description1="List your honors like summa cum laude or Economics Honors Society; 3.X/4.0 GPA (list only if GPA is over 3.3)"
            description2="Studied abroad in City, Country during spring/fall 20YY semester (University Name)"
            description3="Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color"
          />
        </section>

        <section className="skill">
          <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
            Skill
          </div>
          <Skill description="Strategic planning; strategic partnerships; revenue modeling & forecasting; retail partnerships, sales, & distro; contract negotiations; account management; Amazon marketing; channel marketing; crowdfunding; copywriting; content marketing; brand marketing; DTC; Shopify; supply chain management; Keynote / PPT presentation" />
        </section>
      </div>
    </div>
  );
}

export default View;
