import Image from "next/image";

export default function FocusAreas() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]"
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
        <div className="grid grid-cols-2  xl:grid-cols-5 mt-20 justify-between gap-16">
          <div className="flex flex-col items-center  max-w-[140px] lg:max-w-[200px]">
            <Image src="/4.svg" alt="Aquaculture" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Aquaculture</p>
          </div>
          <div className="flex flex-col items-center  max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/5.svg"
              alt="Blue Biotechnology"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Blue Biotechnology</p>
          </div>
          <div className="flex flex-col items-center  max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/6.svg"
              alt="Blue Reneable Energy"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Blue Renewable Energy</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/2.svg"
              alt="Blue Tech & Ocean Observation"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">
              Blue Tech & Ocean Observation
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/3.svg"
              alt="Coastal & Maritime Tourism"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">
              Coastal & Maritime Tourism
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/7.svg"
              alt="Environmental Protection & Regeneration"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">
              Environmental Protection & Regeneration
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image src="/8.svg" alt="Fisheries" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Fisheries</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/9.svg"
              alt="Shipbuilding & Refit"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Shipbuilding & Refit</p>
          </div>
          <div className="flex flex-col items-center   max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/10.svg"
              alt="Shipping & Ports"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Shipping & Ports</p>
          </div>
          <div className="flex flex-col items-center  max-w-[140px] lg:max-w-[200px]">
            <Image
              src="/11.svg"
              alt="Water Management"
              width={130}
              height={130}
            />
            <p className="mt-4 body-md md:body-lg">Water Management</p>
          </div>
        </div>
        <div className="grid grid-cols-2  just xl:flex xl:flex-row mt-20 justify-between gap-16"></div>
      </div>
    </div>
  );
}
