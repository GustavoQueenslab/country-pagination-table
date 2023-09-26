import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex  flex-col w-full text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
      <div className="flex flex-col items-center max-w-[760px]">
        <p className="display-sm xl:display-lg font-light">Partners</p>
        <p className="mt-4 xl:mt-8 xl:headline-sm text-center title-md font-normal">
          This collaborative, partner-driven initiative will provide tangible
          results to Portugal’ blue economy and innovation ecosystem and impart
          greater ocean understanding.
        </p>
      </div>
      <div className="w-full flex justify-center mt-12 ">
        <div className="grid grid-cols-2 gap-8 xl:flex justify-center items-center justify-items-center">
          <img
            src="/oceanCommunity.png"
            alt="energy icon"
            className="opacity-50"
          />
          <img src="/23.png" alt="shipping icon" className="opacity-50" />
          <img src="/22.png" alt="fish icon" className="opacity-50" />
          <img src="/21.png" alt="boat icon" className="opacity-50" />
          <img src="/20.png" alt="mind icon" className="opacity-50" />
        </div>
      </div>
    </div>
  );
}
