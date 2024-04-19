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
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Home setAssets={setAssets} />
      {/* description-padding description-page-height */}
      <Description className="description-padding" />
      <PatternSVG className="mt-20 lg:mt-24 mb-20" />
      {/* infographic-page-height infographic-padding */}
      <Infographics className="px-6" />
      <PatternSVG className="my-20" />
      {/*  pt-28 lg:pt-28 */}
      <Goals className="px-6 md:px-12 lg:px-10" />
      <PatternSVG className="my-20" />
      {/* pt-28 */}
      <Partners className="" />
      <PatternSVG className="my-20" />
      {/* px-6 md:px-12 lg:px-0 py-14 lg:py-28 */}
      <Donate className="px-6 md:px-12 lg:px-0 pb-14 lg:pb-28" />
    </div>
  );
};

export default LandingView;
