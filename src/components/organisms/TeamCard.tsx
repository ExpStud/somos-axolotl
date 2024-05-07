import Image from "next/image";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: "scum" | "gio" | "cass";
}

type Team = {
  id: string;
  name: string;
  text: string;
  src: string;
  texture: string;
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
    texture: "/images/about/scum-mobile.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#41240F",
  },
  {
    id: "gio",
    name: "Giovanna Gonzalez",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/gio.png",
    texture: "/images/about/gio-mobile.png",
    direction: "left",
    backgroundColor: "",
    accentColor: "#FE6375",
  },
  {
    id: "cass",
    name: "Casson Trenor",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/cass.png",
    texture: "/images/about/cass-mobile.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#FFB93E",
  },
];

const TeamCard: FC<Props> = (props: Props) => {
  const { id, className } = props;

  const size = 32;

  if (id === "scum") {
    return (
      <div
        className={`relative flex items-start justify-between px-10 xl:w-[950px] aspect-[2/1] mr-3 ${className}`}
      >
        {/* left column */}
        <div className="flex flex-col items-start justify-start gap-5 w-1/3 pt-24 -rotate-1">
          <Image
            src="/images/design/pattern-brown.svg"
            width={65}
            height={65}
            alt="Pattern"
          />
          <p className="text-4xl text-somos-brown-dark font-poppins-semibold ">
            Scum <br /> Matt Martinez
          </p>

          <div className={`grid grid-cols-3 gap-3 ${className}`}>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/fb-brown.svg"
                width={size}
                height={size}
                alt="Facebook"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/ig-brown.svg"
                width={size}
                height={size}
                alt="Telegram"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/x-brown.svg"
                width={size}
                height={size}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-col items-start justify-center gap-5 w-1/3 pt-24 -rotate-1">
          <Image
            src="/images/design/squares-brown.svg"
            width={111}
            height={18}
            alt="Brown Squares"
          />
          <p className="text-somos-brown-dark">{team[0].text}</p>
        </div>
        {/* bg image */}
        <Image
          src={team[0].src}
          fill
          alt="Scum"
          className="absolute inset-0 -z-[1]"
        />
      </div>
    );
  }

  if (id === "gio") {
    return (
      <div
        className={`relative flex items-start justify-between px-10 xl:w-[950px] aspect-[2/1] ${className}`}
      >
        {/* left column */}
        <div className="flex flex-col items-start justify-start gap-5 w-1/3 pt-24 ">
          <Image
            src="/images/design/pattern-pink.svg"
            width={65}
            height={65}
            alt="Pattern"
          />
          <p className="text-4xl font-poppins-semibold text-white ">
            {team[1].name}
          </p>

          <div className={`grid grid-cols-3 gap-3 ${className}`}>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/fb-pink.svg"
                width={size}
                height={size}
                alt="Facebook"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/ig-pink.svg"
                width={size}
                height={size}
                alt="Telegram"
              />
            </a>
            <a href={"/"} rel="noreferrer" target="_blank">
              <Image
                src="/images/icons/x-pink.svg"
                width={size}
                height={size}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="flex flex-col items-start justify-center gap-5 w-1/3 pt-24 pl-5">
          <Image
            src="/images/design/squares-pink.svg"
            width={111}
            height={18}
            alt="Brown Squares"
          />
          <p className="text-white">{team[1].text}</p>
        </div>
        {/* bg image */}
        <Image
          src={team[1].src}
          fill
          alt="Fio"
          className="absolute inset-0 -z-[1]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-start justify-end px-10 xl:w-[950px] aspect-[2/1] ${className}`}
    >
      <div className="flex flex-col items-start justify-center gap-5 w-[54%] pt-12 rotate-1 pr-8">
        <Image
          src="/images/design/pattern-yellow.svg"
          width={65}
          height={65}
          alt="Pattern"
        />
        <p className="text-4xl font-poppins-semibold text-white ">
          {team[2].name}
        </p>

        <div className={`grid grid-cols-3 gap-3 ${className}`}>
          <a href={"/"} rel="noreferrer" target="_blank">
            <Image
              src="/images/icons/fb-yellow.svg"
              width={size}
              height={size}
              alt="Facebook"
            />
          </a>
          <a href={"/"} rel="noreferrer" target="_blank">
            <Image
              src="/images/icons/ig-yellow.svg"
              width={size}
              height={size}
              alt="Telegram"
            />
          </a>
          <a href={"/"} rel="noreferrer" target="_blank">
            <Image
              src="/images/icons/x-yellow.svg"
              width={size}
              height={size}
              alt="Instagram"
            />
          </a>
        </div>
        <Image
          src="/images/design/squares-yellow.svg"
          width={111}
          height={18}
          alt="Brown Squares"
          className="self-end -mt-6"
        />
        <p className="text-white">{team[2].text}</p>
      </div>
      {/* bg image */}
      <Image
        src={team[2].src}
        fill
        alt="Fio"
        className="absolute inset-0 -z-[1]"
      />
    </div>
  );
};

export default TeamCard;
