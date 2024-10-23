import React from "react";
import CardVideo from "../cardVideo/CardVideo";
import Photos from "../photos/Photos";

export default function ShowReel() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20">
      <CardVideo title="Tiktok CammalChannel - My Tiktok"></CardVideo>
      <Photos></Photos>
    </div>
  );
}
