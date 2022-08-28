/* eslint-disable @next/next/no-img-element */
import React from "react";

function Banner() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 relative">
        <div className="px-10 space-y-5 z-10">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write, read, and connect
          </h1>
          <h2>
            {`It's easy and free to post your thinking on any topic and connect with
          millions of readers`}
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full z-10"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />
        <div className="absolute hidden md:block  bg-white w-96 h-96 lg:w-[40rem] lg:h-[40rem] rounded-full right-0 -mr-32"></div>
      </div>
    </div>
  );
}

export default Banner;
