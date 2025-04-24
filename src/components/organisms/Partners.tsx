import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";
import { useTranslation } from "next-i18next";

type PartnersType = {
  name: string;
  image: string;
  href: string;
};
const partners: PartnersType[] = [
  {
    name: "Slimes",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/slimes.svg`,
    href: "/",
  },
  {
    name: "Santuario Ajolote",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/santuario.svg`,
    href: "/",
  },
  {
    name: "Solana",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/solana.svg`,
    href: "/",
  },
  {
    name: "Roel",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/roel.svg`,
    href: "/",
  },
  {
    name: "Pontyx",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/pontyx.png`,
    href: "/",
  },
  {
    name: "Sphere",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/sphere.png`,
    href: "/",
  },
  {
    name: "Leap Lab",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/leap.png`,
    href: "/",
  },
  {
    name: "Maya Moon",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/mayamoon.png`,
    href: "/",
  },
  {
    name: "Brasil",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/brasil.svg`,
    href: "/",
  },
  {
    name: "Sandbox Studio",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/partners/sandbox.svg`,
    href: "/",
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Partners: FC<Props> = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const firstRowPartners = partners.slice(0, 3);
  const secondRowPartners = partners.slice(3, 7);
  const thirdRowPartners = partners.slice(7);

  const [winWidth] = useWindowSize();
  const size = winWidth >= 1024 ? 190 : winWidth >= 768 ? 120 : 60;

  return (
    <div
      className={`relative w-screen flex flex-col items-center gap-6  ${className}`}
    >
      <p className="text-center max-w-[260px]  ">{t("PARTNERS_DESC")}</p>
      <h2 className="text-center">{t("PARTNERS_TITLE")}</h2>
      <div className="flex items-center gap-5 md:gap-10 lg:gap-20 pt-8 ">
        {firstRowPartners.map((partner, index) => (
          <div
            className={`text-center flex items-center h-[60px]  md:h-[120px] lg:h-[190px] ${
              index < 2 ? "border-r border-black/20 pr-5 md:pr-10 lg:pr-20" : ""
            }`}
            key={index}
          >
            <Image
              src={partner.image}
              alt={partner.name}
              height={size}
              width={size}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-5 md:gap-10 lg:gap-20 lg:pt-8">
        {secondRowPartners.map((partner, index) => (
          <div
            className={`text-center ${
              index < 3 ? "border-r border-black/20 pr-5 md:pr-10 lg:pr-20" : ""
            }`}
            key={index + 3}
          >
            <Image
              src={partner.image}
              alt={partner.name}
              height={size}
              width={size}
            />
          </div>
        ))}
      </div>{" "}
      <div className="flex gap-5 md:gap-10 lg:gap-20 lg:pt-8 items-center">
        {thirdRowPartners.map((partner, index) => (
          <div
            className={`text-center flex items-center h-[60px]  md:h-[120px] lg:h-[190px] ${
              index < 2 ? "border-r border-black/20 pr-5 md:pr-10 lg:pr-20" : ""
            }`}
            key={index + 3}
          >
            <Image
              src={partner.image}
              alt={partner.name}
              height={size}
              width={size}
              className={`${index >= 1 ? "p-3 md:p-10" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
