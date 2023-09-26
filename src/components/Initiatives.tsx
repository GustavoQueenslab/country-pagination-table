export default function Initiatives() {
  return (
    <div className="w-full bg-primary text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
      <div className="flex flex-col items-center">
        <p className="display-sm md:display-lg font-light">Initiatives</p>
        <p className="mt-8 xl:headline-sm max-w-[760px] text-center title-md font-normal">
          Together with consortium partners, Innofuse Blue connects the Blue
          Business Community and bring the world’s best practices and
          acceleration programs to Portugal and scale out sustainable solutions.
        </p>
      </div>
      <div className="flex flex-col items-start xl:flex-row justify-between mt-10 xl:mt-20 gap-12 ">
        <div className="max-w-[340px]">
          <p className="headline-md text-[#41BDEB] font-semibold">
            Blue innovation
          </p>
          <p className="body-lg font-normal mt-3">
            Enable blue early stage ideas, individuals, teams, and university
            partners, to develop sustainable concepts and prototypes with a
            promising solution potential.
          </p>
        </div>
        <div className="max-w-[340px] ">
          <p className="headline-md text-[#41BDEB] font-semibold">
            Blue acceleration
          </p>
          <p className="body-lg font-normal mt-3">
            Provide the specialised and proven acceleration required to take
            viable high potential ideas and solutions to the stages of investor
            readiness, scalability and impact.
          </p>
        </div>
        <div className="max-w-[340px]">
          <p className="headline-md text-[#41BDEB] font-semibold">
            Global community
          </p>
          <p className="body-lg font-normal mt-3">
            Build a global ocean innovation community, share knowledge, and
            foster collaboration with other blue initiatives. Commit to
            out-of-the-box and into-the-ocean thinking, to build bridges and
            tear down silos.
          </p>
        </div>
      </div>
    </div>
  );
}
