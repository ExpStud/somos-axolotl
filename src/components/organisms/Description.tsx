import { FC } from "react";
import { TextDropdown } from "..";

const Description: FC = () => {
  return (
    <div className="inner-padding relative min-h-[100svh] w-screen">
      <div className="max-width flex-col lg:flex-row pt-20">
        <div className="flex flex-col gap-2">
          <div className="row-centered text-somos-red border-[0.85px] border-somos-red w-[96px] h-[24px] text-xs">
            The story
          </div>
          <h2 className="max-w-[184px] md:max-w-[270px]">The Axolotl story.</h2>
          <TextDropdown
            content={`<p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            </p></br> <p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers.</p>`}
            className="max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
