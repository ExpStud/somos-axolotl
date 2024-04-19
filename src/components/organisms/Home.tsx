import { Dispatch, SetStateAction, FC, useRef, useEffect } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import Gallery from "../molecules/Gallery";
import { useInView } from "framer-motion";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  handleViewChange: (value: boolean) => void;
}

const Home: FC<Props> = (props: Props) => {
  const { setAssets, handleViewChange } = props;

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) handleViewChange(true);
    else handleViewChange(false);
  }, [handleViewChange, isInView]);

  return (
    <div
      id="home"
      className="inner-padding flex flex-col md:gap-6 items-center justify-evenly 3xl:justify-center 3xl:gap-20 relative min-h-screen lg:h-screen w-screen bg-black overflow-hidden z-[1] "
      ref={ref}
    >
      {/* TODO: add bg video */}
      <Image
        src="/images/temp.png"
        alt="EXP"
        fill
        className="object-cover opacity-20 overflow-hidden -z-10"
        onLoad={() => handleAssetLoad(0, setAssets)}
      />
      {/* content */}
      <div className="max-width flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-0 justify-center md:justify-between items-center md:items-end  pb-14 md:pb-6 lg:pb-12 md:w-full">
        <Image
          src="/images/logos/lg.svg"
          height={162.04}
          width={230}
          alt="Somos Axolotl"
          priority
          className="w-[110px] md:w-auto"
        />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-row md:flex-col-reverse items-end md:items-start md:gap-3 justify-between md:justify-start">
            <h2 className="text-white text-[32px] md:text-[40px] w-[118px] md:w-[178px] leading-9">
              Our Project
            </h2>
            <div className="row-centered text-white border-[0.85px] border-white w-[103px] md:w-[74px] h-[27.6px] md:h-[24px] text-xs">
              Vision
            </div>
          </div>
          <p className="text-white xs:max-w-[293px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface In publishing and graphic design, Lorem ipsum is a
            placeholder text commonly used to
          </p>
        </div>
      </div>
      <Gallery />
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:flex mb-4"
      >
        <path
          d="M19.4531 38.4375L28.5253 47.3081C29.3451 48.1096 30.6549 48.1096 31.4747 47.3081L40.5469 38.4375M19.4531 21.5625L28.5253 12.6919C29.3451 11.8904 30.6549 11.8904 31.4747 12.6919L40.5469 21.5625"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26.7188 29.7656C26.7188 31.7073 28.2927 33.2812 30.2344 33.2812C32.176 33.2812 33.75 31.7073 33.75 29.7656C33.75 27.824 32.176 26.25 30.2344 26.25C28.2927 26.25 26.7188 27.824 26.7188 29.7656Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Home;
