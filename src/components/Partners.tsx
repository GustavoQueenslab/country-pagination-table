import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex  flex-col w-full text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
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
