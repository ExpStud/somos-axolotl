import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Donate: FC<Props> = (props: Props) => {
  const { className } = props;
  const [winWidth, winHeight] = useWindowSize();

  return (
    <div className={`col-centered relative w-screen ${className}`} id="donate">
      <div
        className="flex flex-col-reverse xl:flex-row items-center justify-evenly rounded-[32px] bg-somos-blue p-4 md:p-0  
        max-w-[345px] sm:max-w-[500px] xl:max-w-[1245px]"
      >
        <div className="flex flex-col justify-center gap-4 md:gap-6 p-8 md:p-12 lg:min-w-[395px]">
          <div className="row-centered text-white border-[0.85px] border-white w-[135px] h-[24px] md:h-[32px] text-sm md:rounded-[21px]">
            Donate & Save
          </div>
          <h2 className="text-white max-w-[305px]"> Be part of saving lorem</h2>
          <p className="text-white">
            The Axolotl is a species scientists are apprehensive about going
            extinct soon
          </p>
          <button className="teal-hover-dark col-centered mt-4 text-sm md:text-base rounded-xl w-full max-w-[313px] h-[40px] md:h-[48px] transition-200  text-white font-poppins-semibold">
            💰 Donate
          </button>
        </div>
        <Image
          src="/images/temp.png"
          alt="Donate"
          width={winWidth < 640 ? 307 : 721}
          height={winWidth < 640 ? 292 : 504}
          className="rounded-[32px] aspect-[1.05/1] sm:aspect-[2.8/2] object-cover"
        />
      </div>
    </div>
  );
};

export default Donate;
