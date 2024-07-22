export const Field = ({ label, component }) => (
    <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-600">{label}</p>
        {component}
    </div>
);