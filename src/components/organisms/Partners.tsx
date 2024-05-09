import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

type PartnersType = {
  name: string;
  image: string;
  href: string;
};
const partners: PartnersType[] = [
  { name: "Solana", image: "/images/partners/solana.svg", href: "/" },
  {
    name: "Santuario Ajolote",
    image: "/images/partners/santuario.svg",
    href: "/",
  },
  { name: "Maya Moon", image: "/images/partners/mayamoon.svg", href: "/" },
  { name: "Roel", image: "/images/partners/roel.svg", href: "/" },
  { name: "Pontyx", image: "/images/partners/pontyx.svg", href: "/" },
  { name: "Sphere", image: "/images/partners/sphere.svg", href: "/" },
  { name: "Leap Lab", image: "/images/partners/leap.svg", href: "/" },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Partners: FC<Props> = (props: Props) => {
  const { className } = props;

  const firstRowPartners = partners.slice(0, 3);
  const secondRowPartners = partners.slice(3);

  const [winWidth] = useWindowSize();
  const size = winWidth >= 1024 ? 190 : winWidth >= 768 ? 120 : 60;

  return (
    <div
      className={`relative w-screen flex flex-col items-center gap-6  ${className}`}
    >
      <h2 className="text-center">Our partners</h2>
      <p className="text-center max-w-[344px] lg:max-w-[415px] ">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual
      </p>
      <div className="flex gap-5 md:gap-10 lg:gap-20 pt-8">
        {firstRowPartners.map((partner, index) => (
          <div
            className={`text-center ${
              index < 2 ? "border-r border-black/20 pr-5 md:pr-10 lg:pr-20" : ""
            }`}
            key={index}
            // onClick={() => window.open(partner.href, "_blank")}
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
            // onClick={() => window.open(partner.href, "_blank")}
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
    </div>
  );
};

export default Partners;
