import Button from "./Button";

export default function History() {
  return (
    <div
      className="w-full flex text-center px-[10%] md:px-[15%] xl:px-[5%] justify-center items-center py-[120px] py-"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-[80px] li md:text-[160px] xl:text-[320px] font-extralight text-[#41BDEB] leading-none ">
          25 years
        </p>
        <div className="mt-10 xl:mt-24 text-white title-md font-normal xl:headline-sm max-w-[760px]">
          <p>
            We have 10 years to innovate regeneratively and wisely to avoid the
            tipping point in 25 years, when the Ocean will irreversibly give up
            on us all.
          </p>
          <p className="mt-8 xl:mt-14">
            Ocean opportunities are endless if we approach them wisely. Lets do
            better across industries.
          </p>
        </div>
        <div className="mt-10">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
}
