import { FC, HTMLAttributes } from "react";

type PartnersType = {
  name: string;
  image: string;
  href: string;
};
const partners: PartnersType[] = [
  { name: "Partner 1", image: "/images/temp.png", href: "/" },
  { name: "Partner 2", image: "/meta.png", href: "/" },
  { name: "Partner 3", image: "/images/temp.png", href: "/" },
  { name: "Partner 4", image: "/meta.png", href: "/" },
  { name: "Partner 5", image: "/images/temp.png", href: "/" },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Partners: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div
      className={`relative w-screen flex flex-col items-center gap-6  ${className}`}
    >
      <h2 className="text-center">Our partners</h2>
      <p className="text-center max-w-[344px] lg:max-w-[415px] ">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual
      </p>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 max-w-[344px] lg:max-w-[610px] pt-8">
        {partners.map((partner, index) => (
          <div
            className="rounded-[32px] bg-somos-brown w-[106px] lg:w-[190px] h-[106px] lg:h-[190px] cursor-pointer"
            key={index}
            onClick={() => window.open(partner.href, "_blank")}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
