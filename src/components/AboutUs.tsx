"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  return (
    <div className="w-full text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
      <div className="flex flex-col items-center">
        <div className="max-w-[760px]">
          <p className="display-sm xl:display-lg font-light">
            Founded by pioneers in the Sustainable Blue Economy
          </p>
          <p className="mt-8 xl:headline-sm text-center title-md font-normal">
            Our mission is to embrace and infuse the Blue Economy in Portugal
            with global best practice innovation programs and practices to
            further scale sustainable blue solutions and projects, and to share
            ocean related knowledge.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 xl:flex-row mt-20 items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/susanne.png"
            width={180}
            height={180}
            alt="Susanne Wedin-Schildt image"
          />
          <div className="mt-4 xl:mt-12 max-w-[463px]">
            <p className="title-lg font-semibold">Susanne Wedin-Schildt</p>
            <p className="body-md lg:body-lg font-normal mt-1 text-center">
              Business and IT-experienced leader at heart and passionate about
              the well-being of our planet with experience in building,
              operating, and transforming businesses across industry verticals.
              Founder of Ocean Community and engaged Mentor and Advisor to
              several Blue and Green start-ups.
            </p>
          </div>
          <div className="flex gap-6 mt-10">
            <Link
              href="https://www.linkedin.com/in/susanne-wedin-schildt-a5603ba/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width={40}
                height={40}
                alt="Button icon"
              />
            </Link>
            <Link href="malito:susanne@innnofuseblue.com">
              <Image
                src="/email.svg"
                width={40}
                height={40}
                alt="Button icon"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/ann.png"
            width={180}
            height={180}
            alt="Ann Lee Carpenter image"
          />
          <div className="mt-8 xl:mt-12 max-w-[463px]">
            <p className="title-lg font-semibold">Ann Lee Carpenter</p>
            <p className="body-md lg:body-lg font-normal mt-1 text-center">
              Strategic and market-focused leader dedicated to building the
              global tech entrepreneurial community with domain expertise in
              ocean tech/bluetech and adjacencies, together with extensive
              experience from within Ports- and Shipping industries. Founder and
              CEO of BraidTheory, a venture advisory and accelerator
              headquartered in Los Angeles
            </p>
          </div>
          <div className="flex gap-6 mt-10">
            <Link
              href="https://www.linkedin.com/in/annleecarpenter/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width={40}
                height={40}
                alt="Button icon"
              />
            </Link>
            <Link href="malito:ann@innnofuseblue.com">
              <Image
                src="/email.svg"
                width={40}
                height={40}
                alt="Button icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
