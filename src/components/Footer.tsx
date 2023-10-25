import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary px-[10%] md:px-[15%] text-center text-[#48484B] flex-col xl:flex-row gap-4 xl:gap-0 flex justify-between body-md  items-center font-normal">
      <p className="hidden xl:block">
        <span className="xl:mr-2">Innofuseblue Portugal </span>
        <span>|</span>
        <span className="mx-2 ">contact@innofuseblue.com</span>
      </p>
      <p className="xl:hidden">Innofuseblue Portugal</p>
      <p className="xl:hidden">contact@innofuseblue.com</p>
      <Link href="https://www.queenslab.co/" target="_blank">
        Made by <span className="underline">QueensLab</span>
      </Link>
    </footer>
  );
}
