
export const getStatusClass = (status) => {
    switch (status) {
        case "Pending":
            return "status-button status-pending";
        case "Paid in Full":
            return "status-button status-paid";
        case "Hardback":
            return "status-button status-hardback";
        case "Traditional":
            return "status-button status-traditional";
        case "Paying":
            return "status-button status-paying";
        default:
            return "status-button";
    }
};
