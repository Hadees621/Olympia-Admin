export const InformationSection = ({ title, info, imageUrl, bookFlag }) => (
  <div className="w-full shadow-md bg-[#F7F7F7]">
    <div className="border-b pb-3 mb-3 mx-4">
      <p className="text-xl font-bold mx-5 mt-4">{title}</p>
    </div>
    <div className="flex justify-between p-8">
      <div className="my-4 gap-4 grid">
        {info.map((item, index) => (
          <div key={index}>
            <p className="text-sm font-semibold text-gray-600">{item.label}</p>
            <p className="text-lg font-semibold text-black">{item.value}</p>
          </div>
        ))}
        {bookFlag && (
          <button className="shadow bg-[#D3D3D4] text-sm p-1 font-semibold">
            Download Cover
          </button>
        )}
      </div>
      {imageUrl && (
        <div>
          <p className="text-sm font-semibold text-gray-600">Author Picture:</p>
          <img src={imageUrl} alt="author" />
        </div>
      )}
    </div>
  </div>
);
