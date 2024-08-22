import { data } from "../utils/utils";
import React, { useState } from "react";
import TableComponent from "./TableComponent";
import DetailViewComponent from "./DetailViewComponent";

const PostLog = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleView = (item) => {
    setSelectedItem(item);
  };

  const handleRemoveDetail = (detailIndex) => {
    setSelectedItem((prevItem) => {
      const updatedDetails = prevItem.details.filter(
        (_, index) => index !== detailIndex
      );
      return { ...prevItem, details: updatedDetails };
    });
  };

  return (
    <div className="mx-auto">
      <div className="flex gap-6">
        <div className="w-full">
          <TableComponent data={data} onView={handleView} />
        </div>
        <div className="w-full">
          {selectedItem && (
            <DetailViewComponent
              item={selectedItem}
              onRemoveDetail={handleRemoveDetail}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostLog;
