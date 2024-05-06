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
    src: "/images/about/scum.png",
    texture: "/images/about/scum-texture.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#41240F",
  },
  {
    id: "gio",
    name: "Giovanna Gonzalez",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/gio.png",
    texture: "/images/about/gio-texture.png",
    direction: "left",
    backgroundColor: "",
    accentColor: "#FE6375",
  },
  {
    id: "cass",
    name: "Casson Trenor",
    text: `Giovanna Gonzalez is a Mexican artist and activist who specializes in large-scale productions that drive awareness and catalyze environmental action. She is known for her innovative community empowerment initiatives which have led to the adoption of cutting-edge sustainability practices in Vietnam, Morocco, Sri Lanka and Mexico.`,
    src: "/images/about/cass.png",
    texture: "/images/about/cass-texture.png",
    direction: "right",
    backgroundColor: "",
    accentColor: "#FFB93E",
  },
];

const TeamCard: FC<Props> = (props: Props) => {
  const { className } = props;

  return (
    <div
      className={`relative flex items-center justify-between px-10 ${className}`}
    ></div>
  );
};

export default TeamCard;
