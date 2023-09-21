export default function BlueInnovationHub() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-24"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="xl:display-lg text-4xl">Blue Innovation Hub</p>
        <p className="mt-8 xl:headline-sm max-w-[858px] text-center title-md font-normal">
          Lorem ipsum dolor sit amet consectetur. Nisl convallis purus et vel.
          Tempor vestibulum gravida enim enim mauris. Tortor elementum a aliquet
          euismod.
        </p>
      </div>
      <img src="almada.png" className=" mt-20" />
      <p className="mt-14 title-md xl:display-sm">CTA to startups</p>
    </div>
  );
}
