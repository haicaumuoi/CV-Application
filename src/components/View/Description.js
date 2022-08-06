import React, { useState } from "react";

function Descriptions(description1, description2, description3) {
  const description = [];
  if (description1 !== null) {
    description.push(description1);
  }

  if (description2 !== null) {
    description.push(description2);
  }

  if (description3 !== null) {
    description.push(description3);
  }

  for (let i = 0; i < description.length; i++) {
    return <li>{description}</li>;
  }
}

export default Descriptions;
