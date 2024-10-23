import React from "react";

export default function CardVideo({ title }) {
  return (
    <div className="lg:w-[1240px] text-justify flex flex-col gap-y-3 justify-center">
      <a
        href="https://www.tiktok.com/@camal_channel?lang=en"
        className="px-2 text-xl font-semibold"
      >
        <p>{title}</p>
      </a>
      <div className="grid w-full grid-cols-1 gap-3 px-2 m-auto lg:grid-cols-3">
        <video className=" lg:w-full" controls>
          <source src="../video2.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video3.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video6.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video7.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video8.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video9.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video10.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video11.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video12.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video13.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video14.mp4" type="video/mp4" />
        </video>
        <video className=" lg:w-full" controls>
          <source src="../video15.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
