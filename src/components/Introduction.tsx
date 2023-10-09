export default function Introduction() {
  return (
    <div className="w-full flex text-center px-[10%] md:px-[15%] justify-center items-center py-[120px]">
      <div className="max-w-[954px]">
        <p
          style={{
            backgroundImage:
              "linear-gradient(to right, #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE ,#0078C3, #0078C3 , #00A3E6 )",
          }}
          className="display-sm xl:display-lg text-transparent bg-clip-text font-light"
        >
          Your gateway to a world of Blue
          <br />
        </p>
        <p
          style={{
            backgroundImage:
              "linear-gradient(to right, #170F1A , #0D0116 , #0C041C , #0A0E2D , #081F4A , #043672 , #0054A6 , #005DAE ,#0078C3, #00A3E6, #00AEEF)",
          }}
          className="display-sm xl:display-lg text-transparent bg-clip-text font-light"
        >
          innovation and opportunity
        </p>
        <p className="mt-8 text-lg xl:text-2xl">
          Innofuse Blue brings together global best practices from the blue
          economy and entrepreneur supporting innovation programs, connecting
          with the blue business bommunity providing opportunities to scale. We
          are committed to engaging the global ecosystem to lead blue and
          sustainable innovation projects in Portugal and beyond.
        </p>
      </div>
    </div>
  );
}
