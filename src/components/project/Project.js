import React from "react";
import CardProject from "../cardProject/CardProject";

export default function Project() {
  return (
    <div className="flex justify-center w-full p-4 mt-2 mb-2 sm:mt-20 max-sm:mt-20 lg:mb-20">
      <div className="lg:w-[1240px] text-justify flex flex-col gap-y-10">
        <div className="flex flex-col text-justify gap-y-3">
          <h1 className="lg:text-4xl text-2xl font-bold text-[#005761]">
            Project 2024
          </h1>
          <CardProject></CardProject>
        </div>
        <div className="flex flex-col text-justify gap-y-3">
          <h1 className="lg:text-4xl text-2xl font-bold text-[#005761]">
            Website by Nina Company
          </h1>
          <CardProject></CardProject>
        </div>
      </div>
    </div>
  );
}
