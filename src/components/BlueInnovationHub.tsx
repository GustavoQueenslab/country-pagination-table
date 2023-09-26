import Button from "./Button";

export default function BlueInnovationHub() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="display-sm xl:display-lg font-light">
          Blue Innovation Hub
        </p>
        <p className="mt-8 xl:headline-sm max-w-[765px] text-center title-md font-normal">
          With a prime location on the Tejo riverbank overlooking Lisbon, the
          Blue Innovation Hub provides a bright and spacious environment for
          acceleration programs and an international landing pad for blue
          technology ventures to complement, infuse and accelerate the
          Portuguese ocean ecosystem with global best practices.
        </p>
      </div>
      <img src="almada.png" className=" mt-20" />
      <div className="mt-8">
        <Button>Let&apos;s innovate</Button>
      </div>
    </div>
  );
}
