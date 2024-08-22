import SearchField from "./SearchField";

const TableRow = ({ label }) => (
    <tr className="">
        <td className="px- py-2 whitespace-nowrap font-bold text-gray-700 text-lg">{label} :</td>
        <td className="px-2 py-4 whitespace-nowrap">
            <SearchField />
        </td>
    </tr>
);

export default TableRow;
