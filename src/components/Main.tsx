export default function Main() {
  return (
    <div className="h-screen bg-no-repeat bg-water flex flex-col justify-center items-center">
      <img src="innofuse.svg" className="absolute top-4 w-36" />
      <div className="px-[10%] md:px-[15%] w-full">
        <div className="flex flex-col gap-1 md:w-3/4">
          <p className="text-white text-2xl font-semibold md:text-8xl">
            One opportunity
          </p>
          <p className="text-white font-extrabold text-5xl md:text-9xl">
            Let&apos;s grab it.
          </p>
        </div>
      </div>
    </div>
  );
}
