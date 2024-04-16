import { FC } from "react";
import { PatternSVG } from "@components";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

export type InfographicsDataType = {
  title: string;
  content: string[];
  displayImage: string;
  expandedImage: string;
};

export const infographicsData: InfographicsDataType[] = [
  {
    title: "The story",
    content: [
      "The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly.",
    ],
    displayImage: "/images/temp.png",
    expandedImage: "/images/temp.png",
  },
  {
    title: "The story",
    content: [
      "The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly.",
    ],
    displayImage: "/meta.png",
    expandedImage: "/meta.png",
  },
  {
    title: "The story",
    content: [
      "The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly.",
    ],
    displayImage: "/images/temp.png",
    expandedImage: "/images/temp.png",
  },
];

const Infographics: FC = () => {
  return (
    <div className="infographic-inner-padding relative infographic-page-height w-screen flex flex-col items-start md:items-center gap-10">
      <h2 className="text-center max-w-[665px]">
        Using Tech to save <span className="text-somos-red">lorem ipsum,</span>{" "}
        <span className="text-somos-orange">lorem ipsum,</span>{" "}
        <span className="text-somos-teal">loremipsu ipsunnk</span>
      </h2>
      <div className="relative flex flex-row justify-center gap-6 w-screen overflow-x-auto">
        {infographicsData.map((data, index) => (
          <InfographicsCard data={data} key={index} />
        ))}
      </div>
      <PatternSVG className="absolute -bottom-20 md:-bottom-10 -z-[2] left-1/2 -translate-x-1/2" />
    </div>
  );
};

interface Props {
  data: InfographicsDataType;
}
const InfographicsCard: FC<Props> = (props: Props) => {
  const { data } = props;
  const [winWidth, winHeight] = useWindowSize();

  return (
    <div
      className="relative rounded-[32px] cursor-pointer overflow-hidden"
      style={{
        width: winWidth >= 1024 ? 400 * 0.9 : 228,
        height: winWidth >= 1024 ? 600 * 0.9 : 342,
      }}
    >
      <Image
        src={data.displayImage}
        alt="Axolotl"
        className="object-cover rounded-[32px] transition-500 hover:scale-110"
        fill
      />
    </div>
  );
};

export default Infographics;
