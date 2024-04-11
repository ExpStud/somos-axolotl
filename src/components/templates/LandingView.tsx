import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* our project */}
      <div
        id="home"
        className="relative h-screen w-screen bg-black overflow-hidden lg:px-[15vw] pt-[20svh] z-0"
      >
        {/* TODO: add bg video */}
        <Image
          src="/images/temp.png"
          alt="EXP"
          fill
          className="object-cover opacity-15 overflow-hidden -z-10"
          onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
        {/* content */}
        <div className="flex justify-center lg:justify-between items-center w-full">
          <Image
            src="/images/logos/lg.svg"
            height={162.04}
            width={230}
            alt="Somos Axolotl"
            priority
            className="w-[110px] lg:w-auto"
          />
          <div className="flex gap-6"></div>
        </div>
      </div>
      {/* about */}
      <div id="about" className="relative h-screen w-screen "></div>
    </div>
  );
};

export default LandingView;
