import React, { useState } from "react";

function PersonalDetails({ name, email, phone, location }) {
  return (
    <div className="personal-detail border-b border-black">
      <h1 className="name text-left text-4xl font-bold">{name}</h1>
      <div className="contact-info flex ">
        <p className="email text-xl">{email}</p>
        <p className="text-xl mx-1">❖</p>
        <p className="phone-number text-2xl mx-1 font-sans">{phone}</p>
        <p className="text-xl mx-1">❖</p>
        <p className="personal-location text-xl">{location}</p>
      </div>
    </div>
  );
}

export default PersonalDetails;
