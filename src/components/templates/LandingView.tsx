import { Dispatch, SetStateAction, FC } from "react";
import { Description, Home, TextDropdown } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Home setAssets={setAssets} />
      {/* <div className="inner-padding relative min-h-[100svh] w-screen">
        <div className="max-width flex-col lg:flex-row pt-20">
          <div className="flex flex-col gap-2">
            <button className="hover-opacity text-somos-red border-[0.85px] border-somos-red w-[96px] h-[24px] text-xs">
              The story
            </button>
            <h2 className="max-w-[184px] md:max-w-[270px]">
              The Axolotl story.
            </h2>
          </div>
        </div>
      </div> */}
      <Description />
    </div>
  );
};

export default LandingView;
