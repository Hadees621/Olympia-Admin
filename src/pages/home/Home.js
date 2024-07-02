import React, { useState } from "react";
import SearchField from "./components/SearchField";
import Button from "../../components/Button";
import SelectField from "../../components/SelectField";
const Home = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];
  return (
    <div className="w-[85%] text-center items-center">
      <p className="text-3xl font-semibold mt-16">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="flex gap-2 justify-center mt-16 items-center">
        <SearchField placeholder="Book Title" width="200px" />
        <SearchField placeholder="Pen name/Author name" width="200px" />
        <Button title="Search" text="text-[12px]" />
        <Button title="Clear" text="text-[12px]" />
      </div>

      <div className="flex gap-2 justify-center mt-6 items-center">
        <SearchField placeholder="Book Title" width="160px" />
        {Array(3)
          .fill()
          .map((_, index) => (
            <SelectField
              key={index}
              placeholder="All"
              value={selectedValue}
              onChange={handleSelectChange}
              options={options}
              width="160px"
            />
          ))}
        <Button title="Search" text="text-[12px]" />
        <Button title="Clear" text="text-[12px]" />
      </div>
    </div>
  );
};

export default Home;
