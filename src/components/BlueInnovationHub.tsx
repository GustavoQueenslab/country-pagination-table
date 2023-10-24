import Link from "next/link";
import Button from "./Button";
import ContactForm from "./ContactForm";

export default function BlueInnovationHub() {
  return (
    <div
      className="w-full text-white flex flex-col text-center !px-[10%] !md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #231F20 , #201B1E , #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE , #0078C3 , #00A3E6 )",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="display-sm xl:display-lg font-light">
          Anchored in Portugal
        </p>
        <img
          src="almada.png"
          alt="Image of the city of Almada "
          className=" mt-8"
        />
        <article className="mt-14 flex flex-col gap-8 xl:headline-sm max-w-[765px] text-center title-md font-normal">
          <p>
            Planned location for Innofuse Blue Incubator and innovation Hub is
            on the Tejo riverbank overlooking Lisbon, and less than 30 minutes
            from Lisbon International Airport.
          </p>
          <p>
            Our interim location is just steps away and provided by our partner
            Southshore Investments with the same bright and spacious environment
            for our soon to launch initial programs.
          </p>
          <p>
            This collaborative partner-driven initiative is evolving in parallel
            with program design, and we are happy to already be working closely
            with our University partners Nova University, and Egas Moniz, and
            with strong support from Almada Innovation District and Almada
            Municipality.
          </p>
        </article>
      </div>
      <p className="mt-20 mb-14 title-md xl:headline-lg">
        Interested in partnering with us? Let us know!
      </p>
      <Link href="/contact">
        <Button>Let&apos;s innovate</Button>
      </Link>
    </div>
  );
}
