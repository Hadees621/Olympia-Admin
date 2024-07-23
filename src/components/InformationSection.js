export const InformationSection = ({ title, info, imageUrl, bookFlag, isEditable, onUpdate }) => (
  <div className="w-full shadow-md bg-[#F7F7F7]">
    <div className="p-5 mx-4 border-b">
      <p className="text-xl font-bold">{title}</p>
    </div>
    <div className="flex justify-between p-8">
      <div className="my-4 gap-4 grid ">
        {info.map((item, index) => (
          <div key={index}>
            {isEditable ? (
              <input
                type="text"
                defaultValue={item.value}
                onChange={(e) => console.log("Update value", index, e.target.value)}
                className="p-2 w-[200px]"
              />
            ) : (
              <>
                <p className="text-sm font-semibold text-gray-600">{item.label}</p>
                <p className="text-lg font-semibold text-black">{item.value}</p>
              </>
            )}
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