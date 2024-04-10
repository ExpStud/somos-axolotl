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
        className="relative h-screen w-screen bg-black overflow-hidden"
      >
        <Image
          src="/images/temp.png"
          alt="EXP"
          fill
          className="object-cover opacity-10 overflow-hidden"
          onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
      </div>
      {/* about */}
      <div id="about" className="relative h-screen w-screen "></div>
    </div>
  );
};

export default LandingView;
