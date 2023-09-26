import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="w-full text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
      <div className="flex flex-col items-center">
        <p className="display-sm md:display-lg font-light">About us</p>
        <p className="mt-8 xl:headline-sm max-w-[760px] text-center title-md font-normal">
          Our mission is to embrace and infuse the Blue Economy in Portugal with
          global best practice innovation programs and practices to further
          scale sustainable blue solutions and projects, and to share ocean
          related knowledge.
        </p>
      </div>
      <div className="flex flex-col gap-10 xl:flex-row mt-16 items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <Image src="/susanne.png" width={180} height={180} alt="susanne" />
          <div className="mt-4 xl:mt-12 max-w-[465px]">
            <p className="title-lg font-semibold">Susanne Wedin-Schildt</p>
            <p className="body-lg font-normal">
              Leader at heart and passionate about the well-being of our planet
              with experience building, operating and transforming businesses
              across industry verticals.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/ann.png" width={180} height={180} alt="susanne" />
          <div className="mt-8 xl:mt-12 max-w-[465px]">
            <p className="title-lg font-semibold">Ann Lee Carpenter</p>
            <p className="body-lg font-normal">
              Strategic and market-focused leader dedicated to building the
              global tech entrepreneurial community with domain expertise in
              ocean tech / bluetech and adjacencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
