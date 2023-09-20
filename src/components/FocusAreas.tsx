export default function FocusAreas() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-24"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="max-w-[662px]">
        <p className="text-4xl md:text-6xl">Focus areas</p>
        <p className="mt-8 text-lg md:text-2xl">
          Unsustainable practices creates an ocean of opportunities. Aligned
          with Portugal Blue Economy Priorities, the initial intervention
          focuses on 5 innovation categories.
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-6 mt-20">
        <div className="flex flex-col items-center w-[200px] md:w-[270px]">
          <div className="w-28 h-28 rounded-full border border-white" />
          <p className="mt-4 headline-xs md:headline-sm">Ocean Energy</p>
        </div>
        <div className="flex flex-col items-center w-[200px] md:w-[270px]">
          <div className="w-28 h-28 rounded-full border border-white" />
          <p className="mt-4 headline-xs md:headline-sm">Shipping and Ports</p>
        </div>
        <div className="flex flex-col items-center w-[200px] md:w-[270px]">
          <div className="w-28 h-28 rounded-full border border-white" />
          <p className="mt-4 headline-xs md:headline-sm">
            {" "}
            Future Food systems/Sustainable Aquaculture
          </p>
        </div>
        <div className="flex flex-col items-center w-[200px] md:w-[270px]">
          <div className="w-28 h-28 rounded-full border border-white" />
          <p className="mt-4 headline-xs md:headline-sm">
            Clean Marinas/Recreational Boating
          </p>
        </div>
        <div className="flex flex-col items-center w-[200px] md:w-[270px]">
          <div className="w-28 h-28 rounded-full border border-white" />
          <p className="mt-4 headline-xs md:headline-sm">Ocean Data and Tech</p>
        </div>
      </div>
    </div>
  );
}
