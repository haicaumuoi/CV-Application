import React from "react";

function Skill({ skillDescription, key }) {
  return (
    <div>
      <div className="big-text uppercase text-base font-bold mt-3 text-left border-b border-black">
        Skill
      </div>
      <div className="skill-description text-left mt-2">{skillDescription}</div>
    </div>
  );
}

export default Skill;
