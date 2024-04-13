import React, { useState } from "react";
import AppList from "./Components/Sidebar/AppList";

function Test() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? false : dropdownId);
    console.log(openDropdown === dropdownId ? false : dropdownId);
  };

  // Sample array of dropdown items
  const dropdownItems = [
    { id: 1, name: "Dropdown 1" },
    { id: 2, name: "Dropdown 2" },
    { id: 3, name: "Dropdown 3" },
    // Add more dropdown items as needed
  ];

  return (
    <div style={{ margin: "50px" }}>
      {dropdownItems.map((dropdown) => (
        <div key={dropdown.id}>
          <button onClick={() => toggleDropdown(dropdown.id)}>
            {dropdown.name}
          </button>
          {openDropdown === dropdown.id && (
            <div style={{ color: "white" }}>Hello</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Test;
