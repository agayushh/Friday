import React from "react";

const PersonalInfo = () => {
  return (
    <div className="m-2 mt-7">
      <div className="opacity-40 text-lg">
        Personal Information of the Intelligence Personnel
      </div>
      <div>
        <ul className="list-disc list-inside text-white mt-2">
            <li>
                <span className="opacity-40">Name: </span> Your Name
            </li>
            <li>
                <span className="opacity-40">Bio: </span> Your Bio
            </li>
            <li>
                <span className="opacity-40">Email: </span>
                <a href="mailto:yourname@example.com">yourname@example.com</a>
            </li>
            <li>
                <span className="opacity-40">Phone: </span> +123-456-7890
            </li>
            <li>
                <span className="opacity-40">Address: </span> 123 Main St, City, Country
            </li>
            
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
