import { useState } from "react";
import AppList from "./Components/Sidebar/AppList";

const Text2 = ({ Data }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (data) => {
    setOpenDropdown(openDropdown === data ? false : data);
  };

  return (
    <>
      {Data.map((data) => (
        <div key={data.heading}>
          <button onClick={() => toggleDropdown(data.heading)}>
            {data.heading}
          </button>
          {openDropdown === data.heading && <AppList App={data.apps}></AppList>}
        </div>
      ))}
    </>
  );
};

export default Text2;
