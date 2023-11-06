import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex  flex-col w-full text-center px-[10%] md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-8 xl:flex justify-center items-center justify-items-center">
          <img
            src="/oceanCommunity.png"
            alt="Ocean Community image"
            className="opacity-50"
          />
          <img src="/23.png" alt="Braid Theory image" className="opacity-50" />
          <img src="/22.png" alt="Nova School image" className="opacity-50" />
          <img src="/21.png" alt="Edgas moniz image" className="opacity-50" />
          <img
            src="/ql.png"
            width={205}
            alt="Queenslab image"
            className="opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
