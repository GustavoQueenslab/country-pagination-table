export default function Main() {
  const w1anim = {
    animation: "w1anim 20s infinite",
  };

  const w2anim = {
    animation: "w2anim 20s infinite",
  };

  const w3anim = {
    animation: "w3anim 20s infinite",
  };

  const w4anim = {
    animation: "w4anim 20s infinite",
  };

  const w5anim = {
    animation: "w5anim 20s infinite",
  };
  return (
    <div className="h-screen bg-water flex flex-col justify-center items-center bg-no-repeat  bg-cover">
      <img src="innofuse.svg" className="absolute top-4 z-30 w-36" />
      <div className="absolute z-10 bg-[#015BAC] opacity-60 mix-blend-multiply w-full h-screen" />
      <div className="max-w-[1400px] w-full z-40">
        <div className="mx-[10%] md:mx-[15%] flex flex-col gap-1  flex-1">
          <p className="text-white text-5xl font-semibold md:text-8xl">
            One
            <span className="bg-red-400 container">
              <span className="word w1 text-[#41BDEB]">World</span>
              <span className="word w2 text-[#41BDEB]">Ocean</span>
              <span className="word w3 text-[#41BDEB]">Opportunity</span>
            </span>
          </p>
          <p className="text-white font-extrabold text-5xl md:text-9xl md:self-end">
            Let&apos;s grab it.
          </p>
        </div>
      </div>
    </div>
  );
}
