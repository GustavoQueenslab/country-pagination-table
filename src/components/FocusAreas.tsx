import Image from "next/image";

export default function FocusAreas() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="max-w-[748px]">
        <p className="display-sm md:display-lg">
          Aligned with an ocean of opportunities
        </p>
        <p className="mt-8 text-lg md:headline-sm">
          Our innovation programs span across all Blue Economy categories,
          covering the full cycle from ideas to scalable solutions.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-2  just xl:flex xl:flex-row mt-20 justify-between gap-16">
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/Energy.svg"
              alt="Ocean Energy"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Ocean Energy</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[270px]">
            <Image
              src="/2.svg"
              alt="Shipping and Ports"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Shipping and Ports</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[270px]">
            <Image
              src="/Food.svg"
              alt="Future Food Systems"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Future Food Systems</p>
          </div>
          <div className="flex flex-col items-center   max-w-[140px] lg:max-w-[270px]">
            <Image
              src="/Boating.svg"
              alt="Recreational Boating"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Recreational Boating</p>
          </div>
          <div className="flex flex-col items-center col-span-2 ">
            <Image
              src="/Tech.svg"
              alt="Ocean Data and Tech"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Ocean Data and Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
