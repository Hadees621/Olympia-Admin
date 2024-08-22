import Button from "components/Button";
import React from "react";

const Box = () => {
  return (
    <div className="shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">Illustrations information</p>
      </div>
      <div className="flex justify-between w-full p-8">
        <div className="my-4 gap-4 space-y-7">
          <div>
            <p className="text-sm font-semibold text-gray-600">
              illustrations provided by?
            </p>
            <p className="text-lg font-semibold text-black">NA</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Illustrations description provided by
            </p>
            <p className="text-lg font-semibold text-black">NA</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Colour or black and white illustrations
            </p>
            <p className="text-lg font-semibold text-black">NA</p>
          </div>{" "}
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Total illustrations?
            </p>
            <p className="text-lg font-semibold text-black">NA</p>
          </div>{" "}
          <div>
            <p className="text-sm font-semibold text-gray-600">Book size:</p>
            <p className="text-lg font-semibold text-black">
              234X156MM (Royal Portrait)
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Test</p>
            <p className="text-lg font-semibold text-black">ullus</p>
          </div>
          <Button
            title={"Download Cover"}
            text={"text-sm text-green-500 mt-4 shadow"}
            bg=""
          />
        </div>
        <div className="gap-4 grid w-[45%]">
          <p className="text-sm font-bold text-gray-600">
            Illustrations style reference (Author):
          </p>
          <div className="">
            <img
              src={"https://picsum.photos/300/300?grayscale"}
              alt="author"
              className="w-full h-full rounded-full"
            />
          </div>

          <Button
            title={"Download style reference"}
            text={"text-xs text-green-500 mt-4 shadow"}
            bg=""
          />
          <div className="">
            <img
              src={"https://picsum.photos/300/300?grayscale"}
              alt="author"
              className="w-full h-full rounded-full"
            />
          </div>

          <Button
            title={"Download style reference"}
            text={"text-xs text-green-500 mt-4 shadow"}
            bg=""
          />

          <div className="">
            <img
              src={"https://picsum.photos/300/150?grayscale"}
              alt="author"
              className="w-full h-full"
            />
          </div>

          <Button
            title={"Download style reference"}
            text={"text-xs text-green-500 mt-4 shadow"}
            bg=""
          />

          <div className="">
            <img
              src={"https://picsum.photos/300/150?grayscale"}
              alt="author"
              className="w-full h-full"
            />
          </div>
          <Button
            title={"Download style reference"}
            text={"text-xs text-green-500 mt-4 shadow"}
            bg=""
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
