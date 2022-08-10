import { v4 as uuidv4 } from "uuid";

const data = {
  personal: {
    name: "John Smith",
    email: "email@gmail.com",
    phone: "(555) 555-5555",
    location: "Edmonton, AB",
    key: uuidv4(),
  },
  experience: [
    {
      key: uuidv4(),
      id: 0,
      companyName: "Top Company",
      timeWorked: "Oct. 2017 – Present",
      jobTitle: "Founder & CEO",
      jobLocation: "Denver, CO",
      jobDescription1:
        " As Founder & CEO, I oversee our core strategies, product roadmap, ops, marketing, and fundraising.",
      jobDescription2:
        " Core responsibility #3. Pretend this is where they stop reading your resume. Whether Work or Education is your top section, the first 3 things they see better be your most impressive stuff, period.",
      jobDescription3:
        "Core responsibility #4. Bullets #1 and #2 are for high-level descriptions of the company and/or your role.",
    },
    {
      key: uuidv4(),
      id: 1,
      companyName: "Company Name",
      timeWorked: "Month Year – Month Year",
      jobTitle: "Job Title",
      jobLocation: "City, ST",
      jobDescription1: "Core Responsibility #1",
      jobDescription2: "Core Responsibility #2",
      jobDescription3: "Core Responsibility #3",
    },
    {
      key: uuidv4(),
      id: 2,
      companyName: "Company Name",
      timeWorked: "Month Year – Month Year",
      jobTitle: "Job Title",
      jobLocation: "City, ST",
      jobDescription1: "Core Responsibility #1",
      jobDescription2: "Core Responsibility #2",
      jobDescription3: "Core Responsibility #3",
    },
  ],
  projects: [
    {
      id: 0,
      key: uuidv4(),
      projectName: "Project Name",
      projectDescription1:
        "As Founder & CEO, I oversee our core strategies, product roadmap, ops, marketing, and fundraising.",
      projectDescription2:
        "Core responsibility #4. Bullets #1 and #2 are for high-level descriptions of the company and/or your role.",
    },
  ],
  education: [
    {
      id: 0,
      key: uuidv4(),
      universityName: "University Name",
      educationTime: "Graduation Time, Year",
      degree: "Degree (e.g., BS), Majors (e.g., Computer Science)",
      universityLocation: "City, ST",
      educationDescription1:
        "List your honors like summa cum laude or Economics Honors Society; 3.X/4.0 GPA (list only if GPA is over 3.3)",
      educationDescription2:
        "Studied abroad in City, Country during spring/fall 20YY semester (University Name)",
      educationDescription3:
        "Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color",
    },
  ],
  skill: [
    {
      id: 0,
      key: uuidv4(),
      skillDescription:
        "Strategic planning; strategic partnerships; revenue modeling & forecasting; retail partnerships, sales, & distro; contract negotiations; account management; Amazon marketing; channel marketing; crowdfunding; copywriting; content marketing; brand marketing; DTC; Shopify; supply chain management; Keynote / PPT presentation",
    },
  ],
};

export default data;
