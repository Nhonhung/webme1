import React from "react";

export default function NenWeb() {
  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
      >
        <source src="/nen.mp4" type="video/mp4" />
      </video>

      {/* Nội dung phía trên video */}
      <div className="relative z-10 text-white p-4">
        <h1 className="text-4xl font-bold">Nội dung của bạn ở đây</h1>
      </div>
    </>
  );
}
