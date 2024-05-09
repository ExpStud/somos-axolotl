import { FC, HTMLAttributes, useContext } from "react";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import { ViewContext } from "@contexts";
import { InfographicsDataType } from "@types";
import { infographicsData } from "@constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Infographics: FC<Props> = (props: Props) => {
  const { className } = props;

  return (
    <div
      className={`relative w-screen flex flex-col items-start md:items-center gap-10 z-10 ${className}`}
    >
      <h2 className="self-center text-center max-w-[665px]">
        Our work in <span className="text-somos-red">Xochimilco</span>{" "}
        {/* <span className="text-somos-orange">lorem ipsum,</span>{" "} */}
        <br /> <span className="text-somos-teal">(where the</span>{" "}
        <span className="text-somos-orange">flowers grow)</span>
      </h2>
      <div className="hscroll relative flex flex-row justify-start md:justify-center gap-6 w-screen overflow-x-auto pr-12 md:pr-0 pb-2">
        {infographicsData.map((data, index) => (
          <InfographicsCard data={data} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

interface ICProps {
  data: InfographicsDataType;
  index: number;
}
const InfographicsCard: FC<ICProps> = (props: ICProps) => {
  const { data, index } = props;
  const [winWidth, winHeight] = useWindowSize();

  const { setShowModal } = useContext(ViewContext);

  return (
    <div
      className={`info-gradient relative cursor-pointer overflow-hidden flex flex-col justify-end px-8 py-8 lg:py-6 gap-3 min-w-[228px] min-h-[342px]  ${
        index === 0
          ? "rounded-bl-[100px]"
          : index === 2
          ? "rounded-tr-[100px]"
          : ""
      }`}
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
      <p className="text-white text-xs lg:text-base line-clamp-4">
        {data.content[0]}
      </p>
      <Image
        src={data.displayImage}
        alt="Axolotl"
        className={`absolute object-cover  transition-500 hover:scale-110 -z-[1]  ${
          index === 0
            ? "rounded-bl-[100px]"
            : index === 2
            ? "rounded-tr-[100px]"
            : ""
        }`}
        fill
      />
    </div>
  );
};

export default Infographics;
