import { FC } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

const Goals: FC = () => {
  const [winWidth, winHeight] = useWindowSize();

  return (
    <div
      className="col-centered px-6 md:px-12 lg:px-0 py-14 lg:py-28 relative w-screen"
      id="donate"
    >
      <div
        className="flex flex-col xl:flex-row items-center justify-evenly  p-4 md:p-0  
        max-w-[345px] sm:max-w-[500px] xl:max-w-[1245px]"
      >
        <Image
          src="/images/temp.png"
          alt="Donate"
          width={winWidth < 640 ? 307 : 721}
          height={winWidth < 640 ? 292 : 504}
          className="rounded-[32px] aspect-[1.05/1] sm:aspect-[2.8/2] object-cover"
        />
        <div className="flex flex-col justify-center gap-4 md:gap-6 p-8 md:p-12 lg:min-w-[395px]">
          <div className="row-centered text-somos-teal-450 border-[0.85px] border-somos-teal-450 w-[114px] md:w-[104px] h-[24px] text-sm ">
            the solution
          </div>
          <h2 className="">The Regeneration Goals</h2>
          <p className="text-white">
            The Axolotl is a species scientists are apprehensive about going
            extinct soon
          </p>
          <button className="teal-hover-dark col-centered mt-4 text-sm md:text-base rounded-xl w-full max-w-[313px] h-[40px] md:h-[48px] transition-200  text-white font-poppins-semibold">
            💰 Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
