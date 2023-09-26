"use client";
import { TypeAnimation } from "react-type-animation";

export default function Main() {
  return (
    <div className="h-screen bg-water flex flex-col justify-center items-center bg-no-repeat  bg-cover">
      <img src="innofuse.svg" className="absolute top-4 z-30 w-36" />
      <div className="absolute z-10 bg-[#015BAC] opacity-60 mix-blend-multiply w-full h-screen" />
      <div className="max-w-[1400px] w-full z-40">
        <div className="mx-[10%] md:mx-[15%] flex flex-col gap-1  flex-1">
          <p className="text-white text-4xl font-semibold md:text-7xl lg:text-8xl ">
            One{"  "}
            <TypeAnimation
              sequence={["World", 2000, "Ocean", 2000, "Opportunity", 4000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-[#41BDEB]"
            />
          </p>
          <p className="text-white break-keep	 font-extrabold text-[50px] leading-none lg:text-8xl text-7xl md:text-7xl md:self-end">
            Let&apos;s grab it.
          </p>
        </div>
      </div>
    </div>
  );
}
