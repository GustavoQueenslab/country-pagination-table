import HeaderComponent from "./HeaderComponent";

export default function Partners() {
  return (
    <div className="flex  flex-col w-full text-center px-[10%] md:px-[15%] justify-center items-center py-24">
      <div className="flex flex-col items-center max-w-[717px]">
        <p className="display-sm xl:display-lg">Partners</p>
        <p className="mt-4 xl:mt-8 xl:headline-sm text-center title-md font-normal">
          Lorem ipsum dolor sit amet consectetur. Nisl convallis purus et vel.
          Tempor vestibulum gravida enim enim mauris. Tortor elementum a aliquet
          euismod.
        </p>
      </div>
      <div className="w-full flex justify-center mt-12">
        <div className="grid grid-cols-2 gap-8 xl:flex justify-between w-[900px]">
          <div className="xl:w-36 xl:h-20 border flex justify-center border-black items-center">
            <p className="headline-md">Logo</p>
          </div>
          <div className="xl:w-36 xl:h-20 border flex justify-center border-black items-center">
            <p className="headline-md">Logo</p>
          </div>
          <div className="xl:w-36 xl:h-20 border flex justify-center border-black items-center">
            <p className="headline-md">Logo</p>
          </div>
          <div className="xl:w-36 xl:h-20 border flex justify-center border-black items-center">
            <p className="headline-md">Logo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
