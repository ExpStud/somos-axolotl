import { FC, useContext } from "react";
import { PatternSVG } from "@components";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import { ViewContext } from "@contexts";
import { InfographicsDataType } from "@types";
import { infographicsData } from "@constants";

const Infographics: FC = () => {
  return (
    <div className="infographic-inner-padding relative infographic-page-height w-screen flex flex-col items-start md:items-center gap-10">
      <h2 className="text-center max-w-[665px]">
        Using Tech to save <span className="text-somos-red">lorem ipsum,</span>{" "}
        <span className="text-somos-orange">lorem ipsum,</span>{" "}
        <span className="text-somos-teal">loremipsu ipsunnk</span>
      </h2>
      <div className="relative flex flex-row justify-start md:justify-center gap-6 w-screen overflow-x-auto pr-12 md:pr-0 pb-6">
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

  const { setShowModal } = useContext(ViewContext);

  return (
    <div
      className="info-gradient relative rounded-[32px] cursor-pointer overflow-hidden flex flex-col justify-end px-8 py-6 gap-3 min-w-[228px] min-h-[342px]"
      style={{
        width: winWidth >= 1024 ? 400 * 0.9 : 228,
        height: winWidth >= 1024 ? 600 * 0.9 : 342,
      }}
      onClick={() => setShowModal(data)}
    >
      <Image src={data.icon} alt="Icon" width={72} height={72} />
      <h3 className="text-white text-xs lg:text-xl font-poppins-semibold">
        {data.title}
      </h3>
      <p className="text-white text-xs lg:text-base">{data.content[0]}</p>
      <Image
        src={data.displayImage}
        alt="Axolotl"
        className="absolute object-cover rounded-[32px] transition-500 hover:scale-110 -z-[1]"
        fill
      />
    </div>
  );
};

export default Infographics;
