import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col w-full border border-t-[10px] border-[#005761] lg:flex-row ">
      <div className="left lg:w-full bg-[#005761] flex text-white text-justify">
        <div className="flex items-center justify-start w-full p-10 text-lg lg:justify-center lg:text-xl">
          <div className="flex flex-col gap-y-2">
            <h1 className="md:text-5xl text-2xl text-[#e7e25a] ">Hey, I'm</h1>
            <h1 className="text-3xl font-bold md:text-6xl lg:text-8xl">
              Anh Pham
            </h1>
            <span className="text-xs md:text-base">
              Editor / Developer / Designer{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="right w-full  lg:w-2/4 bg-[#005761] ">
        <img
          src="../avatar2.jpg"
          className="block w-full h-full rounded-lg bject-cover"
          alt="avatar"
        />
      </div>
    </div>
  );
}
