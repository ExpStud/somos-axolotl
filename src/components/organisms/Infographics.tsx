import { FC } from "react";
import { PatternSVG, TextDropdown } from "@components";
import Image from "next/image";

const Infographics: FC = () => {
  return (
    <div className="inner-padding relative min-h-[100svh] w-screen flex justify-center">
      <div className="max-width flex flex-col lg:flex-row no-wrap pt-20 3xl:justify-between w-full"></div>
      <PatternSVG className="absolute -bottom-20 md:bottom-0 -z-[2]" />
    </div>
  );
};

export default Infographics;
