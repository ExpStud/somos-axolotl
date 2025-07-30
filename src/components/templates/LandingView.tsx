import { Dispatch, SetStateAction, FC } from "react";
import {
  Description,
  Home,
  Infographics,
  Partners,
  Donate,
  Goals,
  PatternSVG,
  Validator,
} from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  handleViewChange: (value: boolean) => void;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets, handleViewChange } = props;

  return (
    <div className="z-[1] w-full h-full flex flex-col items-center justify-center ">
      <h1 className="sr-only">
        Somos Axolotl uses technology and art to inspire action, create
        solutions, and build partnerships supporting symbiosis between
        Xochimilco&apos;s human and axolotl populations
      </h1>
      <Home setAssets={setAssets} handleViewChange={handleViewChange} />

      <Description className="description-padding" />
      <PatternSVG className="my-20 lg:my-32" />

      <Infographics className="px-6" />
      <PatternSVG className="my-20 lg:my-32" />

      <Goals className="px-6 md:px-12 lg:px-10" />
      <PatternSVG className="my-20 lg:my-32" />

      <Validator className="px-6 md:px-12 lg:px-10" />
      <PatternSVG className="my-20 lg:my-32" />

      <Partners className="px-2" />
      <PatternSVG className="my-20 lg:my-32" />

      <Donate className="px-6 md:px-12 lg:px-0 pb-14 lg:pb-28" />
    </div>
  );
};

export default LandingView;
