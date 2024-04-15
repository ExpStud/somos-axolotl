import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import Gallery from "../molecules/Gallery";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const Home: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div
      id="home"
      className="inner-padding flex flex-col items-center relative min-h-screen lg:h-[100svh] w-screen bg-black overflow-hidden z-0 "
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
      <div className="max-width flex flex-col md:flex-row gap-16 md:gap-14 lg:gap-0 justify-center lg:justify-between items-center md:items-end  pb-14 md:pb-20 lg:pb-20 3xl:pb-[10svh] md:w-full">
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
            <h2 className="text-white text-[32px] md:text-[40px] w-[118px] md:w-[178px]">
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
    </div>
  );
};

export default Home;
