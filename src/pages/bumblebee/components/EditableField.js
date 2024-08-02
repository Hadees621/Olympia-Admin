import React from "react";
import Tick from "./Tick";

const EditableField = ({ fieldData, isEditing, onCheckboxChange }) => {
    return (
        <td className="px-6 py-4 border">
            {isEditing ? (
                <input
                    type="checkbox"
                    checked={fieldData?.completed || false}
                    onChange={onCheckboxChange}
                />
            ) : (
                fieldData?.completed ? (
                    <div className="grid justify-center">
                        <Tick />
                        <div>{fieldData?.date || "---"}</div>
                    </div>
                ) : (
                    "---"
                )
            )}
        </td>
    );
};

export default EditableField;
