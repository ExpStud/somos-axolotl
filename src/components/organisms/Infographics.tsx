import { FC, HTMLAttributes, useContext } from "react";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import { ViewContext } from "@contexts";
import { InfographicsDataType } from "@types";
import { useTranslation } from "next-i18next";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Infographics: FC<Props> = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const infographicsData: InfographicsDataType[] = [
    {
      title: t("INFO_TITLE_2"),
      content: [
        t("INFO_DESC_2_1"),
        t("INFO_DESC_2_2"),
        t("INFO_DESC_2_3"),
        t("INFO_DESC_2_4"),
        t("INFO_DESC_2_5"),
      ],
      short: t("INFO_SMALL_DESC_2"),
      displayImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-1-sm.jpg`,
      expandedImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-1.jpg`,
      icon: `${process.env.CLOUDFLARE_STORAGE}/images/design/info-1-new.svg`,
    },
    {
      title: t("INFO_TITLE_1"),
      short: t("INFO_SMALL_DESC_1"),
      content: [
        t("INFO_DESC_1_1"),
        t("INFO_DESC_1_2"),
        t("INFO_DESC_1_3"),
        t("INFO_DESC_1_4"),
        t("INFO_DESC_1_5"),
      ],
      displayImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-2-sm.jpg`,
      expandedImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-2.jpg`,
      icon: `${process.env.CLOUDFLARE_STORAGE}/images/design/info-2-new.svg`,
    },
    {
      title: t("INFO_TITLE_3"),
      short: t("INFO_SMALL_DESC_3"),
      content: [
        t("INFO_DESC_3_1"),
        t("INFO_DESC_3_2"),
        t("INFO_DESC_3_3"),
        t("INFO_DESC_3_4"),
        t("INFO_DESC_3_5"),
        t("INFO_DESC_3_6"),
        t("INFO_DESC_3_7"),
      ],
      displayImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-3-sm.jpg`,
      expandedImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/pill-3.jpg`,
      icon: `${process.env.CLOUDFLARE_STORAGE}/images/design/info-3-new.svg`,
    },
  ];

  return (
    <div
      className={`relative w-screen flex flex-col items-start md:items-center gap-10 z-10 ${className}`}
    >
      <h2 className="self-center text-center max-w-[665px]">
        {t("INFO_HEADER_1")}{" "}
        <span className="text-somos-red">{t("INFO_HEADER_2")}</span>{" "}
        {/* <span className="text-somos-orange">lorem ipsum,</span>{" "} */}
        <br /> <span className="text-somos-teal">
          {t("INFO_HEADER_3")}
        </span>{" "}
        <span className="text-somos-orange">{t("INFO_HEADER_4")}</span>
      </h2>
      <div className="hscroll relative flex flex-row justify-start md:justify-center gap-6 w-screen overflow-x-auto pr-12 md:px-4 pb-2  ">
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
        {data.short}
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
