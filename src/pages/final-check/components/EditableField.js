import React from "react";
import Tick from "pages/bumblebee/components/Tick";

const EditableField = ({ fieldData, isEditing, onCheckboxChange }) => {
    return (
        <td className="px-6 py-4 border text-center">
            {isEditing ? (
                <div className="grid justify-center gap-3">
                    <input
                        type="checkbox"
                        checked={fieldData?.completed || false}
                        onChange={onCheckboxChange}
                    />
                    <div>{fieldData?.date || "---"}</div>
                </div>
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
