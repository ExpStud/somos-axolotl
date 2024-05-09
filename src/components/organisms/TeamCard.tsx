import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { useWindowSize } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: "scum" | "gio" | "cass";
}

type Team = {
  id: string;
  name: string;
  text: string;
  src: string;
  mobile: string;
  direction: "left" | "right";
  backgroundColor: string;
  accentColor: string;
};

const team: Team[] = [
  {
    id: "scum",
    name: "Scum Matt Martinez",
    text: `Matt "Scum" Martinez is a Solana success story: a digital artist who found his medium, inspiration, and audience in the world of web3. He was the highest selling artist for the year of 2023 & believes unequivocally in the power of web3 technology to change peoples lives.`,
    src: "/images/about/scum-3xl.png",
    mobile: "/images/about/scum-sm-1.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#41240F",
  },
  {
    id: "gio",
    name: "Giovanna Gonzalez",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/gio.png",
    mobile: "/images/about/gio-sm.png",
    direction: "left",
    backgroundColor: "",
    accentColor: "#FE6375",
  },
  {
    id: "cass",
    name: "Casson Trenor",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/cass.png",
    mobile: "/images/about/cass-sm.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#FFB93E",
  },
];

const TeamCard: FC<Props> = (props: Props) => {
  const { id, className } = props;

  const [winWidth] = useWindowSize();

  const isDesktop = winWidth >= 1024;

  const iconSize = isDesktop ? 32 : 22;
  const patternSize = isDesktop ? 65 : 32;

  const containerClass =
    "relative flex flex-col lg:flex-row items-start justify-start lg:justify-between pl-6 pr-3 lg:px-10 w-[344px] lg:w-[960px] aspect-[1.2/2] lg:aspect-[2/1]";

  if (id === "scum") {
    return (
      <div className={containerClass}>
        {/* left column */}
        <div className="flex lg:flex-col items-center lg:items-start justify-start  gap-2 lg:gap-5 lg:w-1/3 lg:pt-24 -rotate-1 pb-4 lg:pb-0 mt-[350px] lg:mt-0">
          <Image
            src="/images/design/pattern-brown.svg"
            width={patternSize}
            height={patternSize}
            alt="Pattern"
          />
          <p className="text-lg lg:text-4xl leading-4 lg:leading-tight text-somos-brown-dark font-poppins-semibold w-[124px] whitespace-nowrap">
            Scum <br /> Matt Martinez
          </p>

          <div className={`grid grid-cols-3 gap-1 lg:gap-3 pl-8 lg:pl-0`}>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/fb-brown.svg"
                width={iconSize}
                height={iconSize}
                alt="Facebook"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/ig-brown.svg"
                width={iconSize}
                height={iconSize}
                alt="Telegram"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/x-brown.svg"
                width={iconSize}
                height={iconSize}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-col items-start justify-center gap-5 lg:w-1/3 lg:pt-24 -rotate-1 pb-8">
          <Image
            src="/images/design/squares-brown.svg"
            width={111}
            height={18}
            alt="Brown Squares"
            className=""
          />
          <p className="text-somos-brown-dark text-xs lg:text-base">
            {team[0].text}
          </p>
        </div>
        {/* bg image */}
        <Image
          src={isDesktop ? team[0].src : team[0].mobile}
          fill
          alt="Scum"
          className="absolute inset-0 -z-[1]"
        />
      </div>
    );
  }

  if (id === "gio") {
    return (
      <div className={`${containerClass} ml-3`}>
        {/* left column */}
        <div className="flex lg:flex-col items-center lg:items-start justify-start  gap-2 lg:gap-5 lg:w-1/3 lg:pt-24 pb-4 lg:pb-0  mt-[350px] lg:mt-0">
          <Image
            src="/images/design/pattern-pink.svg"
            width={patternSize}
            height={patternSize}
            alt="Pattern"
          />
          <p className="text-lg lg:text-4xl leading-4 lg:leading-tight font-poppins-semibold text-white max-w-[150px] lg:max-w-full">
            {team[1].name}
          </p>

          <div className={`grid grid-cols-3 gap-1 lg:gap-3 pl-3`}>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/fb-pink.svg"
                width={iconSize}
                height={iconSize}
                alt="Facebook"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/ig-pink.svg"
                width={iconSize}
                height={iconSize}
                alt="Telegram"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/x-pink.svg"
                width={iconSize}
                height={iconSize}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-col items-start justify-center gap-5 lg:w-1/3 lg:pt-24 pb-8 pr-2 lg:pr-0">
          <Image
            src="/images/design/squares-pink.svg"
            width={111}
            height={18}
            alt="Brown Squares"
          />
          <p className="text-white text-xs lg:text-base">{team[1].text}</p>
        </div>
        {/* bg image */}
        <Image
          src={isDesktop ? team[1].src : team[1].mobile}
          fill
          alt="Fio"
          className="absolute inset-0 -z-[1]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-start justify-end pl-6 pr-3 lg:px-10 w-[344px] lg:w-[960px] max-h-[590px] lg:max-h-[480px] aspect-[1.2/2] lg:aspect-[2/1] rotate-1 lg:rotate-0`}
    >
      <div className="flex flex-col items-start justify-center gap-5 lg:pt-24 lg:pb-8 lg:w-[54%] pt-12 lg:rotate-1 pr-3 lg:pr-8  mt-[290px] lg:-mt-12">
        <div className="flex flex-row lg:flex-col items-start justify-center gap-1 lg:gap-5">
          <Image
            src="/images/design/pattern-yellow.svg"
            width={patternSize}
            height={patternSize}
            alt="Pattern"
          />
          <p className="text-lg lg:text-4xl leading-4 lg:leading-tight font-poppins-semibold text-white max-w-[120px] lg:max-w-full">
            {team[2].name}
          </p>

          <div className={`grid grid-cols-3 gap-1 lg:gap-3 pl-14 lg:p-0`}>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/fb-yellow.svg"
                width={iconSize}
                height={iconSize}
                alt="Facebook"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/ig-yellow.svg"
                width={iconSize}
                height={iconSize}
                alt="Telegram"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/x-yellow.svg"
                width={iconSize}
                height={iconSize}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <Image
          src="/images/design/squares-yellow.svg"
          width={111}
          height={18}
          alt="Brown Squares"
          className="lg:self-end lg:-mt-6"
        />
        <p className="text-xs lg:text-base text-white">{team[2].text}</p>
      </div>
      {/* bg image */}
      <Image
        src={isDesktop ? team[2].src : team[2].mobile}
        fill
        alt="Fio"
        className="absolute inset-0 -z-[1]"
      />
    </div>
  );
};

export default TeamCard;
