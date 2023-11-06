import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary px-[10%] md:px-[15%] text-center  text-[#48484B] flex-col xl:flex-row gap-4 xl:gap-0 flex justify-center body-md  items-center font-normal">
      <p>
        <span className="xl:mr-2">Innofuseblue Portugal </span>
        <span className="xl:inline hidden">|</span>
        <span className="mx-2">contact@innofuseblue.com</span>
      </p>
    </footer>
  );
}
