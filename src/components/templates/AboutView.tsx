import { Dispatch, SetStateAction, FC } from "react";
import { PatternSVG, TextDropdown } from "@components";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="z-[1] w-full h-full flex flex-col items-center justify-center mt-[80px]">
      {/* About Description */}
      <div className="flex flex-col lg:flex-row gap-10 mt-12 lg:mt-[20vh] px-6 md:px-10">
        <div className="flex flex-col gap-6 max-w-[505px]">
          <Image
            src="/images/design/squares-yellow.svg"
            width={111}
            height={18}
            alt="Yellow Squares"
          />
          <h2 className="text-start !text-5xl !font-poppins-semibold">
            Our motive is to{" "}
            <span className="text-somos-teal">influence an impactful</span>{" "}
            <span className="text-somos-red">change.</span>
          </h2>
        </div>
        <TextDropdown
          className="max-w-[505px]"
          content={`<p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            </p></br> <p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers.</p>`}
        />
      </div>
      <div className="relative self-end w-screen aspect-[5.25/1] max-w-[1440px] mt-32 -z-10">
        <Image
          src="/images/design/red-stroke.png"
          fill
          className=""
          alt="Red Stroke"
        />
      </div>
      <PatternSVG className="my-20 lg:my-32" />
    </div>
  );
};

export default AboutView;
