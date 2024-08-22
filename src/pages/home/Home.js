import Title from "components/Title";
import Button from "components/Button";
import Table from "./components/Table";
import React, { useState } from "react";
import useSidebarStore from "stores/States";
import SearchField from "components/SearchField";
import SelectField from "components/SelectField";

const Home = () => {
  const { isOpen } = useSidebarStore();
  const [selectedValues, setSelectedValues] = useState(["", "", "", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["All", "All", "All Countries", "Select Genre"];

  return (
    <div
      className={`w-full text-start items-center m-4 ${
        isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
      } `}
    >
      <Title />

      <div className="flex items-center mt-8 gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button
          title="Add New Record"
          href="/add-new-record"
          bg="bg-green-600"
          hover="hover:bg-green-700"
          text={"text-white"}
        />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex gap-2 justify-start mt-3 items-center w-full">
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
          />
        ))}
        <Button title="Filter" />
        <Button title="Clear" />
      </div>

      <Table />
    </div>
  );
};

export default Home;
