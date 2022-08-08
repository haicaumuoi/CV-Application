import React, { useState } from "react";
import uniqid from "uniqid";

function Descriptions(description1, description2, description3) {
  const descriptions = [];
  if (description1 !== null) {
    descriptions.push(description1.description1);
  }

  if (description2 !== null) {
    descriptions.push(description1.description2);
  }

  if (description3 !== null) {
    descriptions.push(description1.description3);
  }

  return descriptions.map((description) => <li>{description}</li>);
}

export default Descriptions;
