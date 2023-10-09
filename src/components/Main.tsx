"use client";
import { TypeAnimation } from "react-type-animation";

export default function Main() {
  return (
    <div className="h-screen bg-water flex flex-col justify-center items-center bg-no-repeat  bg-cover">
      <img
        src="innofuse.svg"
        className="absolute top-4 z-30 w-36"
        alt="Innofuseblue Logo"
      />
      <div className="absolute z-10 bg-[#015BAC] opacity-60 mix-blend-multiply w-full h-screen" />
      <div className="max-w-[1400px] w-full z-40">
        <div className="flex items-end text-center h-[100px] mb-8">
          <p className="text-white w-full text-center text-5xl font-semibold md:text-6xl lg:text-7xl xl:text-8xl">
            <TypeAnimation
              sequence={[
                "One World.",
                2000,
                "One Ocean.",
                2000,
                "Infinite opportunities.",
                4000,
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-[#0193D9]"
            />
          </p>
        </div>
        <p className="text-white break-keep	text-center  text-xl leading-none xl:mt-2 font-mediumtext-7xl md:text-7xl md:self-end">
          Let’s dive into the possibilities.
        </p>
      </div>
    </div>
  );
}
