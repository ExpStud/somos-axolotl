import { FC } from "react";
import { PatternSVG, TextDropdown } from "@components";
import Image from "next/image";

const Description: FC = () => {
  return (
    <div className="description-inner-padding description-page-height relative w-screen flex justify-center">
      <div className="max-width flex flex-col lg:flex-row no-wrap pt-20 3xl:justify-between w-full">
        <div className="flex flex-col gap-2 max-w-[500px]">
          <div className="row-centered text-somos-red border-[0.85px] border-somos-red w-[96px] h-[24px] text-xs ">
            The story
          </div>
          <h2 className="max-w-[184px] md:max-w-[270px]">The Axolotl story.</h2>
          <TextDropdown
            content={`<p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            </p></br> <p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers.</p>`}
            className="pb-10"
          />
        </div>
        <Image
          src="/images/axolotl.png"
          alt="Axolotl"
          width={587}
          height={640}
          className="-z-[1] rotate-36 absolute -right-40 -top-28  xs:-right-48 xs:-top-36 lg:-right-16 lg:-top-16 xl:top-[100px] xl:right-[10vw] 3xl:top-[5vw] 3xl:right-[20vw] 3xl:scale-150"
        />
      </div>
      <PatternSVG className="absolute -bottom-20 md:-bottom-10 lg:bottom-0 -z-[2]" />
    </div>
  );
};

export default Description;
