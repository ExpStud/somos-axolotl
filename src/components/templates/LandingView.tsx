import { Dispatch, SetStateAction, FC } from "react";
import {
  Description,
  Home,
  Infographics,
  Partners,
  Donate,
  Goals,
  PatternSVG,
} from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  handleViewChange: (value: boolean) => void;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets, handleViewChange } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Home setAssets={setAssets} handleViewChange={handleViewChange} />

      <Description className="description-padding" />
      <PatternSVG className="my-20 lg:my-32" />

      <Infographics className="px-6" />
      <PatternSVG className="my-20 lg:my-32" />

      <Goals className="px-6 md:px-12 lg:px-10" />
      <PatternSVG className="my-20 lg:my-32" />

      <Partners className="" />
      <PatternSVG className="my-20 lg:my-32" />

      <Donate className="px-6 md:px-12 lg:px-0 pb-14 lg:pb-28" />
    </div>
  );
};

export default LandingView;
