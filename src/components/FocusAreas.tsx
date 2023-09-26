import Image from "next/image";

export default function FocusAreas() {
  return (
    <div className="w-full text-dark bg-[#F0F5F5] flex flex-col text-center  justify-center items-center py-[120px] !px-[10%] !md:px-[15%]">
      <div className="max-w-[748px]">
        <p className="display-sm md:display-lg font-light">Focus areas</p>
        <p className="mt-8 text-lg md:text-2xl">
          Unsustainable practices creates an ocean of opportunities. Aligned
          with Portugal Blue Economy Priorities, the initial intervention
          focuses on 5 innovation categories.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-2  just xl:flex xl:flex-row mt-20 justify-between gap-16">
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[200px]">
            <Image src="/Energy.svg" alt="a" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Ocean Energy</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[270px]">
            <Image src="/2.svg" alt="a" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Shipping and Ports</p>
          </div>
          <div className="flex flex-col items-center max-w-[140px] lg:max-w-[270px]">
            <Image src="/Food.svg" alt="a" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Future Food Systems</p>
          </div>
          <div className="flex flex-col items-center   max-w-[140px] lg:max-w-[270px]">
            <Image src="/Boating.svg" alt="a" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Recreational Boating</p>
          </div>
          <div className="flex flex-col items-center col-span-2 ">
            <Image src="/Tech.svg" alt="a" width={130} height={130} />
            <p className="mt-4 body-md md:body-lg">Ocean Data and Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
