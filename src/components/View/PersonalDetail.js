import React from "react";

function PersonalDetails({ name, email, phone, location }) {
  return (
    <div className="personal-detail border-b border-black">
      <h1 className="name text-left text-4xl font-bold">{name}</h1>
      <div className="contact-info flex flex-wrap">
        <p className="email text-lg">{email}</p>
        <p className="text-lg mx-1">❖</p>
        <p className="phone-number text-lg mx-1 font-sans">{phone}</p>
        <p className="text-lg mx-1">❖</p>
        <p className="personal-location text-lg">{location}</p>
      </div>
    </div>
  );
}

export default PersonalDetails;
